import React from "react";
import Newsletter from "./Newsletter";
import Copyright from "./Copyright";
import Socials from "./Socials";
import { footerData } from "../data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";

const Footer = () => {
  // Destructure footer data
  const { contact, hours, social } = footerData;

  return (
    <footer className="relative -top-43 z-20 bg-dark lg:bg-transparent lg:min-h-[620px] lg:bg-black lg:bg-center lg:bg-no-repeat pt-20 lg:pt-32">
      <div className="container mx-auto h-full">
        {/* Newsletter & info */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          className="h-full flex flex-col gap-y-4"
        >
          {/* Newsletter */}
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 1.6)}
            className="lg:flex-1 lg:mr-8"
          >
            <Newsletter />
          </motion.div>
          {/* Info */}
          <motion.div
            variants={fadeIn("up", "tween", 0.6, 1.6)}
            initial="hidden"
            whileInView={"show"}
            className="flex flex-col lg:flex-row lg:gap-x-[130px] gap-y-12 lg:gap-y-0 lg:mb-12"
          >
            {/* Contact */}
            <div className="flex-1 lg:max-w-[170px]">
              <div className="capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]">
                {contact.title}
              </div>
              <div className="capitalize">
                {contact.address}
              </div>
              <div className="capitalize">
                {contact.phone}
              </div>
            </div>
            {/* Program */}
            <div className="flex-1 ">
              <div className="capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]">
                {hours.title}
              </div>
              <div className="flex gap-x-[46px]">
                {hours.program.map((item, index) => {
                  return (
                    <div key={index} className="capitalize">
                      <div className="">
                        <div className="">
                          {item.days}
                        </div>
                        <div className="text-[20px] text-accent">
                          {item.hours}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social */}
            <div className="flex-1 lg:max-w-[280px] mb-12">
              <div className="capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]">
                {social.title}
              </div>
              <Socials />
            </div>
          </motion.div>
        </motion.div>
        {/* Copyright */}
        <motion.div className="mt-8 lg:mt-16">
          <Copyright />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
