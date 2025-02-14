import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Developer"
            subTitle="NBS Bank PLC- (2023 - Present)"
            result="Malawi-Blantyre"
            des="I have been involved in integrating third-party services with Core Banking Systems, designing, developing and managing management systems, and developing platforms for bank users to interact with financial services. My work includes creating tools for data analysis, automating internal and regulatory reports, and ensuring seamless integration of mobile apps with banking systems. Additionally, I integrate and maintain payment systems, develop training materials, and provide ongoing support to users. I collaborate with various departments to understand software needs and ensure compliance with banking regulations and legal requirements."

          />
          <ResumeCard
            title="IT Technician and Web Developer"
            subTitle="Finaltouch IT & Electronics- (2022 - 2023)"
            result="Malawi-Blantyre"
            des="As an IT Technician and Software Developer at Finaltouch IT & Electronics, I designed and developed a dynamic and interactive website to improve user engagement."
          />
          <ResumeCard
            title="Freelance Web and Mobile App Developer"
            subTitle="Telekom Networks Malawi - (2021 - 2022)"
            result="Malawi-Blantyre"
            des="I developed a mobile application to manage mobile money agents, utilizing a priority-based assistant system and eliminating the traditional queue-based approach, which had posed numerous challenges. This solution enhanced the efficiency of agent management by prioritizing tasks and improving overall user experience"
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="ICT Part-time Lecturer"
            subTitle="Blantyre Internationa University (2023 - 2023)"
            result="Malawi-Blantyre"
            des="As a lecturer, I prepared and delivered lectures, tutorials, workshops, and seminars while collaborating with colleagues to improve teaching methods and expand the knowledge base. I was responsible for setting and grading assignments, tests, and exams, conducting research, and attending conferences and meetings both within and outside the institution. I also participated in training initiatives, provided support to students and colleagues, and stayed current in the IT field by continuously reading and engaging with new developments."
          />
          <ResumeCard
            title="Software Development Trainer"
            subTitle="NBS Bank PLC (2024 - 2025)"
            result="Malawi-Blantyre"
            des="I trained interns at the bank, providing hands-on guidance in software development and orienting them to industry-standard coding practices. This training helped equip them with the necessary skills to thrive in real-world development environments."
          />
          <ResumeCard
            title="Freelance Software Development Trainer"
            subTitle="Malawi University of Business and Applied Sciences (2019 - 2021)"
            result="Malawi-Blantyre"
            des="In this piecework role, I provided targeted software development training to a group of students, focusing on industry-standard coding practices and effective development techniques. I conducted hands-on sessions and offered personalized guidance to ensure students gained practical skills and a solid understanding of real-world software development."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
