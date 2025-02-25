import React, { useState } from 'react';
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full lgl:w-1/2 flex justify-center items-center relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <img 
        style={{
          width: "400px", 
          height: "495px", 
          zIndex: 10,
          transform: isHovered ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.3s ease-in-out",
          boxShadow: isHovered ? "0px 10px 20px rgba(0, 0, 0, 0.5)" : "none"
        }}
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner;
