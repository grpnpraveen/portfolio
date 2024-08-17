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
          <div className="absolute invisible">
             <Centerstage  />
          </div>
          <img src={Loadingsvg}></img>
          </>
        ) : (
          <>
            <div className="flex flex-row space-x-32">
           

            {/* CENTER STAGE */}
            <Centerstage  />
             

            </div>
 
          </>
          
        ) }
      </div>
    </>
  )
  
}

export default App