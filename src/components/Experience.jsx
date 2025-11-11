import Transition from "./Transition";
import Timeline from "./Timeline";
import React from "react";
function Experience()
{
 
  const color_to = "text-yellow-500"
      React.useEffect(() => {
    if (window.umami) {
      window.umami.track('Experience Page Loaded');
    }
  }, []);
    return(
      <>
      <Transition text_color_to='text-yellow-500' bg_color_to='bg-yellow-500' heading='Experience' star_color_to="rgb(234, 179, 8,">


         <div className="flex flex-col pl-20">

        <Timeline time="Jan 2024 - Dec 2024" title="Graduate Research Assistant" subhead="Prof I.V. Ramakrishnan, Stony Brook University" 
        info="•Architected backend systems for a high-fidelity VR simulation, integrating Blender with Unreal Engine to enable seamless asset management and high-performance dynamic object manipulation.
• Designed and implemented a custom XML parser to automate object and joint imports, ensuring seamless ROS integration.
• Engineered a scalable data pipeline to log and structure object interactions, enhancing robotic arm training datasets.
• Automated the conversion of real-world objects into 3D models, streamlining asset generation for interactive VR environments." 
        badges="C++|Python|Unreal Engine|ROS"  color_to={color_to}></Timeline>
       
       
        <Timeline time="Oct 2022 - Apr 2023" title="Software Engineering Intern" subhead="Yubi (Unicorn Startup), Supply Chain Finance Team"  
          info="• Developed client APIs with Ruby on Rails, PostgreSQL & AWS SNS/SQS (Pub-Sub) to connect 4 systems to SCF's API, boosting integration capabilities & robust async messaging.
• Enhanced data security by implementing robust AES encryption & decryption for API communications with 10 banking partners, ensuring data integrity.
• Managed automated deployment pipelines (Jenkins, GitHub Actions) for Ruby on Rails applications on AWS, deploying and maintaining client-facing APIs on AWS API Gateway for high availability and scalability.
• Boosted system performance by utilizing Redis for database call optimization, resulting in a 7% efficiency gain and 5% faster response times.
• Accelerated internal workflows by automating manual ticketing processes and client data management through Forest Admin, resulting in a 3x improvement in operational speed." 
          color_to={color_to} href="https://drive.google.com/file/d/1EmmtCimns3LCd5AfSKGvqCkfdQnQE3sU/view?usp=drive_link" badges="Ruby on Rails|AWS|Postgresql|Redis|AES|Jenkins|GitHub Actions|API Gateway|Forest Admin"></Timeline>
       
        <Timeline time="Apr 2022 - Oct 2022" title="Backend Engineer Intern" subhead="Sabudh Foundation (Remote), Depression Detection Online"  
          info=" • Developed a scalable, high-performance online Depression Detection platform, leveraging Python, Flask, Flask Blueprints, OpenCV, NumPy, PostgreSQL, and Psycopg2, optimizing data processing and real-time analysis for enhanced efficiency.
• Designed and implemented a highly structured database architecture with 20+ relational tables, incorporating role-based access control (RBAC) for authentication and authorization, ensuring seamless multi-user interactions across multiple roles.
• Integrated a machine learning pipeline into the backend, leveraging TensorFlow and OpenCV, achieving 90%+ diagnostic accuracy, improving automated depression detection efficiency by 40%, and enhancing treatment outcome predictions.
• Deployed the platform on AWS, utilizing Docker, Kubernetes, and CI/CD pipelines (Jenkins, GitHub Actions) to enable automated testing, seamless updates, and zero-downtime deployments, improving release cycles by 50%.
• Implemented advanced logging and monitoring with Prometheus and Grafana, ensuring real-time system observability and reducing incident response time by 35%." 
          color_to={color_to} href="https://drive.google.com/file/d/12av2jEpPFQn4AKhOTNdLE2v5CgeVtOYA/view?usp=drive_link" badges="Flask|ML|TensorFlow|OpenCV|PostgreSQL|Docker|Kubernetes|Jenkins|Prometheus|Grafana|GitLab"></Timeline>


















         </div>



         <div className="pb-[5%]"></div>

      
      </Transition>
      </>
    );

}



export default Experience;