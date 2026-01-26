import "./hireMe.css";
import { useState } from "react";
import { motion } from "framer-motion";

const HireMe = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="bg-[#F2F4F7] py-40 flex flex-col gap-12 px-5 items-center w-screen
        sm:flex-row sm:justify-between sm:items-center sm:gap-10
        lg:grid lg:grid-cols-2  lg:items-center lg:gap-0
    "
    >
      <div className="relative w-full sm:w-230 lg:w-full  lg:flex lg:justify-center lg:items-center">
        <motion.img
          src="assets/hire_me_bg.png"
          alt="Hire Me Background"
          className="absolute -top-1/5 left-1/2 -translate-x-1/2 lg:w-150"
          animate={{
            scale: isHovered ? 1.1 : 0,
          }}
          transition={{
            duration: 0.5,
            type: "spring",
            bounce: 0.4,
          }}
        />
        <motion.img
          src="/assets/hire_me.png"
          alt="Hire Me Image"
          className="w-full lg:w-160 object-cover relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{
            y: isHovered ? 10 : 0,
          }}
          transition={{
            duration: 0.5,
            type: "spring",
            bounce: 0.4,
          }}
        />
      </div>
      <div className="flex flex-col items-center gap-10 sm:items-start  ">
        <h2 className="HireMeTitle text-6xl lg:text-5xl text-center">
          Why <span className="text-[#FD853A]">Hire me</span>?
        </h2>
        <p className="HireMeParagraph text-lg text-center sm:text-left lg:text-base lg:w-2/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
          nunc, posuere in justo vulputate, bibendum sodales
        </p>
        <div className="flex gap-12 lg:flex-1 lg:w-2/3 lg:justify-between">
          <div>
            <h3 className="HireMeStatTitle text-5xl lg:text-4xl">450+</h3>
            <p className="HireMeParagraph text-[#667085]!">Project Completed</p>
          </div>
          <div>
            <h3 className="HireMeStatTitle text-5xl lg:text-4xl">450+</h3>
            <p className="HireMeParagraph text-[#667085]!">Project Completed</p>
          </div>
        </div>
        <button className="HireMeBtnLabel text-3xl  px-10 py-5 border rounded-3xl hover:bg-black! hover:text-white! transition-all duration-300 cursor-pointer">
          Hire me
        </button>
      </div>
    </div>
  );
};

export default HireMe;
