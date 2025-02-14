import React from "react";
import { FaDatabase, FaGoogle,FaNodeJs,FaServer,FaFigma, FaDocker, FaCloud, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTableau,SiCsharp,SiElasticsearch,SiLogstash,SiDotnet,SiJetbrains, SiPhp, SiPython, SiPostgresql, SiMongodb, SiMysql, SiSpring, SiExpress, SiKubernetes, SiJenkins, SiTerraform, SiAws, SiAzuredevops, SiNginx, SiAnsible, SiVisualstudiocode, SiPostman, SiTrello, SiJira } from "react-icons/si";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  //FaReact,
  //FaGithub,
  FaJava, 
  //FaDocker
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

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
    ]
    
    ,
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PROFESSIONAL JOURNEY</h4>
        <h1 className="text-6xl font-bold text-white">
          I'm Right Mazolo<span className="text-designColor capitalize"></span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
          Proficient In
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiCsharp/>
            </span>
            <span className="bannerIcon">
              <FaJava/>
            </span>
        
          </div>

          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiTableau />
            </span>
            <span className="bannerIcon">
              <SiAzuredevops/>
            </span>
            <span className="bannerIcon">
              <FaGoogle/>
            </span>
           
          </div>

          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiElasticsearch />
            </span>
            <span className="bannerIcon">
              <SiLogstash/>
            </span>
            <span className="bannerIcon">
              <FaNodeJs/>
            </span>          
           
          </div>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFigma/>
            </span>
            <span className="bannerIcon">
              <SiJetbrains/>
            </span>
            <span className="bannerIcon">
              <FaServer/>
            </span>
            <span className="bannerIcon">
              <SiDotnet/>
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <FaDocker />
            </span>
          </div>

          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiKubernetes />
            </span>
            <span className="bannerIcon">
              <FaHtml5/>
            </span>
            <span className="bannerIcon">
              <FaJs/>
            </span>
            <span className="bannerIcon">
              <FaDatabase/>
            </span>
            <span className="bannerIcon">
              <SiMysql />
            </span>
            <span className="bannerIcon">
              <SiNginx />
            </span>
          </div>

          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiAnsible />
            </span>
            <span className="bannerIcon">
              <SiVisualstudiocode/>
            </span>
            <span className="bannerIcon">
              <FaGithub/>
            </span>
            <span className="bannerIcon">
              <SiPostman/>
            </span>
            <span className="bannerIcon">
              <SiPython />
            </span>
            <span className="bannerIcon">
              <SiPhp />
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
