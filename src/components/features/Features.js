import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Development"
          des=" I design, develop, and maintain responsive, user-friendly websites, ensuring optimal performance, security, and SEO for better visibility and engagement."
          icon={<FaGlobe />}
        />
        <Card
          title="Mobile App Development"
          des="I design, develop, and maintain mobile applications."
          icon={<FaMobile />}
          
        />
        <Card
          title="Cloud & DevOps Solutions "
          des=" I implement cloud and DevOps solutions, automating deployments, managing cloud infrastructure, and improving system reliability."
          // icon={<SiProgress />}
        />
        <Card
          title="Software Development & System Integration"
          des="I design, develop, and integrate scalable software solutions, ensuring seamless interactions between different systems."
          // icon={<AiFillAppstore />}
        />
        <Card
          title="API Development & Integration"
          des=" I build and integrate APIs, enabling secure and efficient communication between applications and third-party services."
          // icon={<SiAntdesign />}
        />
        <Card
          title=" Database Management & Optimization "
          des=" I develop, optimize, and manage databases, ensuring high performance, security, and scalability for applications."
          // icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features