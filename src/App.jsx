import './App.css'
// import Face from './assets/face_icon.png'
import Loadingsvg from '/loading.svg'
import { useEffect, useState } from 'react'
import Centerstage from './components/Centerstage'

function App() {

    const [show_image, set_show_image] = useState(false)
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
          <>
            <div className="flex flex-row space-x-36">

            <div className='flex flex-col'>
              <div className="bubble size-24 mt-7 bg-blue-400 rounded-full p">
                <text>About</text>
              </div>
              <div className="bubble size-24 mt-60 bg-red-400 rounded-full">
              <text>Education</text>
              </div>
            </div>

            <div className='flex flex-col'>
              <div className="bubble size-24 mt-44 bg-yellow-400 rounded-full">
              <text>Experience</text>
              </div>
            </div>

            {/* CENTER STAGE */}
            <Centerstage  />

            <div className='flex flex-col'>
              <div className="bubble size-24 mt-48 bg-pink-400 rounded-full p">
              <text>Projects</text>
              </div>
              {/* <div className="bubble size-24 mt-52 bg-green-400 rounded-full"></div> */}
            </div>

            <div className='flex flex-col'>
              <div className="bubble size-24 mt-7 bg-green-400 rounded-full">
              <text>Skills</text>
              </div>
              <div className="bubble size-24 mt-60 bg-cyan-400 rounded-full p">
              <text>ECA</text>

              </div>
            </div>

            </div>
 
          </>
          
        ) }
      </div>
    </>
  )
  
}

export default App