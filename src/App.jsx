import './App.css';
import Loadingsvg from '/loading.svg';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Eca from './components/Eca';
// import { AnimatePresence } from 'framer-motion';

function App() {
  const [show_image, set_show_image] = useState(false);
  const location = useLocation();

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
            <img src={Loadingsvg} alt="Loading..." />
          </>
        ) : (
          <>
            {/* <AnimatePresence> */}
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/eca" element={<Eca />} />
            </Routes>
            {/* </AnimatePresence> */}
          </>
        )}
      </div>
    </>
  );
}

export default App;
