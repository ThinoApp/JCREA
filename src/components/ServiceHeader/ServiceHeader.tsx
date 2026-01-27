import "./serviceHeader.css";
import { motion } from "framer-motion";

const ServiceHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col p-10 gap-4 relative lg:flex-row lgitems-center justify-between lg:mb-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="ServicesTitle text-4xl lg:text-4xl "
      >
        My <span>Services</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="ServicesParagraph text-xl lg:w-3/7 lg:text-base"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
        nunc, posuere in justo vulputate, bibendum sodales
      </motion.p>
    </motion.div>
  );
};

export default ServiceHeader;
