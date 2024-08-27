import './App.css';
import Loadingsvg from '/loading.svg';
import { Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Eca from './components/Eca';
import Education from './components/Education';
import { motion } from "framer-motion";
// import { AnimatePresence } from 'framer-motion';

function App() {
  const [show_image, set_show_image] = useState(false);
  const location = useLocation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Delay between each sentence
      },
    },
  };
  
  const sentenceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };




  useEffect(() => {
    const timer = setTimeout(() => {
      set_show_image(false);
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <>
      <div className='flex flex-col items-center justify-center self-center place-content-center'>
        {show_image ? (
          <>
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
                    {/* <div className='flex flex-col text-center pt-10 loading_text'>
                      <p>L o a d i n g ....</p>
                    </div> */}
                  </div>
          </>
        ) : (
          <>
          <Suspense fallback={
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
             <img src={Loadingsvg} alt="Loading..." />
           </div>
          }>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/eca" element={<Eca />} />
              <Route path="/education" element={<Education />} />
            </Routes>
            </Suspense>
          </>
        )}
      </div>
    </>
  );
}

export default App;
