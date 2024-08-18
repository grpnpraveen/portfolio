import './App.css'
// import Face from './assets/face_icon.png'
import Loadingsvg from '/loading.svg'
import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import { AnimatePresence } from 'framer-motion';


function App() {

    const [show_image, set_show_image] = useState(false)
    const location = useLocation();

    useEffect(()=>{
      setTimeout(()=>{
        set_show_image(false)
      },3000)
    },[])
      
  return (
    <>
    
      <div>
        { show_image ? (
          <>
            <img src={Loadingsvg}></img>
          </>
        ) : (
          <>
          <AnimatePresence>



           

          <Routes location={location} key={location.pathname}>
            <Route index path="/portfolio" element={<Home/>}/>
            <Route path="/portfolio/about" element={<About/>}/>
          </Routes>
          </AnimatePresence>
           


 
          </>
          
        ) }
      </div>
    </>
  )
  
}

export default App