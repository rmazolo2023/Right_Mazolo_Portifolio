import React, { useEffect, useState, useRef } from "react";
import { FaDatabase, FaJava, FaGoogle, FaNodeJs, FaServer, FaFigma, FaDocker, FaCloud, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTableau, SiCsharp, SiFigma, SiNextdotjs, SiElasticsearch, SiLogstash, SiDotnet, SiJetbrains, SiPhp, SiPython, SiPostgresql, SiMongodb, SiMysql, SiSpring, SiExpress, SiKubernetes, SiJenkins, SiTerraform, SiAws, SiAzuredevops, SiNginx, SiAnsible, SiVisualstudiocode, SiPostman, SiTrello, SiJira } from "react-icons/si";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "A Full-Stack Software Developer.",
      "A Systems Integrator.",
      "An API Integration Expert.",
      "A UI/UX Designer.",
      "An Agile Practitioner.",
      "A DevSecOps Engineer.",
      "A Cloud Computing Specialist.",
      "A Database Developer.",
      "A Solution Architect.",
      "A CI/CD Automation Expert.",
      "A Performance Optimizer.",
      "An Assertive Communicator.",
      "An Analytical Thinker."
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  // Icon list
  const icons = [
    <FaJava />,
    <SiTableau />,
    <SiAzuredevops />,
    <SiJenkins/>,
    <SiElasticsearch />,
    <SiLogstash />,
    <FaNodeJs />,
    <SiCsharp />,
    <FaFigma />,
    <SiJetbrains />,
    <FaServer />,
    <SiDotnet />,
    <SiTailwindcss />,
    <FaDocker />,
    <SiKubernetes />,
    <FaHtml5 />,
    <FaJs />,
    <FaDatabase />,
    <SiMysql />,
    <SiNginx />,
    <FaReact />,
    <SiAnsible />,
    <SiVisualstudiocode />,
    <FaGithub />,
    <SiPostman />,
    <SiPython />,
    <SiPhp />,
    <SiPostgresql />,
    <FaCloud />,
    <SiFigma />,
    <FaCss3Alt />,
    <SiExpress />
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
        <h4 className="text-lg font-normal">WELCOME TO MY PROFESSIONAL JOURNEY</h4>
        <h1 className="text-6xl font-bold text-white">
          I'm Right Mazolo<span className="text-designColor capitalize"></span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide"></p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">Proficient In</h2>
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
