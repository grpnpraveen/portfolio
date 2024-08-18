import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About()
{
   return(
        <div className="App">

        
          <motion.div className="flex items-center justify-center"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: '100%',
              height: '100vh',
              backgroundColor: 'black',
              position: 'absolute',
              top: '0',
              left: '0',
              transformOrigin: 'bottom'
            }}
          >

            {/* CENTER */}
            <Link to="/portfolio/">CLICK ME</Link>

        </motion.div>
        
     
        
        </div>
    
      );
}



export default About;