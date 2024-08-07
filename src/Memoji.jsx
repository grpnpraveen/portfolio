import './App.css';
import * as THREE from 'three';
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stats } from '@react-three/drei';
import { easing } from 'maath';

function Suzanne(props ) {
  const mesh = useRef();
  const { nodes } = useGLTF('head_model.glb'); // Ensure the path is correct
  const [dummy] = useState(() => new THREE.Object3D());

  useFrame((state, dt) => {
    dummy.lookAt(props.pointer.x * 0.7 , props.pointer.y * 0.7, 1); // Adjusted lookAt to account for perspective
    easing.dampQ(mesh.current.quaternion, dummy.quaternion, 0.15, dt);
  });

  return (
    <mesh ref={mesh} geometry={nodes.head.geometry} {...props} receiveShadow>
      {/* <meshNormalMaterial /> */}
      <meshStandardMaterial />
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

export default Memoji;
