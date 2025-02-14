import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
                    des="Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Emergency Handling App "
          des=" Developed an emergency handling application for Mobile money providers.  Developed an application that handles the most emergence calls first before the least emergence calls at the call center.     "
          //src={projectOne}
        />
        <ProjectsCard
          title="Online Shopping Web Application"
          des="Developed a full-stack web application. Implemented user authentication, product listing, shopping cart functionality, and integrated payment gateways for a seamless user experience.    "
          //src={projectTwo}
        />
        <ProjectsCard
          title="FinalTouch IT and Electronics Website"
          des="Designed and developed a responsive website for FinalTouch     IT and Electronics.   "
          //src={projectThree}
        />
        <ProjectsCard
          title="Android Notes Manager Application"
          des="Created an Android application using Android Studio, which allowed users to create and manage notes with reminders, notifications, and synchronization with a cloud database.   "
        //  src={projectThree}
        />
        <ProjectsCard
          title="Oracle FlexCube Core Banking System Project"
          des="In the Oracle FlexCube Core Banking System Project at NBS Bank, I was responsible for API testing and integration, ensuring seamless communication between FlexCube and other banking systems."
         // src={projectTwo}
        />
          
        <ProjectsCard
          title="Value added Services Payment Screens"
          des=" I designed and developed eight payment screens, ensuring seamless transaction processing and an enhanced user experience. These screens were built with a focus on security, efficiency, and compliance with banking standards. I optimized their responsiveness across different devices, integrated validation mechanisms to minimize errors, and streamlined workflows for faster and more secure transactions."
          //src={projectOne}
        />
        <ProjectsCard
          title="Cloud & DevOps Adoption at NBS Bank"
          des=" I assisted in the adoption of containerization technologies like Docker.
         Explored integration of Jenkins, Kubernetes, and cloud services (AWS, Azure) for DevOps efficiency.
          This improved system deployment strategies and CI/CD pipeline processes."
          //src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects