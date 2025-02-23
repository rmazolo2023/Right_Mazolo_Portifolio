import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaDatabase, FaCode, FaServer, FaNodeJs, FaFigma, FaDocker, FaCloud, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaReact  } from "react-icons/fa";
import { SiPostman, SiExpress, SiDotnet, SiJetbrains, SiJenkins } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';
import { motion } from 'framer-motion';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="What I Do" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <motion.div 
          whileTap={{ rotate: 5, scale: 1.1, x: [-10, 10, -10, 10, -10] }} // Shaking effect on tap
          transition={{ duration: 0.3 }}
        >
          <Card
            title="Web Development"
            des=" I design, develop, and maintain responsive, user-friendly websites, ensuring optimal performance, security, and SEO for better visibility and engagement."
            icon={<FaGlobe />}
          />
        </motion.div>
        
        <motion.div 
          whileTap={{ rotate: 5, scale: 1.1, x: [-10, 10, -10, 10, -10] }} // Shaking effect on tap
          transition={{ duration: 0.3 }}
        >
          <Card
            title="Mobile App Development"
            des="I design, develop, and maintain mobile applications."
            icon={<FaMobile />}
          />
        </motion.div>

        <motion.div 
          whileTap={{ rotate: 5, scale: 1.1, x: [-10, 10, -10, 10, -10] }} // Shaking effect on tap
          transition={{ duration: 0.3 }}
        >
          <Card
            title="Cloud & DevOps Solutions"
            des=" I implement cloud and DevOps solutions, automating deployments, managing cloud infrastructure, and improving system reliability."
            icon={<FaCloud />}
          />
        </motion.div>

        <motion.div 
          whileTap={{ rotate: 5, scale: 1.1, x: [-10, 10, -10, 10, -10] }} // Shaking effect on tap
          transition={{ duration: 0.3 }}
        >
          <Card
            title="Software Development & System Integration"
            des="I design, develop, and integrate scalable software solutions, ensuring seamless interactions between different systems."
            icon={<FaCode />}
          />
        </motion.div>

        <motion.div 
          whileTap={{ rotate: 5, scale: 1.1, x: [-10, 10, -10, 10, -10] }} // Shaking effect on tap
          transition={{ duration: 0.3 }}
        >
          <Card
            title="API Development, Integration & Testing"
            des=" I build and integrate APIs, enabling secure and efficient communication between applications and third-party services."
            icon={<FaServer />}
          />
        </motion.div>

        <motion.div 
          whileTap={{ rotate: 5, scale: 1.1, x: [-10, 10, -10, 10, -10] }} // Shaking effect on tap
          transition={{ duration: 0.3 }}
        >
          <Card
            title="Database Management & Optimization"
            des=" I develop, optimize, and manage databases, ensuring high performance, security, and scalability for applications."
            icon={<FaDatabase />}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
