import Transition from "./Transition";
import Timeline from "./Timeline";

function Education()
{

   const color_to = "text-orange-500"

    return(
      <>
      <Transition text_color_to='text-orange-500' bg_color_to='bg-orange-500' heading='Education' star_color_to='rgb(249, 115, 22,'>


      <div className="flex flex-col pl-20">

            <Timeline time="Aug 2023 - Present" title="Masters in Computer Science" subhead="Stony Brook University, New York" info="•Course Work:"  badges="Computer Vision|Network Security|Visualization|Machine Learning" color_to={color_to}></Timeline>



            <Timeline time="Jul 2019 - Jun 2023" title="Bachelor of Technology in Computer Science and Engineering" subhead="BML Munjal University, Haryana" info="•Course Work:"  badges="AI|DBMS|OOPS|Cryptography|Android|Blockchain|Cyber Security" color_to={color_to}></Timeline>


       </div>


         <div className="pb-[5%]"></div>

      
      </Transition>
      </>
    );

}



export default Education;