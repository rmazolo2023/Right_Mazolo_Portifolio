import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
         
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="✅ Developed a Mobile App for Mobile Money Agents"
            subTitle="Priority-based modlile money agents management system"
            result="Success"
            des="Designed and implemented a mobile money agent management app that transitioned from a queue-based to a priority-based system, improving transaction efficiency."
          />
            </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - 2025</p>
           </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="✅ Designed and Developed Custom Banking Solutions "
            subTitle="BANK"
            result="Success"
            des="Built platforms enabling bank users to interact with financial services, automate reports, and enhance data analytics for decision-making."
          />
                    <ResumeCard
            title="✅ Completed Certifications in DevOps, Agile, and Advanced React"
            subTitle="Udemy"
            result="Success"
            des="Successfully passed Udemy assessments in DevOps CI/CD with AWS, Docker, Jenkins, Agile Project Management, and Advanced React, strengthening expertise in modern software development methodologies."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
