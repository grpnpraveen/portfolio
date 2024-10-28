import Transition from "./Transition";
import Timeline from "./Timeline";

function Experience()
{
 
  const color_to = "text-yellow-500"
  
    return(
      <>
      <Transition text_color_to='text-yellow-500' bg_color_to='bg-yellow-500' heading='Experience' star_color_to="rgb(234, 179, 8,">


         <div className="flex flex-col pl-20">

        <Timeline time="Aug 2023 - Dec 2023" title="Graduate Teaching Assistant" subhead="Stony Brook University, Department of Computer Science" info="• Under the guidance of Dr. Kevin McDonnell, facilitated student proficiency in computer science with Python-based weekly lab
        sessions, hands-on exercises, and homework support. Assessed assignments and midterms for a class with 30 students." badges="Python"  color_to={color_to}></Timeline>
       
       
        <Timeline time="Oct 2022 - Apr 2023" title="Software Engineering Intern" subhead="Yubi (Unicorn Startup), Supply Chain Finance Team"  
          info="•Played a key role in the Integrations Team within the Supply Chain Finance team as a backend developer, specializing in
                  seamlessly integrating 4 different client APIs with SCF's API using Ruby on Rails, Postgres, AWS, and Redis.
                •Increased productivity with Forest Admin Automation, achieving 3x faster results. Streamlined manual ticket processes and
                client data management, leveraging the flexibility of integrating Ruby on Rails with Forest Admin.
                •Ensured security and data integrity by implementing robust encryption and decryption functionalities for 10 bank API calls,
                significantly enhancing the overall security measures of the system.
                •Utilized Redis to streamline and optimize database calls, achieving a 7% improvement in overall system efficiency and a 5%
                enhancement in response times.
                •Completed 300 plus tickets in six months, positioning the SCF team as a top performer in innovative solution delivery, by actively
                contributing to the development of Supply Chain Finance logic. Additionally, integrated 2 new banks into SCF." 
          color_to={color_to} href="https://drive.google.com/file/d/1EmmtCimns3LCd5AfSKGvqCkfdQnQE3sU/view?usp=drive_link" badges="Ruby on Rails|AWS|Postgresql|Redis"></Timeline>
       
        <Timeline time="Apr 2022 - Oct 2022" title="Backend Engineer Intern" subhead="Sabudh Foundation (Remote), Depression Detection Online"  
          info=" •Developed an online Depression Detection platform using Python, Flask framework, Flask Blueprints library, Postgres, and
 Psycopg2 library.
 •Designed 20 database tables, including schema for authentication, authorization, patient details, hospitals, doctors, and
 appointments, ensuring a robust foundation for the project.
 •Orchestrated the creation of a user API tailored for doctors, patients, administrators, and other user types, ensuring a customized
 experience for over 3 user categories.
 •Streamlined and integrated a machine learning algorithm into the backend, revolutionizing the platform's diagnostic capabilities
 by analyzing patient videos for signs of depression, resulting in more than 90% accuracy and enhanced treatment outcomes." 
          color_to={color_to} href="https://drive.google.com/file/d/12av2jEpPFQn4AKhOTNdLE2v5CgeVtOYA/view?usp=drive_link" badges="Flask|ML|SQL|Docker|GitLab"></Timeline>


















         </div>



         <div className="pb-[5%]"></div>

      
      </Transition>
      </>
    );

}



export default Experience;