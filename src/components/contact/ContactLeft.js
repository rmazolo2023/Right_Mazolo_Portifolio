import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhone, FaEnvelope } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.8 }}
      className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-6 lgl:p-10 rounded-lg shadow-lg flex flex-col gap-8 justify-center border border-gray-700"
    >
      <motion.img
        className="w-full h-64 object-cover rounded-lg mb-4 shadow-md"
        src={contactImg}
        alt="contactImg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Right Mazolo</h3>
        <p className="text-lg font-normal text-gray-400">Full-Stack Software Developer</p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          <FaPhone className="text-blue-400" /> 
          <span className="text-lightText">+265 883 252 419 / +265 998 412 468</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          <FaEnvelope className="text-red-400" /> 
          <span className="text-lightText">rightmazolo2@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4 text-gray-300">Find me on</h2>
        <div className="flex gap-4">
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
        </div>
      </div>
    </motion.div>
  );
};

export default ContactLeft;
