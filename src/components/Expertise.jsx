import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ExpertiseCard = ({ title, description, index }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.15, 0.75)}
    className="bg-gradient-to-br from-tertiary to-[#0a1628] p-6 rounded-lg border border-accent/10 sm:w-[360px] w-full min-h-[200px] hover:border-accent/20 transition-all duration-300"
  >
    <h3 className="text-white font-semibold text-[20px] mb-3 leading-tight">{title}</h3>
    <p className="text-secondary text-[14px] leading-relaxed">{description}</p>
  </motion.div>
);

const expertise = [
  {
    title: "Product Strategy & Vision",
    description: "Defining product vision, shaping strategy, and delivering modern data and AI platforms. Roadmapping, prioritization, and outcome definition with executive stakeholder alignment.",
  },
  {
    title: "Data & AI Platform Architecture",
    description: "Architecting scalable data platforms, AI-driven products, and modern data ecosystems. Enterprise data strategy, governance, and operating model design.",
  },
  {
    title: "Full-Stack Engineering",
    description: "Building end-to-end applications using Django, React, Kubernetes, and microservices. Full-stack capability from backend APIs to frontend experiences.",
  },
  {
    title: "Executive Stakeholder Engagement",
    description: "Engaging C-suite and SLT on strategic initiatives. Delivering insights influencing ExCo pricing, investment, and go-to-market decisions.",
  },
  {
    title: "Modern Data Stack Leadership",
    description: "Expertise across Snowflake, dbt, Fivetran, Azure, AWS, and BI tools. Building data quality frameworks, KPI definitions, and analytics transformation.",
  },
  {
    title: "Cross-Functional Leadership",
    description: "Leading teams of engineers, data scientists, and stakeholders. Building alignment, governance, and operating practices across functions.",
  },
];

const Expertise = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I Do</p>
        <h2 className={styles.sectionHeadText}>Expertise.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Combining executive-level leadership with deep technical capability. Known for building 
        high-performing teams, shaping strategy, and delivering measurable outcomes through structured, 
        outcome-driven approaches. Expertise spans product strategy, data architecture, full-stack engineering, 
        and executive stakeholder engagement.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {expertise.map((expertise, index) => (
          <ExpertiseCard
            key={`expertise-${index}`}
            index={index}
            {...expertise}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Expertise, "expertise"); 