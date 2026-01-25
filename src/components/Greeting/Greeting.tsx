import "./greeting.css";
import { motion } from "framer-motion";

interface GreetingProps {
  isSvgShow: boolean;
}

const Greeting = ({ isSvgShow }: GreetingProps) => {
  return (
    !isSvgShow && (
      <motion.div
        initial={{
          y: 200,
          scale: 0,
        }}
        animate={{
          y: 0,
          scale: 1,
        }}
        exit={{
          y: 200,
          scale: 0,
        }}
        transition={{
          ease: "backInOut",
          duration: 0.5,
        }}
        className="flex flex-col items-center py-15 gap-8 px-5 sm:py-20 lg:py-10 z-50"
      >
        <button className="border-2 border-[#171717] bg-white px-5 py-2 rounded-full relative">
          <span className="GreetingHello">Hello !</span>
          <img
            src="/assets/greeting.svg"
            alt="greeting"
            className="absolute top-0 right-0 translate-x-full -translate-y-1/2"
          />
        </button>
        <div>
          <h2 className="relative font-semibold text-5xl  text-center leading-[100%] sm:text-7xl sm:leading-[120%] lg:text-7xl">
            I’m <span className="text-[#FD853A]">Jenny</span>
            ,
            <br />
            Product Designer
            <img
              src="/assets/greeting.svg"
              alt="greeting"
              className="size-20 absolute left-0 bottom-0 -scale-100 translate-y-full sm:-translate-x-full"
            />
          </h2>
        </div>
      </motion.div>
    )
  );
};

export default Greeting;
