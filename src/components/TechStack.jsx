import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { techCategories } from "../constants";

const TechCategory = ({ category, technologies, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    className="bg-gradient-to-br from-tertiary to-[#0a1628] p-6 rounded-lg border border-accent/10 w-full hover:border-accent/20 transition-all duration-300"
  >
    <h3 className="text-white font-semibold text-[20px] mb-6 pb-3 border-b border-accent/10">
      {category}
    </h3>
    <div className="flex flex-wrap gap-3">
      {technologies.map((tech, idx) => (
        <div
          key={`${category}-${tech.name}-${idx}`}
          className="px-4 py-2 bg-[#0a192f] rounded border border-accent/10 hover:border-accent/30 transition-all duration-200"
        >
          <span className="text-secondary text-[14px] font-medium">{tech.name}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const TechStack = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Extensive hands-on experience across the modern data stack, cloud platforms, 
        databases, BI tools, and AI/ML technologies. Built custom BI platforms and 
        integrated dozens of data technologies at enterprise scale.
      </motion.p>

      <div className="mt-20 flex flex-col gap-6">
        {Object.entries(techCategories).map(([category, technologies], index) => (
          <TechCategory
            key={category}
            category={category}
            technologies={technologies}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(TechStack, "tech");

