import React, { useState } from "react"; 
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaUser, FaPhone, FaEnvelope, FaPaperPlane, FaCommentDots, FaSpinner } from "react-icons/fa";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const emailValidation = () => {
    return String(email).toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    
    if (!username) return setErrMsg("Username is required!");
    if (!phoneNumber) return setErrMsg("Phone number is required!");
    if (!email) return setErrMsg("Please enter your Email!");
    if (!emailValidation(email)) return setErrMsg("Enter a valid Email!");
    if (!subject) return setErrMsg("Please enter a Subject!");
    if (!message) return setErrMsg("Message is required!");
    
    setErrMsg("");
    setLoading(true);

    const templateParams = {
      to_name: "Right Mazolo",
      from_name: email,
      message: message,
    };

    emailjs.send("service_5pvxcew", "template_1xadppl", templateParams, "ENVN4Vn7F9EAdtm0r")
      .then(() => {
        setSuccessMsg("Thank you! Your message has been sent successfully.");
        setUsername("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch(() => {
        setErrMsg("Failed to send message. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSuccessMsgClose = () => {
    setSuccessMsg("");
  };

  return (
    <section id="contact" className="w-full py-20 border-b border-gray-800">
      <div className="flex justify-center items-center text-center mb-10">
        <Title title="" des="Contact Me" />
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center">
        <ContactLeft />
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="w-full lg:w-3/5 bg-gray-900 p-6 lg:p-10 rounded-lg shadow-lg text-white"
        >
          <form className="w-full flex flex-col gap-6">
         
        

            {errMsg && <p className="text-orange-500">{errMsg}</p>}
            {successMsg && (
              <div className="flex justify-between items-center text-green-500">
                <p>{successMsg}</p>
                <button
                  onClick={handleSuccessMsgClose}
                  className="bg-transparent text-green-500 border border-green-500 py-1 px-3 rounded"
                >
                  OK
                </button>
              </div>
            )}

            <div className="relative">
              <FaUser className="absolute left-4 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Your Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <FaPhone className="absolute left-4 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full pl-10 p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute left-4 top-3 text-gray-400" />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <FaCommentDots className="absolute left-4 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full pl-10 p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"
                rows="5"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSend}
              className="w-full bg-blue-500 text-white p-3 rounded-lg flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? <FaSpinner className="animate-spin" /> : <FaPaperPlane />} 
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
