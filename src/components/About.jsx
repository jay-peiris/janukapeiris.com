import React from "react";
import { Tilt } from "react-tilt"; // modify import statement to import Tilt component
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a highly skilled data professional with extensive experience in data engineering, product development, and process improvement. 
        My proficiency in scripting languages such as Python and PowerShell, as well as my expertise in tools such as Snowflake and dbt, allow 
        me to build innovative and efficient solutions for complex data challenges.
        <br/><br/>
        As a mentor to other developers and a leader in internal process 
        improvement initiatives, I am constantly seeking ways to improve workflows and optimize data processes. 
        <br/><br/>
        My ability to generate full-stack technical process diagrams, including ERDs, dependencies, and security and firewall rules, 
        ensures a thorough and thoughtful approach to data engineering.I have a proven track record of successfully leading internal process improvement 
        initiatives for scoping requirements and UAT while carefully considering industry best practices.
        <br/><br/>
        Overall, I am passionate about using data to drive digital change and inform well-informed decisions. 
        I am excited to continue pushing the boundaries of what is possible in the data engineering field and to make a 
        meaningful impact on the organizations I work with.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
