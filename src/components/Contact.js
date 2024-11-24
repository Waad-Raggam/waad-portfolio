import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SocialIcon  } from "react-social-icons"; 

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Information</h3>
        <div className="mt-12 flex flex-col gap-6 text-white">
          <div>
            <h4 className="font-medium text-lg">Email</h4>
            <p className="text-secondary">waadsraggam@gmail.com</p>
          </div>
          <div>
            <h4 className="font-medium text-lg">Resume</h4>
            <a
              href="Waad Raggam - Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white underline"
            >
              Download My Resume
            </a>
          </div>
          <div>
            <h4 className="font-medium text-lg">Connect with me</h4>
            <div className="flex items-center gap-4 mt-2">
              <SocialIcon
                network="github"
                href="https://github.com/Waad-Raggam"
              />
              <SocialIcon
                network="linkedin"
                href="https://www.linkedin.com/in/waad-raggam/"
              />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");