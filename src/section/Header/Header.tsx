import { useState } from "react";
import "./header.css";
import { XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { assetUrl } from "../../config";

const menus = [
  { name: "Home", link: "#" },
  { name: "About", link: "#about" },
  { name: "Service", link: "#services" },
  { name: "Resume", link: "#resume" },
  { name: "Project", link: "#project" },
  { name: "Contact", link: "#contact" },
];

const Header = () => {
  return <><HeaderDesktop /><HeaderMobile /></>;
};

const HeaderDesktop = () => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} className="hidden lg:flex items-center justify-around px-2 py-2 my-2 bg-black text-white mx-auto w-[97%] rounded-full z-50 lg:py-0">
      <ul className="flex items-center gap-4 lg:justify-between w-full py-2">
        {menus.slice(0, 3).map((menu, index) => (
          <motion.li initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }} onClick={() => setActiveMenu(menu.name)} key={index} className={activeMenu === menu.name ? "link active lg:flex-1" : "link lg:flex-1 lg:px-4"}>
            <a href={menu.link}>{menu.name}</a>
          </motion.li>
        ))}
        <motion.div layout className="flex items-center gap-4 lg:justify-center lg:w-90" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
          <motion.img layout src={assetUrl("assets/logo.png")} alt="Logo" className="size-10" />
          <AnimatePresence mode="popLayout">
            {!isOpen ? (
              <motion.img layout key="logo-text" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} src={assetUrl("assets/logo_text.svg")} alt="logoText" />
            ) : (
              <motion.p layout key="made-by" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="LogoIconText flex flex-col"><span>Made by</span><span>Jayesh Patil</span></motion.p>
            )}
          </AnimatePresence>
        </motion.div>
        {menus.slice(3).map((menu, index) => (
          <motion.li initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }} key={index} className={activeMenu === menu.name ? "link active lg:flex-1" : "link lg:flex-1 lg:px-4"} onClick={() => setActiveMenu(menu.name)}>
            <a href={menu.link}>{menu.name}</a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} className="lg:hidden w-[90%] h-16 mx-auto rounded-full mt-5 px-5 flex items-center justify-center bg-black text-white py-2 z-1000">
      <div className="LogoContainer flex items-center gap-2" onClick={() => setIsOpen((prev) => !prev)}>
        <img src={assetUrl("assets/logo.png")} alt="Logos" className="size-10" />
        {!isOpen ? <img src={assetUrl("assets/logo_text.svg")} alt="logoText" /> : <p className="LogoIconText flex flex-col"><span>Made by</span><span>Jayesh Patil</span></p>}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="absolute top-0 left-0 border bg-black border-black w-full p-5 pb-10 flex flex-col gap-10 z-50">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 0.3 }} className="LogoContainer flex items-center gap-4">
              <img src={assetUrl("assets/logo.png")} alt="Logo" className="size-25" />
              <p className="LogoIconText flex flex-col"><span>Made by</span><span>Jayesh Patil</span></p>
            </motion.div>
            <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.2 }} className="ml-auto absolute top-5 right-5" onClick={() => setIsOpen(false)}><XIcon /></motion.button>
            {menus.map((menu, index) => (
              <motion.li initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ delay: 0.15 + index * 0.08, duration: 0.3 }} key={index} className="link border-b border-b-divider-1 rounded-none! py-2"><a href={menu.link}>{menu.name}</a></motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;
