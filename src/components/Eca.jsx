import Transition from "./Transition";
import Timeline from "./Timeline";

function Eca()
{
  const color_to="text-sky-500"
 
    return(
      <>
    <Transition text_color_to='text-sky-500' bg_color_to='bg-sky-500' heading='ECA' star_color_to='rgb(14, 165, 233,'>
    
    <div className="flex flex-col pl-20">
      <Timeline time="Aug 2023 - May 2025" title="Masters in Computer Science" subhead="Stony Brook University, New York" 
      info="•Managed office operations, including administrative tasks, team coordination, and resource management [Office Manager for GSO from    April 2024 to May 2025 ].
            •Successfully managed events, overseeing logistics, planning, and coordination [Event Manager for GSO events, handling event planning from January 2024 to April 2024].
            
            •Worked with the Student Accessibility Support Center as a proctor, ensuring fair testing conditions and assisting students with special needs.
            •Participated in hackathons, coding workshops, and academic conferences relevant to my field of study
            "   
      
      color_to={color_to}></Timeline>

      <Timeline time="Jul 2019 - Jun 2023" title="Bachelor of Technology in Computer Science and Engineering" subhead="BML Munjal University, Haryana" 
      info="•Vice President - Robotics Club: Spearheaded initiatives, coordinated events, and advanced the objectives of the Robotics Club.
            •Event Organizer - Robo War, 67th Milestone Fest: Orchestrated the Robo War event, contributing to the success of the fest.
            
            •Executive Member - Savera Club: Offered free tutoring services for kids as part of the Savera Club.
            •Team Leader - Reva Hackathon and Scaler's Hackx: Led a team which secured in top 3 in both hackathons.
            •Tutoring: Volunteered at Club Savera, providing free tutoring for kids and contributing to the community.
            •Blood Donation Camps: Volunteered at blood donation camps on campus, finding it a meaningful experience.
            "   
      
      color_to={color_to}></Timeline>

    </div>


      
      </Transition>
      </>
    );

}



export default Eca;