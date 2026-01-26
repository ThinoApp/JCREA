import "./experience.css";
import { motion } from "framer-motion";

const experiences = [
  {
    place: "Cognizant, Mumbai",
    date: "Sep 2016- July 2020",
    poste: "Experince Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
  },
  {
    place: "Sugee Pvt limited, Mumbai",
    date: "Sep 2020- July 2023",
    poste: "UI/UX Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
  },
  {
    place: "Cinetstox, Mumbai",
    date: "Sep 2023",
    poste: "Lead UX Designer",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
  },
];
const Experience = () => {
  return (
    <div className="flex flex-col gap-12 items-center py-10 px-5 w-screen sm:py-20 lg:w-[70vw] lg:mx-auto">
      <h2 className="ExperienceTitle text-4xl lg:text-4xl ">
        My <span>Work Experience</span>
      </h2>
      <div className="flex flex-col w-full gap-12 pr-10 relative sm:pr-0">
        <Illustration
          className=" absolute! right-0 top-1/2 -translate-y-1/2 h-4/5!
        sm:right-1/2 
        "
        />
        {experiences.map((item, index) => (
          <div
            key={item.place}
            className="ExperienceItem box-border flex flex-col gap-4 border-b border-b-divider-1 py-5 
              sm:grid sm:grid-cols-2 sm:flex-row sm:text-start! 
            "
          >
            <div
              className={`flex flex-col gap-2  ${index === 1 ? "text-left" : "text-right"} sm:text-right sm:pr-15! lg:text-left `}
            >
              <h2 className="title text-2xl">{item.place}</h2>
              <p className="description">{item.date}</p>
            </div>
            <div className="flex flex-col gap-2 sm:pl-5! lg:pl-20!">
              <h2 className="title text-2xl">{item.poste}</h2>
              <p className="description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface IllustrationProps {
  className: string;
}
const Illustration = ({ className }: IllustrationProps) => {
  return (
    <motion.div
      initial={{
        scale: 0,
        opacity: 0,
      }}
      whileInView={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        bounce: 0.6,
        delay: 0.3,
      }}
      viewport={{
        amount: 0.5,
        once: false,
      }}
      className={`origin-top flex flex-col items-center justify-between gap-4 relative h-full ${className}`}
    >
      <div className="h-full w-0 border-2 border-dashed absolute top-0 left-1/2 -translate-x-1/2" />
      <div className="relative bg-white w-8 h-8  rounded-full border border-dashed flex items-center justify-center p-1">
        <div className="bg-[#FD853A] w-full h-full rounded-full" />
      </div>
      <div className="relative bg-white w-8 h-8  rounded-full border border-dashed flex items-center justify-center p-1">
        <div className="bg-[#1D2939] w-full h-full rounded-full" />
      </div>
      <div className="relative bg-white w-8 h-8  rounded-full border border-dashed flex items-center justify-center p-1">
        <div className="bg-[#FD853A] w-full h-full rounded-full" />
      </div>
    </motion.div>
  );
};

export default Experience;
