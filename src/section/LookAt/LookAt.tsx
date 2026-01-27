import { ArrowRightIcon } from "lucide-react";
import "./lookAt.css";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const lookAtList = [
  {
    title: "Look At",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
    image: "/assets/lookAtCard.png",
  },
  {
    title: "Look At",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
    image: "/assets/lookAtCard1.jpg",
  },
  {
    title: "Look At",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
    image: "/assets/lookAtCard2.png",
  },
];

interface LookAtProps {
  title: string;
  description: string;
  image: string;
}
const LookAt = () => {
  return (
    <div className="flex flex-col items-center gap-12 px-5 py-10 w-screen ">
      <LookAtHeader title="Lets have a look at my" highlight="Portfolio" />
      <LookAtCarousel />
    </div>
  );
};

interface LookAtHeaderProps {
  title: string;
  highlight: string;
  headerClass?: string;
}
export const LookAtHeader = ({
  title,
  highlight,
  headerClass,
}: LookAtHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col gap-10 items-end sm:items-center w-full lg:flex-row lg:justify-between lg:items-center"
    >
      <h2 className={"LookAtTitle text-5xl " + headerClass}>
        {title}&nbsp;
        <span>{highlight}</span>
      </h2>
      <button className="LookAtBtn px-5 py-2 rounded-full">See All</button>
    </motion.div>
  );
};

const LookAtCard = ({ title, description, image }: LookAtProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="LookAtCard w-[90vw] h-[50vh] lg:h-auto snap-start rounded-2xl overflow-hidden border border-divider-1
      lg:w-[45vw]
      "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {!isHovered && (
          <motion.div
            layout
            initial={{ opacity: 0, x: "-100%", y: "100%" }}
            animate={{ opacity: 1, x: "0%", y: "0%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            exit={{ opacity: 0, x: "-100%", y: "100%" }}
            className="shadowGradient"
          ></motion.div>
        )}
      </AnimatePresence>
      <img
        src={image}
        alt="Look At"
        className="w-full h-full object-cover lg:w-[45vw] lg:h-[20vw]"
      />
      <motion.div
        layout
        initial={{
          borderRadius: "20px",
          backgroundColor: "transparent",
          backdropFilter: "none",
          boxShadow: "none",
          x: "-100%",
          y: "-100%",
        }}
        animate={{
          backgroundColor: isHovered ? "rgba(0, 0, 0, 0.3)" : "transparent",
          backdropFilter: isHovered ? "blur(15px) saturate(180%)" : "none",
          boxShadow: isHovered
            ? "0 8px 32px rgba(0, 0, 0, 0.25), inset 0 0 0 0.5px rgba(255, 255, 255, 0.1)"
            : "none",
          x: "0%",
          y: "0%",
        }}
        transition={{
          duration: 0.5,
          type: "spring",
          bounce: 0.4,
        }}
        className="absolute bottom-4 left-2 right-2 flex flex-col gap-2 p-2 sm:p-4"
      >
        <motion.h2 layout className="LookAtCardTitle relative z-10 text-5xl">
          {title}
        </motion.h2>
        <AnimatePresence mode="popLayout">
          {isHovered && (
            <motion.p
              layout
              key="paragraph"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="LookAtCardParagraph relative z-10 sm:text-xl"
            >
              {description}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.button
        animate={{
          background: isHovered ? "#FD853A" : "transparent",
        }}
        className="absolute top-2 right-2 z-10 border rounded-full p-2 border-[#FD853A]"
      >
        <ArrowRightIcon
          color={isHovered ? "#fff" : "#FD853A"}
          className="duration-300"
        />
      </motion.button>
    </div>
  );
};

const LookAtCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (index: number) => {
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

  const cards = [0, 1, 2];

  return (
    <div className="relative w-full">
      <div
        ref={carouselRef}
        className="LookAtCarousel grid grid-rows-1 grid-flow-col gap-4 w-full overflow-x-scroll snap-mandatory snap-x px-12 pb-8 scrollbar-hide lg:gap-8 "
      >
        {lookAtList.map((item, index) => (
          <LookAtCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
        {cards.map((_, index) => (
          <div
            onClick={() => scrollToCard(index)}
            key={index}
            className={`origin-center cursor-pointer duration-300 rounded-full w-2 h-2 lg:w-4 lg:h-4 ${
              index === activeIndex ? "w-7 lg:w-12 bg-[#FD853A]" : "bg-black/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LookAt;
