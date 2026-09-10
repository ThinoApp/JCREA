import { ArrowUpRight } from "lucide-react";
import "./userProfile.css";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useState } from "react";
import { assetUrl } from "../../config";

interface UserProfileProps {
  setIsSvgShow: (value: boolean) => void;
  isSvgShow: boolean;
}

const UserProfile = ({ isSvgShow, setIsSvgShow }: UserProfileProps) => {
  const [isHireMeHover, setIsHireMeHover] = useState(false);
  return (
    <>
      <div
        className={`UserProfile absolute bottom-0  lg:w-1/2 mx-auto lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2  `}
        onMouseEnter={() => setIsSvgShow(true)}
        onMouseLeave={() => setIsSvgShow(false)}
      >
        <img
          src={assetUrl("assets/user-profile.png")}
          alt="user-profile"
          className="lg:w-auto lg:scale-110 lg:object-cover relative z-10"
        />
        <AnimatePresence mode="wait">
          {isSvgShow && (
            <motion.img
              src={assetUrl("assets/hero_hover_active.svg")}
              alt="Hover Svg Icon"
              initial={{ y: 200, scale: 0 }}
              animate={{ y: 0, scale: 1.1 }}
              exit={{ y: 200, scale: 0 }}
              transition={{ ease: "backInOut", duration: 0.5 }}
              className={`absolute bottom-0 left-0 w-full origin-bottom `}
            />
          )}
        </AnimatePresence>
        <div className="bg-[#FEB273] absolute bottom-0 translate-y-0 w-screen h-[50vw] -z-10 rounded-t-full lg:w-[50vw] lg:h-[25vw]" />
        <div className="w-6/7 lg:w-2/5 mx-auto absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full p-2 flex items-center gap-2 bg-white/20 backdrop-blur-[20px]  border-divider-1 lg:bottom-10 z-10">
          <motion.button
            animate={{ paddingInline: !isHireMeHover ? "10px" : "5px" }}
            transition={{ duration: 0.3, ease: "backInOut" }}
            className={`bg-[#FD853A] duration-300 flex-1 flex flex-row justify-center items-center rounded-full py-2 CTAtext px-4 ${isHireMeHover ? "bg-transparent" : ""}`}
          >
            Portfolio
            {!isHireMeHover && (
              <motion.span
                initial={{ x: -10, y: 5, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "backInOut" }}
              >
                <ArrowUpRight />
              </motion.span>
            )}
          </motion.button>
          <motion.button
            animate={{ paddingInline: !isHireMeHover ? "10px" : "5px" }}
            transition={{ duration: 0.3, ease: "backInOut" }}
            onMouseEnter={() => setIsHireMeHover(true)}
            onMouseLeave={() => setIsHireMeHover(false)}
            className={`flex-1 flex flex-row duration-300 justify-center items-center rounded-full py-2 CTAtext   ${isHireMeHover ? "bg-[#FD853A]" : "bg-transparent"}`}
          >
            Hire Me
            {isHireMeHover && (
              <motion.span
                initial={{ x: -10, y: 5, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "backInOut" }}
              >
                <ArrowUpRight />
              </motion.span>
            )}
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
