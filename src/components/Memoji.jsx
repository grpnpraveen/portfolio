// Memoji.jsx

import '../App.css';
import * as THREE from 'three';
import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stats, Stage } from '@react-three/drei';
import { easing } from 'maath';
import { motion } from "framer-motion"; 
import Loadingsvg from '/loading.svg'; // Ensure the path is correct

function Prophead({ pointer }) {
  const mesh = useRef();
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}/head_model.glb`); // Use dynamic path

  const [dummy] = useState(() => new THREE.Object3D());

  useFrame((state, dt) => {
    dummy.lookAt(pointer.x * 2, pointer.y * 0.8, 1);
    easing.dampQ(mesh.current.quaternion, dummy.quaternion, 0.15, dt);
  });

  return (
    <mesh
      ref={mesh}
      castShadow
      receiveShadow
      geometry={nodes.head.geometry}
      material={materials['baked#']}
      position={[0, -0.2, 0]}
    >
      <meshStandardMaterial
        {...materials['baked#']}
        envMapIntensity={0.8}
        roughness={0.5}
        bumpScale={1}
        normalScale={1}
        displacementScale={1}
      />
    </mesh>
  );
}

function Memoji() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPointer({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleModelLoad = () => setIsLoading(false); // Set loading to false once loaded

  const sentenceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.5 },
    },
  };

  return (
    <>
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={Loadingsvg} alt="Loading..." className="ml-10" />
          <motion.div
            className="flex flex-row space-x-2 text-center pt-10 loading_text justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {'Loading.....'.split('').map((char, index) => (
              <motion.p key={index} variants={sentenceVariants}>
                {char}
              </motion.p>
            ))}
          </motion.div>
        </div>
      )}

      <Canvas
        gl={{ antialias: true, preserveDrawingBuffer: true }}
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 10.5], fov: 20 }}
      >
        <ambientLight intensity={0.35} />
        <directionalLight position={[10, 10, 10]} castShadow intensity={Math.PI * 0.5} />

        <Suspense fallback={null}>
          <Stage
            shadows
            adjustCamera={false}
            contactShadow
            preset="rembrandt"
            environment="city"
            onLoaded={handleModelLoad} // Ensure model loading triggers correctly
          >
            <Prophead pointer={pointer} />
          </Stage>
        </Suspense>
        {/* Uncomment for performance stats if needed */}
        {/* <Stats /> */}
      </Canvas>
    </>
  );
}

// Preload the GLTF model
useGLTF.preload(`${import.meta.env.BASE_URL}/head_model.glb`);

export default Memoji;
