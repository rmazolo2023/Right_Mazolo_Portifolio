import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { navLinksdata } from "../../constants";
import { FaCode } from "react-icons/fa"; // Importing the code bracket icon

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
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
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
      // className="w-full h-24 sticky top-0 z-50 bg-bodyColor flex items-center justify-center font-titleFont border-b-[1px] border-b-gray-600 px-6"
      className="w-full h-24 sticky top-0 z-50 bg-neutral-900 flex items-center justify-center font-titleFont border-b-[1px] border-b-gray-600 px-6"

    >
      {/* Centered Wrapper */}
      <div className="flex items-center justify-center w-full">
        {/* Software Development Symbol and Name */}
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold text-white flex items-center mr-6"
        >
           {/* Software development symbol */}
           <motion.h1
               initial={{ scale: 0.5, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                className="text-2xl font-bold text-white flex items-center mr-6"
           >
          <span className="mr-4">Right Mazolo</span> {/* Adds spacing before the icon */}
        <FaCode className="text-xl" /> {/* Software development symbol */}
        </motion.h1>

        </motion.h1>

        {/* Desktop Navigation (Centered) */}
        <ul className="hidden mdl:flex items-center gap-6 lg:gap-10">
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
      </div>

      {/* Mobile Menu Icon */}
      <span
        onClick={() => setShowMenu(!showMenu)}
        className="text-xl mdl:hidden bg-black w-12 h-12 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
      >
        <FiMenu />
      </span>

      {/* Mobile Menu */}
      {showMenu && (
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          // className="w-[80%] h-screen absolute top-0 left-0 bg-gray-900 p-4"
          className="w-[80%] h-screen absolute top-0 left-0 bg-gray-900 p-4"

        >
          <div className="flex flex-col gap-8 py-2 relative items-center">
            <h1 className="text-3xl font-bold text-white">
              <FaCode className="text-xl mr-2" /> Right Mazolo
            </h1>

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
