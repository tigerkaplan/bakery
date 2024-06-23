import { useState, useEffect } from "react";
// Components
import Nav from "./Nav";
import Socials from "./Socials";
// Logo
import LogoWhite from "../assets/img/header/logo-white.png";
//motion
import { motion } from "framer-motion";
//variants
import { staggerContainer, fadeIn } from "../variants";

//header variants
const headerVariants = {
  hidden: {
    padding: "84px 0 84px 0",
    background: "none"
  },
  show: {
    padding: "14px 0 14px 0",
    background: "rgba(0,0,0,0.92)",
    transition: {
      type: "spring"
    }
  }
};

export const navVariants = {
  hidden: {
    clipPath: "circle(5.8% at 50% 0)",
    opacity: 0,
    transition: {
      type: "spring",
      delay: 0.2,
      stiffness: 300,
      damping: 140
    }
  },
  show: {
    clipPath: "circle(130% at 50% 0)",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80
    }
  }
};

const Header = () => {
  // Header state
  const [isActive, setIsActive] = useState(false);
  // Nav State
  const [nav, setNav] = useState(false);
  //Event Listeners
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate={isActive ? "show" : ""}
      className="bg-orange-200/20 fixed w-full max-w-[1800px] z-50 y-4"
    >
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial="hidden"
        animate={"show"}
        className="container mx-auto"
      >
        <div className="flex justify-between items-center px-4 lg:px-0 relative text-white">
          {/* menu button*/}
          <motion.div
            variants={fadeIn("down", "tween", 1, 1.4)}
            className={` 
          ${nav ? "gap-y-0" : "gap-y-2"}  
            flex flex-col items-center justify-center w-12 h-12 p-3 order-2 lg:order-none cursor-pointer border-2 rounded-full`}
            onClick={() => setNav(!nav)}
          >
            {/* bar 1*/}
            <motion.div
              initial={{
                rotate: 0
              }}
              animate={{
                rotate: nav ? -45 : 0,
                translateY: nav ? 2 : 0
              }}
              className="w-full h-[2px] bg-white"
            />
            {/* bar 2 */}
            <motion.div
              initial={{
                rotate: 0
              }}
              animate={{
                rotate: nav ? 45 : 0
              }}
              className="w-full h-[2px] bg-white"
            />
          </motion.div>
          {/* Logo*/}
          <motion.div variants={fadeIn("down", "tween", 1.2, 1.4)}>
            <a href="#">
              {/* if header  is active make logo 90x90 else 107 x 107 */}
              <img
                className={`${isActive
                  ? "w-[90px] h-[90px]"
                  : "w-[107px] h-[107px]"}`}
                src={LogoWhite}
                alt="Logo"
              />
            </a>
          </motion.div>
          {/* Social Icon*/}
          <motion.div
            variants={fadeIn("down", "tween", 1.4, 1.4)}
            className="hidden lg:flex"
          >
            <Socials />
          </motion.div>
          {/* Nav*/}
          <motion.div
            variants={navVariants}
            initial="hidden"
            animate={nav ? "show" : ""}
            className="absolute bg-accent w-[310px] h-[50vh] right-0 lg:left-0 top-[120px] bottom-0 z-50 rounded-lg shadow-xl"
          >
            <Nav />
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;