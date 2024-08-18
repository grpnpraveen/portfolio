import { motion } from "framer-motion";
import Navbar from "./Navbar";
import PropTypes from 'prop-types';



Transition.propTypes = {
    color_to: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    children: PropTypes.any
  }




function Transition({color_to , heading, children})
{
  const color_s = color_to;
   return(
        <div className="App">

        
          <motion.div className="flex flex-col space-x-6"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: '100%',
              height: '100vh',
              background: 'white',
              position: 'absolute',
              top: '0',
              left: '0',
              transformOrigin: 'bottom'
            }}
          >
                       
            {/* CENTER */}
            <div className="m-8">
            <Navbar home_color={`text-${color_s}-500`}/>
            </div>
 
            <div className="flex flex-col mt-9 ml-5 pl-14">
                <text className="text-7xl text-[#47280b] self-start">{heading} .</text> 

                <motion.div
                  className={`w-16 h-1 bg-${color_s}-500 mt-4 rounded`}
                  initial={{ x: '-200%' }}
                  animate={{ x: '0%' }}
                  exit={{ x: '100%' }}
                  transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    top: '0',
                    left: '0',
                    transformOrigin:'left'
                  }}
                ></motion.div>



             </div>

     
          
            
           
                  {children}






        </motion.div>
        </div>
    
      );
}



export default Transition;