import { useState } from "react";
import Greeting from "../../components/Greeting/Greeting";
import UserProfile from "../../components/UserProfile/UserProfile";
import Header from "../Header/Header";
import HeroText from "../../components/HeroText/HeroText";
import { AnimatePresence } from "framer-motion";

const Hero = () => {
  const [isSvgShow, setIsSvgShow] = useState(false);

  return (
    <div className="w-screen h-screen relative sm:overflow-hidden flex flex-col items-center justify-start">
      <Header />
      <AnimatePresence mode="wait">
        <Greeting isSvgShow={isSvgShow} />
        <UserProfile setIsSvgShow={setIsSvgShow} isSvgShow={isSvgShow} />
        <HeroText isSvgShow={isSvgShow} />
      </AnimatePresence>
    </div>
  );
};

export default Hero;
