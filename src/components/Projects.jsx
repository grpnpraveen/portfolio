import Transition from "./Transition";
import Projectcard from "./Project_card";
function Projects()
{
 
    return(
      <>
          <Transition text_color_to='text-purple-500' bg_color_to='bg-purple-500' heading='Projects'star_color_to='rgb(168, 85, 247,' >

           <div className="flex flex-col p-10 flex-wrap">

                <div className="flex flex-row space-x-5">
                    <Projectcard title="Test1" info="subh-Test1" href="https://www.google.com">

                    </Projectcard>
                    <Projectcard title="Test1" info="subh-Test1" href="https://www.google.com">

                    </Projectcard>
                    <Projectcard title="Test1" info="subh-Test1" href="https://www.google.com">

                    </Projectcard>
                    <Projectcard title="Test1" info="subh-Test1" href="https://www.google.com">

                    </Projectcard>
                </div>

           </div>


           <div className="flex flex-col p-10">

                <div className="flex flex-row space-x-5">
                    <Projectcard title="Test1" info="subh-Test1" href="https://www.google.com">

                    </Projectcard>
                    <Projectcard title="Test1" info="subh-Test1" href="https://www.google.com">

                    </Projectcard>
                    <Projectcard title="Test1" info="subh-Test1" href="https://www.google.com">

                    </Projectcard>
                    <Projectcard title="Test1" info="subh-Test1" href="https://www.google.com">

                    </Projectcard>
                </div>

           </div>
           <div className="pb-[5%]"></div>
        </Transition>
      </>
    );

}



export default Projects;