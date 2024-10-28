import '../App.css';
import * as THREE from 'three';
import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stats, useTexture, Stage } from '@react-three/drei';
import { easing } from 'maath';
import { motion } from "framer-motion"; 
import Loadingsvg from '/loading.svg';
function Prophead(props) {
  const mesh = useRef();
  const { nodes, materials  } = useGLTF('/portfolio/head_model.glb'); // Ensure the path is correct
  const [dummy] = useState(() => new THREE.Object3D());

  useFrame((state, dt) => {
    dummy.lookAt(props.pointer.x * 2 , props.pointer.y * 0.8, 1); 
    easing.dampQ(mesh.current.quaternion, dummy.quaternion, 0.15, dt);
  });
  // const texture = useTexture('baking.png')
  return (
    <mesh ref={mesh}
      castShadow
      receiveShadow
      geometry={nodes.head.geometry} {...props} 
      material={materials['baked#']}
      position={[0,-0.2,0]}
    >
      <meshStandardMaterial  
      {...materials['baked#']}
      material = {materials['baked#']}
      envMapIntensity={0.8}
      roughness={0.5} 
      bumpScale={1} 
      normalScale={1} 
      shadows
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
   const [isLoading, setIsLoading] = useState(false); // State to track loading
  // Function to handle when the GLTF model is loaded
  const handleModelLoad = () => {
    setIsLoading(false); // Set loading to false when model has loaded
  };
  const sentenceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Delay between each sentence
      },
    },
  };

  return (
    <>
    {isLoading && (
       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
       <img src={Loadingsvg} alt="Loading..." className='ml-10'/>
       <motion.div
         className="flex flex-row space-x-2 text-center pt-10 loading_text justify-center"
         variants={containerVariants}
         initial="hidden"
         animate="visible"
       >
         <motion.p variants={sentenceVariants}>L</motion.p>
         <motion.p variants={sentenceVariants}>o</motion.p>
         <motion.p variants={sentenceVariants}>a</motion.p>
         <motion.p variants={sentenceVariants}>d</motion.p>
         <motion.p variants={sentenceVariants}>i</motion.p>
         <motion.p variants={sentenceVariants}>n</motion.p>
         <motion.p variants={sentenceVariants}>g</motion.p>
         <motion.p variants={sentenceVariants}>.</motion.p>
         <motion.p variants={sentenceVariants}>.</motion.p>
         <motion.p variants={sentenceVariants}>.</motion.p>
         <motion.p variants={sentenceVariants}>.</motion.p>
         <motion.p variants={sentenceVariants}>.</motion.p>
       </motion.div>
     </div>
      )}

    <Canvas gl={{antialias:true,  preserveDrawingBuffer: true }} shadows dpr={[1, 1.5]} camera={{ position: [0,0,10.5], fov: 20} } >
      
      <ambientLight intensity={0.35}/>

       <directionalLight
        position={[10,10,10]}
        // position={[1,1,0]}
        castShadow
        // color={[1,1,0]}
        intensity={Math.PI * 0.5}
        />

      <Suspense fallback={null} shadows contactShadow preset={'rembrandt'} environment={'city'}>
        <Stage
        shadows
        adjustCamera ={false}
        contactShadow
        preset={'rembrandt'}
        environment={'city'}
        onPointerMissed={handleModelLoad} // Call when model is loaded
        >

        <Prophead pointer={pointer} />
        </Stage>
      </Suspense>
      {/* <Stats /> */}
    </Canvas>
    </>
  );
}
useGLTF.preload('/portfolio/head_model.glb')
export default Memoji;
