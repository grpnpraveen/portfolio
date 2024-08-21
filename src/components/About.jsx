import Transition from "./Transition";
import { motion } from "framer-motion";

function About()
{
 
    return(
      <>
      <Transition text_color_to='text-orange-500' bg_color_to='bg-orange-500' heading='About' star_color_to='rgb(249, 115, 22,'>

      
      
       <div className="flex flex-col mt-16 pl-16 text-xl text-[#cecac3]">

        <motion.div
          initial={{ x: '-200%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >

          <div className="text-left w-[60%]">
            Hi, I'm <span className=" text-orange-500">Ravi Praveen Gali</span> (He/Him), currently pursuing a Master's in Computer Science at Stony Brook University, NY. My journey in the tech world is driven by a deep passion for programming. <br></br>I specialise in problem solving and building applications. 
          </div> 
        </motion.div>


        <div className="flex flex-row mt-40">

          <div className="size-[40%] bg-black">

          </div>


          <div className="text-left text-xl w-[60%]">
          My enthusiasm for technology extends to hackathons, where I have consistently excelled. I am proud to have emerged as a winner in the prestigious Smart India Hackathon, a national-level competition. Additionally, I have ranked in the top 3 in nearly six other hackathons. These experiences have not only sharpened my technical skills but also fostered a mindset of creative problem-solving.
          </div>

        </div> 
        <div className="flex flex-row mt-40">

          <div className="size-[40%] bg-black">

          </div>


          <div className="text-left text-xl w-[60%]">
          My enthusiasm for technology extends to hackathons, where I have consistently excelled. I am proud to have emerged as a winner in the prestigious Smart India Hackathon, a national-level competition. Additionally, I have ranked in the top 3 in nearly six other hackathons. These experiences have not only sharpened my technical skills but also fostered a mindset of creative problem-solving.
          </div>

        </div> 



      <div className="pb-10"></div>

    </div>

    

    </Transition>

      </>
    );

}



export default About;