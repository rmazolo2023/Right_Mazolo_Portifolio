import React, { useEffect, useState, useRef } from "react";
import { FaDatabase,FaLinkedinIn,FaFacebookF,FaWhatsapp, FaJava, FaGoogle, FaNodeJs, FaServer, FaFigma, FaDocker, FaCloud, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaReact, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { SiTailwindcss, SiTableau, SiCsharp, SiFigma, SiNextdotjs, SiElasticsearch, SiLogstash, SiDotnet, SiJetbrains, SiPhp, SiPython, SiPostgresql, SiMongodb, SiMysql, SiSpring, SiExpress, SiKubernetes, SiJenkins, SiTerraform, SiAws, SiAzuredevops, SiNginx, SiAnsible, SiVisualstudiocode, SiPostman, SiTrello, SiJira } from "react-icons/si";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "A Full Stack Developer",
      "A DevSecOps Engineer",
      "A QA Tester",
      "A UI/UX Designer",
      "An Agile Practitioner",
      "A Cloud Engineer",
      "A Git Guru",
      "A Database Developer",
      "A Solution Architect",
      "A Polyglot Programmer ",
      "A Lifelong Learner",
      "A Team Player",
      "An Analytical Thinker",
      "An Effective Communicator"
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  // Icon list
  const icons = [
    <FaJava />, <SiTableau />, <SiAzuredevops />, <SiJenkins />, <SiElasticsearch />, <SiLogstash />, <FaNodeJs />, <SiCsharp />, <FaFigma />, <SiJetbrains />, <FaServer />, <SiDotnet />, <SiTailwindcss />, <FaDocker />, <SiKubernetes />, <FaHtml5 />, <FaJs />, <FaDatabase />, <SiMysql />, <SiNginx />, <FaReact />, <SiAnsible />, <SiVisualstudiocode />, <FaGithub />, <SiPostman />, <SiPython />, <SiPhp />, <SiPostgresql />, <FaCloud />, <SiFigma />, <FaCss3Alt />, <SiExpress />
  ];

  // State to hold the icons being displayed
  const [displayedIcons, setDisplayedIcons] = useState([]);
  const currentIndexRef = useRef(0); // Ref to store the current index

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndexRef.current < icons.length) {
        // Update the state with the next icon
        setDisplayedIcons(prevIcons => [...prevIcons, icons[currentIndexRef.current]]);
        currentIndexRef.current++;
      } else {
        // Clear interval when all icons have been displayed
        clearInterval(intervalId);
      }
    }, 300); // Display an icon every 500ms

    // Clean up interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures it runs once

  return (

    





    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <div className="flex gap-4 justify-center">
      
          <motion.a 
            href="https://www.facebook.com/right.mazolo/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon text-blue-500 hover:text-blue-700" 
            whileHover={{ scale: 1.2 }}
          >
            <FaFacebookF />
          </motion.a>
          <motion.a 
            href="https://twitter.com/rightmazolo/"
            target="_blank"
            rel="noopener noreferrer"     
            className="bannerIcon text-sky-400 hover:text-sky-600" 
            whileHover={{ scale: 1.2 }}
          >
            <FaTwitter />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/right-mazolo-81bb11206/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon text-blue-600 hover:text-blue-800" 
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedinIn />
          </motion.a>
          <motion.a 
            href="https://wa.me/265883252419"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon text-blue-600 hover:text-blue-800" 
            whileHover={{ scale: 1.2 }}
          >
             <FaWhatsapp />
          </motion.a>
        </div>
         <h2 className="text-base uppercase font-titleFont mb-4 " style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>Hello, I'm Right Muwethu Mazolo</h2>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide"></p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>Proficient In</h2>
          {/* Render icons one by one */}
          <div className="flex flex-wrap gap-4">
            {displayedIcons.map((icon, index) => (
              <span key={index} className="bannerIcon">
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
