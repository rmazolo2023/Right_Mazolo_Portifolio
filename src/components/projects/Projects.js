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
          title="ATM Card Application System"
          des="The ATM Card Application System at NBS Bank is a seamless and efficient platform designed to facilitate the application and processing of ATM cards. Built with a .NET 8 backend and a React.js frontend, the system ensures a smooth user experience while integrating with the bank’s core banking system. It utilizes stored procedures for database operations, enhancing performance and security. The system validates customer details, processes applications, and ensures compliance with banking standards. By streamlining the entire process, it reduces manual intervention, minimizes errors, and improves overall service delivery for both customers and bank staff."
        //  src={projectOne}
        />
        <ProjectsCard
          title="Oracle FlexCube Core Banking System Project"
          des="In the Oracle FlexCube Core Banking System Project at NBS Bank, I was responsible for API testing and integration, ensuring seamless communication between FlexCube and other banking systems. I developed and executed test cases for SOAP and REST APIs, validated GL accounts, and transitioned billers from T24 to FlexCube. My role involved identifying and resolving integration issues, optimizing API performance, and ensuring secure transactions. This work contributed to the smooth migration of banking services, improving system reliability and efficiency."
         // src={projectTwo}
        />
            <ProjectsCard
          title="Registrar General integration on the bank system"
          des="I integrated the Registrar General API with the NBS Bank system to facilitate seamless payment processing for the Registrar’s clients. This integration enabled direct payments through the bank, ensuring secure transactions, real-time validation, and improved efficiency in fee collections. "
        //  src={projectThree}
        />
        <ProjectsCard
          title="Value added Services(VAS) Payment Screens"
          des=" I designed and developed eight payment screens, ensuring seamless transaction processing and an enhanced user experience. These screens were built with a focus on security, efficiency, and compliance with banking standards. I optimized their responsiveness across different devices, integrated validation mechanisms to minimize errors, and streamlined workflows for faster and more secure transactions."
          //src={projectOne}
        />
        <ProjectsCard
          title="Cloud & DevOps Adoption"
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