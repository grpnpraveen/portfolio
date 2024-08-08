import './App.css';
import * as THREE from 'three';
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stats, useTexture, Environment } from '@react-three/drei';
import { easing } from 'maath';

function Suzanne(props ) {
  const mesh = useRef();
  const { nodes, materials  } = useGLTF('head_model.glb '); // Ensure the path is correct
  const [dummy] = useState(() => new THREE.Object3D());

  useFrame((state, dt) => {
    dummy.lookAt(props.pointer.x * 0.7 , props.pointer.y * 0.7, 1); 
    easing.dampQ(mesh.current.quaternion, dummy.quaternion, 0.15, dt);
  });
  const texture = useTexture('baking.png')
  return (
    <mesh ref={mesh}
      castShadow
      receiveShadow
      geometry={nodes.head.geometry} {...props} 
      material={materials['baked#']}

    >

      <meshStandardMaterial  
      {...materials['baked#']}
      material = {materials['baked#']}
      emissiveMap={texture}
      emissiveIntensity={1} // Adjust the emission intensity
      emissive={3} 
      roughness={0.5} 
      bumpScale={1} 
      normalScale={1} 
      displacementScale={1}/>

    </mesh>
  );
}

function Memoji() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Update pointer position state with the mouse coordinates
      setPointer({
        x: (event.clientX / window.innerWidth) * 2 - 1, // Normalized to [-1, 1]
        y: -(event.clientY / window.innerHeight) * 2 + 1 // Normalized to [-1, 1]
      });
    };

     // Add event listener for mouse movement
     window.addEventListener('mousemove', handleMouseMove);

     // Cleanup the event listener on component unmount
     return () => {
       window.removeEventListener('mousemove', handleMouseMove);
     };
   }, []);

  return (
    <Canvas  camera={{ position: [0,0,4.5], fov: 50} } shadows >
      <Environment> </Environment>
      <ambientLight />
      <directionalLight
        position={[10,10,10]}
        castShadow
        intensity={Math.PI * 0.8}
        
      />
      <Suzanne pointer={pointer} />
      <Stats />
    </Canvas>
  );
}
useGLTF.preload('head_model.glb')
export default Memoji;
