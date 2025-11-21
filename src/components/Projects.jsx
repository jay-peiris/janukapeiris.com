import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  challenges,
  outcomes,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
      <div className="bg-gradient-to-br from-tertiary to-[#0a1628] p-8 rounded-lg border border-accent/10 sm:w-[480px] w-full min-h-[500px] hover:border-accent/20 transition-all duration-300">
        <div>
          <h3 className="text-white font-bold text-[28px] mb-4 leading-tight">{name}</h3>
          <p className="text-secondary text-[15px] leading-relaxed mb-6">
            {description}
          </p>

          {challenges && challenges.length > 0 && (
            <div className="mb-6">
              <h4 className="text-[#64ffda] font-semibold text-[15px] mb-2 uppercase tracking-wide">
                Key Challenges
              </h4>
              <ul className="space-y-2">
                {challenges.map((challenge, idx) => (
                  <li key={idx} className="text-secondary text-[14px] flex items-start">
                    <span className="text-accent-gold mr-2">→</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {outcomes && outcomes.length > 0 && (
            <div className="mb-6">
              <h4 className="text-[#64ffda] font-semibold text-[15px] mb-2 uppercase tracking-wide">
                Outcomes
              </h4>
              <ul className="space-y-2">
                {outcomes.map((outcome, idx) => (
                  <li key={idx} className="text-secondary text-[14px] flex items-start">
                    <span className="text-accent-gold mr-2">✓</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className="text-[11px] px-3 py-1 rounded border border-accent/20 text-accent font-medium uppercase tracking-wide"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Selected projects showcasing technical depth, strategic thinking, and 
        measurable business impact. Each project demonstrates end-to-end ownership 
        from architecture through delivery and adoption.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");

