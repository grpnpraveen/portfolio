import Transition from "./Transition";
import Timeline from "./Timeline";

function Skills()
{
   const color_to = "text-teal-500"
    return(
      <>
      <Transition text_color_to='text-teal-500' bg_color_to='bg-teal-500' heading='Skills' star_color_to='rgb(20, 184, 20'>

      <div className="flex flex-col pl-20">
        <Timeline time="" title="Technical Skills" 
        info="•Programming Languages: Python, C++, C, Java, SQL
        
              •Web Development: HTML/CSS, Java Script, Django, Flask, React, NodeJS
              •Software Engineering: Git, Unit Testing, 
              •Data Structures and Algorithms 
              •Databases: MySQL, PostgreSQL, MongoDB, Redis
              •Networking: REST, Encryption, HTTP/HTTPS, DNS
              •Cloud Computing: AWS,EC2, S3, Lambda, Docker
              •Machine Learning and Data Science: TensorFlow, PyTorch, Scikit-Learn, Pandas, NumPy, Matplotlib, Seaborn, Regression, Classification, Clustering, Neural Networks
              
        
        "  
        
        color_to={color_to}>

        </Timeline>

        <Timeline time="" title="Project Management" 
        info="•Successfully coordinated various events, including Robo War at the 67th Milestone Fest and GSO events, by planning logistics, managing schedules, and ensuring smooth execution. This involved liaising with different teams, vendors, and participants to deliver successful events that met all objectives.
        
        •Led the planning phases for multiple projects and hackathons, such as the Smart India Hackathon and Scaler's Hackx, by setting clear goals, defining project timelines, and ensuring that all team members were aligned with the project's objectives. This included risk management, milestone setting, and progress tracking to ensure timely completion.

        •Managed resources effectively across various projects, including overseeing budgeting, allocating tasks among team members, and ensuring optimal use of available resources. For example, during an internship at Sabudh Foundation, I worked in a team of three on backend development, efficiently distributing tasks and managing workload. Additionally, while working at the unicorn startup Yubi, I collaborated in a two-member team for the supply chain finance pod, focusing on optimizing resource use to meet project goals.
        
        "  
        
        color_to={color_to}>

        </Timeline>
        
        <Timeline time="" title="Soft Skills" 
        info="• Demonstrated strong leadership abilities as a Vice President of the Robotics Club, where I spearheaded initiatives and coordinated events. Additionally, I led teams in competitive environments, such as hackathons and project-based work at Sabudh Foundation and Yubi, guiding them to achieve top results.
            •Effectively communicated with team members, stakeholders, and external partners during event coordination, ensuring that everyone was aligned with the project's goals. This skill was crucial in both academic and professional settings, including working in a two-member team at Yubi and collaborating in a three-member team at Sabudh Foundation.
            •Successfully managed multiple responsibilities simultaneously, including academic commitments, leadership roles, and project deadlines. My experience in event coordination and project management has honed my ability to prioritize tasks and meet deadlines efficiently.
        
        "  
        
        color_to={color_to}>

        </Timeline>
    
    

      </div>
      </Transition>
      </>
    );

}



export default Skills;