import { motion } from "framer-motion";
import Navbar from "./Navbar";
import PropTypes from 'prop-types';
import '../App.css'
import StarCanvas from "./Star";

Transition.propTypes = {
    text_color_to: PropTypes.string.isRequired,
    bg_color_to: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    star_color_to: PropTypes.string.isRequired,
    children: PropTypes.any
  }




function Transition({text_color_to , heading, children, bg_color_to, star_color_to})
{

   return(
        <div className="App">
          <motion.div className="flex flex-col space-x-6"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              minWidth: '100vw',
              boxShadow:'0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
              backdropFilter:'blur( 20px )',
              minHeight: '100%',
              height: 'auto',
              background: '#181a1b',
              position: 'absolute',
              top: '0',
              left: '0',
              transformOrigin: 'bottom',
              zIndex:8
            }}
          >
            <StarCanvas color_to={star_color_to}/>
            {/* CENTER */}
            <div className="m-8">
            <Navbar home_color={text_color_to}/>
            </div>
 
            <div className="flex flex-col p-9">
                <div className="text-7xl text-[#cecac3] self-start">{heading} .</div> 

                <motion.div
                  className={`w-16 h-1 mt-4 rounded ${bg_color_to}`}
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