import "./serviceCarousel.css";
import ServiceCard from "../ServiceCard/ServiceCard";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

const elements = [
  {
    title: "UI/UX Design",
    image: "/assets/service_card_1.png",
  },
  {
    title: "Web Design",
    image: "/assets/service_card_2.png",
  },
  {
    title: "Landing Page",
    image: "/assets/service_card_1.png",
  },
  {
    title: "UI/UX Design",
    image: "/assets/service_card_1.png",
  },
  {
    title: "Web Design",
    image: "/assets/service_card_2.png",
  },
  {
    title: "Landing Page",
    image: "/assets/service_card_1.png",
  },
];
const ServiceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToService = (index: number) => {
    setActiveIndex(index);
    if (carouselRef.current) {
      const child = carouselRef.current.children[index];
      if (child) {
        child.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      ref={carouselRef}
      className="ServiceCarousel grid grid-rows-1 grid-flow-col overflow-y-hidden w-screen overflow-x-scroll snap-x snap-mandatory
        lg:grid-flow-col lg:w-full lg:overflow-x-scroll 
        
    "
    >
      {elements.map((element, index) => (
        <ServiceCard
          activeIndex={activeIndex}
          key={index}
          title={element.title}
          image={element.image}
          index={index}
        />
      ))}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {elements.map((_, index) => (
          <div
            onClick={() => scrollToService(index)}
            key={index}
            className={`origin-center cursor-pointer duration-300 rounded-full w-2 h-2 lg:w-4 lg:h-4 ${
              index === activeIndex ? "w-7 lg:w-12 bg-[#FD853A]" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceCarousel;
