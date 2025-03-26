import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-[70vh] mx-auto bg-gradient-to-b from-[#0a192f] to-[#112240]">
      <div className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-4 h-4 rounded-full bg-[#64ffda]"
          />
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "120px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-1 sm:h-40 h-20 bg-gradient-to-b from-[#64ffda] to-transparent"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#64ffda]">Jay</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop products, user experiences, and scalable SaaS solutions
          </p>
          <div className="mt-6 flex gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://occamflow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg bg-[#64ffda] text-primary font-bold hover:bg-[#64ffda]/90 transition-colors"
            >
              Discover Occamflow
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#about"
              className="px-5 py-2 rounded-lg border-2 border-[#64ffda] text-[#64ffda] font-bold hover:bg-[#64ffda]/10 transition-colors"
            >
              About Me
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="absolute xs:bottom-5 bottom-16 w-full flex justify-center items-center">
        <a href="#about">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-[25px] h-[40px] rounded-3xl border-3 border-[#64ffda] flex justify-center items-start p-1"
          >
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-[#64ffda] mb-1"
            />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
