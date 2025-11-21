import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { achievements } from "../constants";

const AchievementCard = ({ achievement, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="bg-gradient-to-br from-tertiary to-[#0a1628] p-8 rounded-lg border border-accent/10 sm:w-[280px] w-full min-h-[240px] flex flex-col justify-between hover:border-accent/20 transition-all duration-300"
  >
    <div>
      <h3 className="text-accent-gold font-black text-[56px] mb-2 leading-none">
        {achievement.metric}
      </h3>
      <h4 className="text-white font-semibold text-[18px] mb-3">
        {achievement.label}
      </h4>
      <p className="text-secondary text-[14px] leading-relaxed">
        {achievement.description}
      </p>
    </div>
  </motion.div>
);

const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Impact & Results</p>
        <h2 className={styles.sectionHeadText}>Key Achievements.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Measurable impact across data platforms, cost optimization, and organizational transformation. 
        These achievements demonstrate both technical execution and strategic leadership.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={`achievement-${index}`}
            achievement={achievement}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");

