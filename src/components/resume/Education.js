import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2013 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">EDUCATION</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Information Technology"
            subTitle="University of Malawi, The Polytechnic (2018 - 2022)"
            result="Credit"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Malawi School Certificate of Education (MSCE)"
            subTitle="Luwinga Secondary School (2017)"
            result="11 Points"
            des="Achieved an outstanding MSCE with 11 points, excelling in Physical Science (1), English (2), Mathematics (2), Biology (2), Geography (2), History (2), and Social & Development Studies (2). Demonstrated strong analytical, problem-solving, and critical thinking skills across multiple disciplines."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">CERTIFICATIONS AND TRAININGS </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Devops Fundamentals - CI/CD with AWS +Docker+Ansible+Jenkins"
            subTitle="Udemy - (2024)"
            result="https://www.udemy.com/certificate/UC-40fcd730-e93f-4f36-a332-afaf8da5b365/"
            des="Successfully completed and passed Udemy assessments, gaining expertise in continuous integration and deployment (CI/CD), cloud computing with AWS, containerization using Docker, configuration management with Ansible, and automation with Jenkins. Developed practical skills in streamlining software development pipelines and optimizing deployment workflows."
          />
          <ResumeCard
            title="Agile Project Management Certification Prep+Agile Scrum+Jira"
            subTitle="Udemy - (2024)"
            result="https://nbs.udemy.com/certificate/UC-bf6985b6-dd9a-4156-9032-b4d2012f4f7a/"
            des="Successfully completed and passed Udemy assessments, gaining expertise in Agile project management methodologies, Scrum framework, and Jira for workflow management. Developed practical skills in sprint planning, backlog management, team collaboration, and iterative development to enhance project efficiency and delivery."
          />
                 </div>
      </div>
    </motion.div>
  );
};

export default Education;
