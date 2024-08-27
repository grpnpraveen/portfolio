import Transition from "./Transition";
import { motion } from "framer-motion";


function About()
{
 
    return(
      <>
      <Transition text_color_to='text-orange-500' bg_color_to='bg-orange-500' heading='About' star_color_to='rgb(249, 115, 22,'>

      
        {/* ONE */}
       <div className="flex flex-col mt-16 pl-16 text-xl text-[#cecac3]">

        <motion.div
          initial={{ x: '-200%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        >

          <div className="text-left w-[60%]">
            Hi, I'm <span className=" text-orange-500">Ravi Praveen Gali</span> (He/Him), currently pursuing a Master's in Computer Science at Stony Brook University, NY. My journey in the tech world is driven by a deep passion for programming. 
            {/* <br></br> */}
            With a strong foundation in Python, AI/ML, and Data Science, I specialize in building comprehensive solutions from the ground up. My journey in tech is rooted in continuous learning, and I've honed my skills in both front-end and back-end development. 
          </div> 
        </motion.div>


        {/* Two */}
        <motion.div
          initial={{ x: '-200%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
        >
        <div className="flex flex-row mt-28">

          <div className="size-[40%] bg-black">



          </div>


          <div className="text-left text-xl w-[60%] pr-16">
          My enthusiasm for technology extends to hackathons, where I have consistently excelled. 
          <br></br> 
          I am proud to have emerged as a winner in the prestigious Smart India Hackathon, a national-level competition. Additionally, I have ranked in the top 3 in nearly six other hackathons. 
          </div>

        </div> 
        
        </motion.div>

      {/* Three */}
      
      <motion.div
          initial={{ x: '-200%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
        >
      <div className="flex flex-row mt-28">

      <div className="text-left text-xl w-[60%]">
      These experiences have not only sharpened my technical skills but also fostered a mindset of creative problem-solving, and in my free time, I enjoy creating 3D models and spending time in Blender.
      </div>


        <div className="size-[40%] bg-black">

          

        </div>

      </div> 

</motion.div>






      


      {/* Four */}
      <motion.div
          initial={{ x: '-200%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
        >

      <div className="flex flex-row mt-28">

        <div className="size-[40%] bg-black">



        </div>


        <div className="text-left text-xl w-[60%] pr-16">
        As I continue my academic journey at Stony Brook University, I look forward to further deepening my knowledge in computer science. I am excited about the opportunities to collaborate with brilliant minds and contribute to cutting-edge research in the field.
        </div>

        </div> 


    </motion.div>

        {/* Five */}

        <motion.div
          initial={{ x: '-200%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
        >
        <div className="flex flex-row mt-28">

        <div className="text-left text-xl w-[60%]">
        Let's connect and explore the exciting possibilities at the intersection of technology. Feel free to reach out—I'm always up for a meaningful conversation or collaboration! 🤝
        </div>


          <div className="size-[40%] bg-black">

            

          </div>

        </div> 


    </motion.div>






















        <div className="flex flex-col items-center justify-center self-center mt-28">
          <a href={"mailto:grpnpraveen@gmail.com"} target='blank'>
            <div className="flex flex-col rounded-[10px] bg-orange-600 text-2xl">
              <div className="flex flex-row self-center text-center font-bold text-black p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>

                Connect with  Me 
              </div>
            </div>
          </a>
        </div> 






            







        {/* END */}



      <div className="pb-[5%]"></div>

    </div>

    

    </Transition>

      </>
    );

}



export default About;