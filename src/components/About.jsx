import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, description }) => (
  <div className="xs:w-[280px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.75)}
      className="w-full bg-gradient-to-br from-tertiary to-[#0a1628] p-8 rounded-lg border border-accent/10 hover:border-accent/20 transition-all duration-300 h-[220px] flex flex-col"
    >
      <div className="mb-4">
        <div className="w-12 h-1 bg-accent-gold rounded"></div>
      </div>
      <h3 className="text-white text-[22px] font-semibold mb-3 leading-tight">
        {title}
      </h3>
      <p className="text-secondary text-[14px] leading-relaxed flex-1">
        {description}
      </p>
    </motion.div>
  </div>
);

const About = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Product, Data, and AI Leader with 10+ years of experience delivering modern data platforms 
        and full-stack SaaS products end-to-end. Known for combining strategic clarity with deep technical 
        capability—often acting as architect, engineer, and product owner simultaneously. Adept at building 
        greenfield products, driving enterprise data strategies, and simplifying complex problems into scalable, 
        elegant solutions. Brings a calm, structured, outcome-driven approach with an emphasis on velocity, 
        quality, and measurable impact.
      </p>

      <div className="mt-10 md:mt-20 flex flex-wrap gap-7 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
