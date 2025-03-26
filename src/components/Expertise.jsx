import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ExpertiseCard = ({ title, description, index }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="bg-tertiary p-6 rounded-2xl sm:w-[360px] w-full"
  >
    <div className="relative w-full h-[230px]">
      <div className="absolute inset-0 flex justify-center items-center bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20" />
      <div className="relative z-10">
        <h3 className="text-white font-bold text-[24px]">{title}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>
    </div>
  </motion.div>
);

const expertise = [
  {
    title: "Product Strategy",
    description: "Leading product vision, roadmap development, and feature prioritization for data-driven solutions.",
  },
  {
    title: "Technical Leadership",
    description: "Managing cross-functional teams of engineers and data scientists to deliver impactful products.",
  },
  {
    title: "Data Architecture",
    description: "Designing and implementing scalable data architectures and modern data ecosystems.",
  },
  {
    title: "Full Stack Development",
    description: "Building end-to-end applications using modern technologies like React, Django, and Kubernetes.",
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
        As a Technical Product Manager, I bridge the gap between technical implementation and business strategy. 
        My experience spans from data engineering to product leadership, allowing me to create solutions that 
        drive real business value.
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