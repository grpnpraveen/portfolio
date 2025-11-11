import '../App.css'
import StarCanvas from './Star';
import Centerstage from './Centerstage'
import React from 'react';
function Home()
{
       React.useEffect(() => {
    if (window.umami) {
      window.umami.track('Home Page Loaded');
    }
  }, []);
    return (
            <>
            
             <div className="flex flex-row space-x-16 justify-center w-[100%]">
             <StarCanvas color_to='rgba(255,255,255,' />
                {/* CENTER STAGE */}
                <Centerstage  />
       
             </div>
             {/* </StarCanvas> */}
            </>);
}



export default Home;