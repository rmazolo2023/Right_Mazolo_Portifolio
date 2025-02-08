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
            title="✅ Successfully Integrated Third-Party Services with Core Banking Systems"
            subTitle="Oracle-NBS Bank project"
            result="Success"
            des="Played a key role in developing and integrating APIs to connect banking systems with external services, enhancing efficiency and automation."
          />
          <ResumeCard
            title="✅ Developed a Mobile App for TNM Agents"
            subTitle="Priority-based modlile money agents management system"
            result="Success"
            des="Designed and implemented a mobile money agent management app that transitioned from a queue-based to a priority-based system, improving transaction efficiency."
          />
          <ResumeCard
            title="✅ Led the Migration of Over 18 Billers on VasPortal"
            subTitle="NBS Bank Core Banking System Project"
            result="Success"
            des="Collaborated in transitioning billers from T24 to Flexcube, ensuring a seamless and timely migration process."
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
            subTitle="NBS BANK"
            result="Success"
            des="Built internal platforms enabling bank users to interact with financial services, automate reports, and enhance data analytics for decision-making."
          />
          <ResumeCard
            title="✅ Optimized Payment Systems & Online Transactions"
            subTitle="NBS BANK"
            result="Success"
            des="Integrated and maintained online payment gateways and electronic funds transfer (EFT) systems, ensuring secure and seamless transactions."
          />
          <ResumeCard
            title="✅ Completed Certifications in DevOps, Agile, and Advanced React"
            subTitle="NBS BANK"
            result="Success"
            des="Successfully passed Udemy assessments in DevOps CI/CD with AWS, Docker, Jenkins, Agile Project Management, and Advanced React, strengthening expertise in modern software development methodologies."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
