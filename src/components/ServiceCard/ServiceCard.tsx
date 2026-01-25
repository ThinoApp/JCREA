import { ArrowUpRight } from "lucide-react";
import "./serviceCard.css";
import { motion } from "framer-motion";
import { useState } from "react";

interface ServiceCardProps {
  title: string;
  image: string;
  activeIndex: number;
  index: number;
}

const ServiceCard = ({
  title,
  image,
  activeIndex,
  index,
}: ServiceCardProps) => {
  const [isCardHover, setIsCardHover] = useState(false);
  return (
    <motion.div
      className=" w-[90vw] h-[55vh] mx-4 relative
      sm:w-[400px] sm:h-[500px] rounded-4xl
      "
      onMouseEnter={() => setIsCardHover(true)}
      onMouseLeave={() => setIsCardHover(false)}
    >
      <motion.div
        animate={{
          background:
            isCardHover || activeIndex === index
              ? "#FD853A"
              : "rgba(104, 104, 104, 0.2)",
          borderColor:
            isCardHover || activeIndex === index
              ? "rgba(255,255,255,0)"
              : "rgba(255,255,255,0.5)",
          boxShadow:
            isCardHover || activeIndex === index
              ? "0px 10px 30px rgba(0, 0, 0, 0.2)"
              : "0px 0px 0px rgba(0, 0, 0, 0)",
        }}
        className="cardMask bg-[rgba(104, 104, 104, 0.2)] backdrop-blur-[7.5px] border border-white/50 rounded-4xl  text-white w-full snap-center relative h-full flex flex-col justify-between
        sm:rounded-[36px]
        "
      >
        <h2 className="px-7 py-4 border-b border-b-white/50 cardText text-3xl ">
          {title}
        </h2>
        <motion.div
          animate={{
            scale: isCardHover || activeIndex === index ? 1.05 : 1,
          }}
          transition={{
            type: "spring",
            bounce: 0.6,
          }}
          className="w-full relative"
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 content-[''] w-[80%]  h-full bg-[#757575]/35 rounded-3xl" />
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 content-[''] w-[90%]  h-full bg-[#9E9D9D] rounded-3xl" />
          <img
            src={image}
            alt="card image Background"
            className="rounded-[40px] relative scale-[1.01]"
          />
        </motion.div>
      </motion.div>
      <motion.button
        animate={{
          background: isCardHover ? "#FD853A" : "#1D2939",
          scale: isCardHover ? 1.04 : 1,
          boxShadow: isCardHover
            ? "0px 10px 30px rgba(0, 0, 0, 0.2)"
            : "0px 0px 0px rgba(0, 0, 0, 0)",
        }}
        transition={{
          type: "spring",
          bounce: 0.5,
        }}
        className="absolute bottom-2 right-2  bg-[#1D2939] rounded-full border-none flex items-center justify-center
            size-22 sm:size-24 
        
        "
      >
        <ArrowUpRight
          color="white"
          strokeWidth={1}
          className="size-16 sm:size-24"
        />
      </motion.button>
    </motion.div>
  );
};

export default ServiceCard;
