import Transition from "./Transition";

function About()
{
 
    return(
      <>
      <Transition text_color_to='text-orange-500' bg_color_to='bg-orange-500' heading='About' >

        <div className="flex flex-col p-16">

        <div className="text-left w-[60%] text-xl text-orange-900">
        Hi, I'm Ravi <span className="font-bold">Praveen</span> Gali (He/Him), currently pursuing a Master's in Computer Science at Stony Brook University, NY. My journey in the tech world is driven by a deep passion for programming. I specialise in problem solving and building applications. 
        </div> 
       
        <div className="flex flex-row mt-40">
            <div className="size-[40%] bg-black">

            </div>
            <div className="text-left text-xl w-[60%] text-orange-900">
            My enthusiasm for technology extends to hackathons, where I have consistently excelled. I am proud to have emerged as a winner in the prestigious Smart India Hackathon, a national-level competition. Additionally, I have ranked in the top 3 in nearly six other hackathons. These experiences have not only sharpened my technical skills but also fostered a mindset of creative problem-solving.
            </div>
        </div> 
        <div className="flex flex-row mt-40">
          <div className="text-left text-xl w-[40%] text-orange-900">
            My enthusiasm for technology extends to hackathons, where I have consistently excelled. I am proud to have emerged as a winner in the prestigious Smart India Hackathon, a national-level competition. Additionally, I have ranked in the top 3 in nearly six other hackathons. These experiences have not only sharpened my technical skills but also fostered a mindset of creative problem-solving.
            </div>
            <div className="size-[40%] bg-black">

            </div>
         
        </div> 
       

        </div>

      </Transition>
      </>
    );

}



export default About;