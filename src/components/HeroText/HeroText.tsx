import { QuoteIcon, StarIcon } from "lucide-react";
import "./heroText.css";
import { motion } from "framer-motion";

interface HeroTextProps {
  isSvgShow: boolean;
}

const HeroText = ({ isSvgShow }: HeroTextProps) => {
  return (
    <>
      <motion.div
        animate={{
          top: isSvgShow ? "20%" : "50%",
        }}
        transition={{
          ease: "backInOut",
          duration: 0.5,
        }}
        className="hidden sm:flex flex-row mt-10 items-center mx-5 w-full absolute justify-between px-10 "
      >
        <div className="flex flex-col w-1/5 gap-4">
          <QuoteIcon size={32} color="#344054" />
          <p className="heroTextParagraph text-base!">
            Jenny’s Exceptional product design ensure our website’s success.
            Highly Recommended
          </p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map(() => (
              <StarIcon fill="#FD853A" strokeWidth={0} />
            ))}
          </div>
          <div className="flex flex-col items-end">
            <h2 className="heroTextTitle">10 Years</h2>
            <p className="heroTextParagraph">Experience</p>
          </div>
        </div>
      </motion.div>
      <HeroTextMobile isSvgShow={isSvgShow} />
    </>
  );
};

const HeroTextMobile = ({ isSvgShow }: HeroTextProps) => {
  return (
    isSvgShow && (
      <motion.div className="sm:hidden flex flex-col mt-10 items-center mx-5 gap-4">
        <motion.div
          initial={{
            opacity: 0,
            x: -200,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: -200,
          }}
          transition={{
            ease: "backInOut",
            duration: 0.5,
          }}
          className="flex flex-col gap-2 items-center"
        >
          <QuoteIcon size={32} color="#344054" />
          <p className="heroTextParagraph text-center">
            Jenny’s Exceptional product design ensure our website’s success.
            Highly Recommended
          </p>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 200,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: 200,
          }}
          transition={{
            ease: "backInOut",
            duration: 0.5,
          }}
          className="w-full flex flex-col items-center"
        >
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map(() => (
              <StarIcon fill="#FD853A" strokeWidth={0} />
            ))}
          </div>
          <div className="flex flex-col items-end">
            <h2 className="heroTextTitle">10 Years</h2>
            <p className="heroTextParagraph">Experience</p>
          </div>
        </motion.div>
      </motion.div>
    )
  );
};

export default HeroText;
