import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

// Animations
const navVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const listVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="w-full h-24 sticky top-0 z-50 bg-bodyColor flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 px-6"
    >
      {/* Logo Section */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src={logo} alt="logo" className="w-[65px] h-[80px]" />
      </motion.div>

      {/* Desktop Navigation with Staggered & Shake Effect */}
      <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
        {navLinksdata.map(({ _id, title, link }, i) => (
          <motion.li
            key={_id}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={listVariants}
            whileHover={{
              scale: 1.1,
              rotate: [0, -2, 2, -2, 2, 0], // Shake effect
              transition: { duration: 0.3 },
            }}
            className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
          >
            <Link to={link} spy smooth offset={-70} duration={500}>
              {title}
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <span
        onClick={() => setShowMenu(!showMenu)}
        className="text-xl mdl:hidden bg-black w-12 h-12 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
      >
        <FiMenu />
      </span>

      {/* Mobile Menu with Staggered Items */}
      {showMenu && (
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[80%] h-screen absolute top-0 left-0 bg-gray-900 p-4"
        >
          <div className="flex flex-col gap-8 py-2 relative">
            <img src={logo} alt="logo" className="w-32" />
            <ul className="flex flex-col gap-4">
              {navLinksdata.map(({ _id, title, link }, i) => (
                <motion.li
                  key={_id}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={listVariants}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -2, 2, -2, 2, 0], // Shake effect
                    transition: { duration: 0.3 },
                  }}
                  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                >
                  <Link to={link} spy smooth offset={-70} duration={500} onClick={() => setShowMenu(false)}>
                    {title}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex flex-col gap-4">
              <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
              <div className="flex gap-4">
                <motion.span whileHover={{ scale: 1.2 }} className="bannerIcon">
                  <FaFacebookF />
                </motion.span>
                <motion.span whileHover={{ scale: 1.2 }} className="bannerIcon">
                  <FaTwitter />
                </motion.span>
                <motion.span whileHover={{ scale: 1.2 }} className="bannerIcon">
                  <FaLinkedinIn />
                </motion.span>
              </div>
            </div>

            {/* Close Menu Button */}
            <span
              onClick={() => setShowMenu(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
            >
              <MdClose />
            </span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
