import ServiceCarousel from "../../components/ServiceCarousel/ServiceCarousel";
import ServiceHeader from "../../components/ServiceHeader/ServiceHeader";
import "./services.css";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="relative bg-[url('/assets/service_bg.jpg')] bg-cover h-screen w-screen overflow-hidden sm:py-12 lg:px-12">
      <motion.img
        src="/assets/fleur1.png"
        alt="Fleur 1"
        animate={{
          rotate: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
        style={{
          transformOrigin: "left center",
          x: "-50%",
        }}
        className="absolute top-[20%] left-[50%] object-cover w-20 h-20 "
      />
      <motion.img
        src="/assets/fleur1.png"
        alt="Fleur 2"
        animate={{
          rotate: [-90, -80, -90],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
        style={{
          transformOrigin: "left center",
          y: "-100%",
        }}
        className="absolute top-1/2 left-0 object-cover w-40 h-40
        lg:w-70 lg:h-70
        "
      />
      <motion.img
        src="/assets/fleur1.png"
        alt="Fleur 3"
        animate={{
          rotate: [150, 165, 150],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
        style={{
          transformOrigin: "left center",
          x: "100%",
          y: "-20%",
        }}
        className="absolute bottom-0 right-0 object-cover w-80 h-80"
      />
      <ServiceHeader />
      <ServiceCarousel />
    </div>
  );
};

export default Services;
