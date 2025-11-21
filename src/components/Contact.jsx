import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className={`${styles.sectionHeadText} mb-12`}>Get In Touch</h2>
          
          <div className="flex flex-col sm:flex-row gap-8 mb-12 items-center justify-center">
            <a 
              href="mailto:jaypeiris91@gmail.com" 
              className="flex items-center gap-3 text-white hover:text-accent transition-colors text-lg group"
            >
              <div className="p-3 rounded-full border border-accent-gold/30 group-hover:border-accent-gold/60 group-hover:bg-accent-gold/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-gold">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <span>jaypeiris91@gmail.com</span>
            </a>
            
            <a 
              href="tel:+447706650509" 
              className="flex items-center gap-3 text-white hover:text-accent transition-colors text-lg group"
            >
              <div className="p-3 rounded-full border border-accent-gold/30 group-hover:border-accent-gold/60 group-hover:bg-accent-gold/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-gold">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <span>+44 7706 650509</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.linkedin.com/in/jaypeiris91" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 rounded border-2 border-accent-gold/40 bg-accent-gold/10 text-accent-gold font-semibold hover:bg-accent-gold/20 hover:border-accent-gold/60 transition-all duration-300"
            >
              Connect on LinkedIn
            </a>
            <a 
              href="mailto:jaypeiris91@gmail.com" 
              className="px-8 py-3 rounded border-2 border-accent/30 text-accent font-semibold hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
            >
              Send Email
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
