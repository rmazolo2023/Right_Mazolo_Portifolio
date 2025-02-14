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
                    des="Personal Projects"
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
          title="Android Notes Manager Application"
          des="Created an Android application using Android Studio, which allowed users to create and manage notes with reminders, notifications, and synchronization with a cloud database.   "
        //  src={projectThree}
        />
            </div>
    </section>
  );
}

export default Projects