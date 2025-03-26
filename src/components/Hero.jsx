import { motion } from "framer-motion";
import { TypewriterEffect } from "./ui/TypewriterEffect";
import { BackgroundBeams } from "./ui/BackgroundBeams";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-black text-white lg:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] lg:leading-[80px]">
            Hi, I'm <span className="text-[#64ffda]">Jay</span>
          </h1>
          <div className="mt-4">
            <TypewriterEffect
              words={[
                "Technical Product Manager",
                "Full Stack Developer",
                "Data Architect",
                "Data Evangelist",
              ]}
              className="text-[#64ffda] text-2xl font-bold"
            />
          </div>
          <p className="text-[#dfd9ff] font-medium lg:text-[24px] sm:text-[20px] text-[16px] lg:leading-[40px] mt-4 max-w-2xl">
            I build products that transform data into actionable insights, combining technical expertise with product management to create impactful solutions.
          </p>
        </div>
      </div>

      <BackgroundBeams className="absolute inset-0 -z-10" />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
