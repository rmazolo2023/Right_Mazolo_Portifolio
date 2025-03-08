import React, { useEffect, useState, useRef, useMemo } from "react";
import { 
  FaDatabase, FaLinkedinIn, FaFacebookF, FaWhatsapp, FaJava, FaNodeJs, FaServer, FaFigma, 
  FaDocker, FaCloud, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaReact, FaTwitter 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiTableau, SiCsharp, SiElasticsearch, SiLogstash, SiDotnet, SiJetbrains, SiPhp, 
  SiPython, SiPostgresql, SiMysql, SiExpress, SiKubernetes, SiJenkins, SiAzuredevops, SiNginx, 
  SiAnsible, SiVisualstudiocode, SiPostman 
} from "react-icons/si";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "A Full Stack Developer", "A DevSecOps Engineer", "A QA Tester",
      "A UI/UX Designer", "An Agile Practitioner", "A Cloud Engineer",
      "A Git Guru", "A Database Developer", "A Solution Architect",
      "A Polyglot Programmer", "A Lifelong Learner", "A Team Player",
      "An Analytical Thinker", "An Effective Communicator"
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  // Use useMemo to prevent re-creation of icons array on each render
  const icons = useMemo(() => [
    { icon: <FaJava />, name: "Java" }, { icon: <SiTableau />, name: "Tableau" },
    { icon: <SiAzuredevops />, name: "Azure DevOps" }, { icon: <SiJenkins />, name: "Jenkins" },
    { icon: <SiElasticsearch />, name: "Elasticsearch" }, { icon: <SiLogstash />, name: "Logstash" },
    { icon: <FaNodeJs />, name: "Node.js" }, { icon: <SiCsharp />, name: "C#" },
    { icon: <FaFigma />, name: "Figma" }, { icon: <SiJetbrains />, name: "JetBrains" },
    { icon: <FaServer />, name: "Server" }, { icon: <SiDotnet />, name: ".NET" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" }, { icon: <FaDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" }, { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaJs />, name: "JavaScript" }, { icon: <FaDatabase />, name: "Database" },
    { icon: <SiMysql />, name: "MySQL" }, { icon: <SiNginx />, name: "Nginx" },
    { icon: <FaReact />, name: "React.js" }, { icon: <SiAnsible />, name: "Ansible" },
    { icon: <SiVisualstudiocode />, name: "VS Code" }, { icon: <FaGithub />, name: "GitHub" },
    { icon: <SiPostman />, name: "Postman" }, { icon: <SiPython />, name: "Python" },
    { icon: <SiPhp />, name: "PHP" }, { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <FaCloud />, name: "Cloud" }, { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <SiExpress />, name: "Express.js" }
  ], []);

  const [displayedIcons, setDisplayedIcons] = useState([]);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndexRef.current < icons.length) {
        setDisplayedIcons((prevIcons) => [...prevIcons, icons[currentIndexRef.current]]);
        currentIndexRef.current++;
      } else {
        clearInterval(intervalId);
      }
    }, 45);

    return () => clearInterval(intervalId);
  }, [icons]); // Now 'icons' is stable and doesn't trigger re-renders

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
            className="bannerIcon text-green-600 hover:text-green-800" 
            whileHover={{ scale: 1.2 }}
          >
            <FaWhatsapp />
          </motion.a>
        </div>

        <h2 className="text-base uppercase font-titleFont mb-4 text-center">
          Hello, I'm Right Muwethu Mazolo
        </h2>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </h2>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 text-center">
            Proficient In
          </h2>
          <div className="flex flex-wrap gap-4">
            {displayedIcons.map((item, index) => (
              item && item.icon ? (
                <div key={index} className="relative group">
                  <span className="bannerIcon">{item.icon}</span>
                  <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.name}
                  </span>
                </div>
              ) : null
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
