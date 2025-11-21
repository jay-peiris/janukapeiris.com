import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { leadershipCompetencies } from "../constants";

const LeadershipCard = ({ competency, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    className="bg-gradient-to-br from-tertiary to-[#0a1628] p-6 rounded-lg border border-accent/10 sm:w-[360px] w-full min-h-[180px] hover:border-accent/20 transition-all duration-300"
  >
    <h3 className="text-white font-semibold text-[20px] mb-3 leading-tight">
      {competency.title}
    </h3>
    <p className="text-secondary text-[14px] leading-relaxed">
      {competency.description}
    </p>
  </motion.div>
);

const Leadership = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Leadership Approach</p>
        <h2 className={styles.sectionHeadText}>Core Competencies.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Combining executive-level leadership with deep technical capability. 
        Known for building high-performing teams, shaping strategy, and delivering 
        measurable outcomes through structured, outcome-driven approaches.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {leadershipCompetencies.map((competency, index) => (
          <LeadershipCard
            key={`leadership-${index}`}
            competency={competency}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Leadership, "leadership");

