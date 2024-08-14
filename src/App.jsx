import './App.css'
// import Face from './assets/face_icon.png'
import Loadingsvg from '/loading.svg'
import { useEffect, useState } from 'react'
import Centerstage from './components/Centerstage'

function App() {

    const [show_image, set_show_image] = useState(true)
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
          <Centerstage show='hidden' />
          </>
        ) : (
          <Centerstage  />
        ) }
      </div>
    </>
  )
  
}

export default App