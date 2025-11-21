import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gradient-to-br from-tertiary to-[#0a1628] p-8 rounded-lg border border-accent/10 hover:border-accent/20 transition-all duration-300 mb-8"
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left side - Company logo and date */}
        <div className="flex flex-col items-center md:items-start gap-4 md:w-48 flex-shrink-0">
          <div className="w-20 h-20 rounded-lg border border-accent-gold/30 flex items-center justify-center bg-white p-3">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-accent-gold text-[14px] font-semibold">
              {experience.date}
            </p>
            <p className="text-accent text-[14px] font-medium mt-1">
              {experience.company_name}
            </p>
          </div>
        </div>

        {/* Right side - Title and responsibilities */}
        <div className="flex-1">
          <h3 className="text-white text-[26px] font-bold mb-4 leading-tight">
            {experience.title}
          </h3>
          
          <ul className="space-y-3">
            {experience.points.map((point, idx) => (
              <li
                key={`experience-point-${idx}`}
                className="text-white/70 text-[15px] leading-relaxed flex items-start"
              >
                <span className="text-accent-gold mr-3 mt-1 text-[10px] flex-shrink-0">▪</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className={styles.sectionSubText}>Career Journey</p>
        <h2 className={styles.sectionHeadText}>Professional Experience.</h2>
      </motion.div>

      <div className="mt-6 md:mt-20 w-full">
        {experiences && experiences.length > 0 ? (
          experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} index={index} />
          ))
        ) : (
          <p className="text-white">No experience data available</p>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
