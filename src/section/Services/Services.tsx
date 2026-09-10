import ServiceCarousel from "../../components/ServiceCarousel/ServiceCarousel";
import ServiceHeader from "../../components/ServiceHeader/ServiceHeader";
import "./services.css";
import { motion } from "framer-motion";
import { assetUrl } from "../../config";

const Services = () => {
  return (
    <div
      className="relative bg-cover h-screen w-screen sm:h-full overflow-hidden sm:py-12 lg:px-12 lg:py-36"
      style={{ backgroundImage: `url(${assetUrl("assets/service_bg.jpg")})` }}
    >
      <motion.img
        src={assetUrl("assets/fleur1.png")}
        alt="Fleur 1"
        animate={{ rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        style={{ transformOrigin: "left center", x: "-50%" }}
        className="absolute top-[20%] left-[50%] object-cover w-20 h-20"
      />
      <motion.img
        src={assetUrl("assets/fleur1.png")}
        alt="Fleur 2"
        animate={{ rotate: [-90, -80, -90] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        style={{ transformOrigin: "left center", y: "-100%" }}
        className="absolute top-1/2 left-0 object-cover w-40 h-40 lg:w-70 lg:h-70"
      />
      <motion.img
        src={assetUrl("assets/fleur1.png")}
        alt="Fleur 3"
        animate={{ rotate: [150, 165, 150] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        style={{ transformOrigin: "left center", x: "100%", y: "-20%" }}
        className="absolute bottom-0 right-0 object-cover w-80 h-80"
      />
      <ServiceHeader />
      <ServiceCarousel />
    </div>
  );
};

export default Services;
