import "./marqueeBand.css";
import { StarIcon } from "lucide-react";
import { Fragment } from "react/jsx-runtime";
import { motion } from "framer-motion";

const maqueeText = ["UI/UX Designer", "App Design", "Dashboard"];
const MarqueeBand = () => {
  return (
    <div className="w-full h-25 flex items-center justify-center gap-2 bg-[#FB6514] overflow-hidden rounded-lg relative sm:h-36 lg:h-42">
      <div className="bg-white absolute -rotate-8 w-[120%] py-2 flex sm:-rotate-5 lg:-rotate-3">
        <motion.div
          className="flex gap-10 flex-nowrap pr-10"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        >
          {[...maqueeText, ...maqueeText, ...maqueeText, ...maqueeText].map(
            (text, index) => (
              <Fragment key={index}>
                <p
                  className="marqueeText text-nowrap text-xl font-bold flex items-center gap-10
                sm:text-3xl
                "
                >
                  {text}{" "}
                  <StarIcon
                    fill="#FD853A"
                    className="size-6 sm:size-10"
                    strokeWidth={0}
                  />
                </p>
              </Fragment>
            ),
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeBand;
