import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRightIcon } from "lucide-react";
import { useState } from "react";
import { assetUrl } from "../../config";

const menusFooter = [
  {
    title: "Navigation",
    links: [
      { name: "Home", href: "#" },
      { name: "About Us", href: "#" },
      { name: "Service", href: "#" },
      { name: "Reseme", href: "#" },
      { name: "Project", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "+261 34 14 350 18", href: "#" },
      { name: "rakotomalalathino@gmail.com", href: "#" },
      { name: "https://thinoapp.github.io/PORTFOLIO", href: "#" },
    ],
  },
];

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#272727] px-4 py-12 flex flex-col gap-8 lg:py-24 lg:px-12 rounded-t-4xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <h2 className="font-lufga-semibold text-white text-5xl text-center">Lets Connect here</h2>
        <button className="font-lufga-medium flex items-center gap-2 px-4 py-2 bg-[#FD853A] text-2xl rounded-full text-white"><span>Hire Me</span><ArrowUpRightIcon /></button>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }} className="flex flex-col gap-8 py-10 border-y border-y-divider-1 sm:grid sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-[2fr_1fr_1fr] lg:grid-rows-1">
        <div className="flex flex-col items-start gap-4 sm:col-span-2 lg:col-span-1">
          <motion.div layout className="flex items-center gap-4 lg:w-full lg:justify-start" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <motion.img layout src={assetUrl("assets/logo.png")} alt="Logo" className="size-10" />
            <AnimatePresence mode="popLayout">
              {!isOpen ? (
                <motion.img layout key="logo-text" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} src={assetUrl("assets/logo_text.svg")} alt="logoText" />
              ) : (
                <motion.p layout key="made-by" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="LogoIconText flex flex-col"><span>Made by</span><span>Jayesh Patil</span></motion.p>
              )}
            </AnimatePresence>
          </motion.div>
          <p className="font-lufga-regular text-lg text-[#FCFCFD] tracing-[-1.5%] lg:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
          <ul className="flex flex-row items-center gap-4">
            {[
              ["facebook.png", "Facebook"],
              ["youtube.png", "Youtube"],
              ["whatsapp.png", "WhatsApp"],
              ["instagram.png", "Instagram"],
              ["twitter.png", "Twitter"],
            ].map(([file, alt]) => (
              <li key={file}><img src={assetUrl(`assets/social/${file}`)} alt={alt} className="size-10 object-cover" /></li>
            ))}
          </ul>
        </div>
        {menusFooter.map((item) => (
          <div key={item.title} className="flex flex-col gap-3 sm:pl-5">
            <h3 className="font-lufga-semibold text-[#FD853A] text-2xl">{item.title}</h3>
            <ul className="flex flex-col gap-2">
              {item.links.map((linkItem) => <li key={linkItem.name} className="text-white font-lufga-regular text-base">{linkItem.name}</li>)}
            </ul>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Footer;
