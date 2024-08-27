import Transition from "./Transition";
import Timeline from "./Timeline";

function Education()
{
 
    return(
      <>
      <Transition text_color_to='text-orange-500' bg_color_to='bg-orange-500' heading='Education' star_color_to='rgb(249, 115, 22,'>


         <div className="flex flex-col pl-24">
            <Timeline time="March 90" title="First ONe" info="Some thing 3" ></Timeline>
            <Timeline time="March 30" title="First ONe" info="some thing two" href="https://www.google.com" ></Timeline>
            <Timeline time="March 90" title="First ONe" info="Some thing 3" ></Timeline>
            <Timeline time="March 90" title="First ONe" info="Some thing 3" ></Timeline>
            <Timeline time="March 30" title="First ONe" info="some thing two" href="https://www.google.com" ></Timeline>
         </div>



         <div className="pb-[5%]"></div>

      
      </Transition>
      </>
    );

}



export default Education;