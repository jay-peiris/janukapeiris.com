import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { BackgroundBeams } from "./BackgroundBeams";

const Contact = () => {
  return (
    <>
      <div className="xl:mt-12 flex flex-col gap-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center mb-10"
        >
          <h2 className={styles.sectionHeadText}>Contact</h2>
          <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center">
            Feel free to reach out to me directly with any questions or opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-10 mt-8">
            <a 
              href="mailto:jay@occamflow.com" 
              className="flex items-center gap-2 text-white hover:text-[#64ffda] transition-colors text-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#64ffda]">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              jay@occamflow.com
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden"
        >
          <div className="w-full h-64 bg-gradient-to-r from-[#112240] to-[#0a192f] rounded-2xl overflow-hidden">
            <BackgroundBeams className="absolute inset-0 z-0" />
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <div className="text-center p-8">
                <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
                <p className="text-lg text-white/80 mb-8">
                  Ready to collaborate or discuss Occamflow?
                </p>
                <a 
                  href="https://occamflow.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-lg bg-[#64ffda] text-primary font-bold hover:bg-[#64ffda]/90 transition-colors"
                >
                  Visit Occamflow
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
