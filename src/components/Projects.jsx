import { useEffect, useState} from 'react';
import Transition from "./Transition";
import Projectcard from "./Project_card";



function Projects()
{
    const [fileContent, setFileContent] = useState('');
    useEffect(() => {
        // Path to the file in the public directory
        fetch('/portfolio/data.txt')
          .then((response) => {
            if (response.ok) {
              return response.text(); // Read the response as text
            }
            throw new Error('Failed to fetch file');
          })
          .then((text) => {
            setFileContent(text); // Update state with the file content
          })
          .catch((error) => {
            console.error('Error reading file:', error);
          });
      }, []); 

      const fileLines = fileContent.split('*').filter(sentence => sentence.trim() !== '');
      
      // console.log(fileLines)

    return(
      <>
          <Transition text_color_to='text-purple-500' bg_color_to='bg-purple-500' heading='Projects' star_color_to='rgb(24, 26, 27)' >

          <div className="flex flex-col p-10 sm:flex-row sm:flex-wrap lg:justify-center gap-6">

                {
                    fileLines.map((val,ind)=>{

                    var x = val.split("|").filter(sen => sen.trim() !=='');
                    // console.log(x[0])
                    return <Projectcard key={ind} img={x[0].trim()} title={x[1].trim()} info={x[2].trim()} href={x[3].trim()} ></Projectcard>

                })

                }

           </div>


           <div className="pb-[5%]"></div>

        </Transition>
      </>
    );

}



export default Projects;