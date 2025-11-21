import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] mx-auto bg-gradient-to-b from-[#0a192f] via-[#0f1f35] to-[#0a192f]">
      <div className={`${styles.paddingX} absolute inset-0 top-[100px] md:top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-5 h-5 rounded-full bg-accent-gold"
          />
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "300px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-1 h-80 bg-gradient-to-b from-accent-gold/50 to-transparent"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-2"
        >
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="text-white/90">Januka Peiris</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-accent`}>
            Product Leader | Data & AI Strategist | Full-Stack Builder
          </p>
          <p className="mt-8 text-white/70 text-[18px] max-w-3xl leading-relaxed font-light">
            Product, Data, and AI Leader with 10+ years delivering modern data platforms and full-stack SaaS products end-to-end. 
            Known for combining strategic clarity with deep technical capability—often acting as architect, engineer, and product owner 
            simultaneously. Adept at building greenfield products, driving enterprise data strategies, and delivering measurable business 
            outcomes through scalable, elegant solutions.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="px-8 py-3 rounded border-2 border-accent/30 bg-accent/5 text-accent font-semibold hover:bg-accent/10 transition-all duration-300"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="px-8 py-3 rounded border-2 border-white/30 text-white font-semibold hover:border-white/50 hover:bg-white/5 transition-all duration-300"
            >
              Get In Touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://www.linkedin.com/in/jaypeiris"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded border-2 border-white/20 text-white/80 font-semibold hover:border-white/40 hover:text-white transition-all duration-300"
            >
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="hidden md:block w-[35px] h-[64px] rounded-3xl border-4 border-accent/20 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-accent-gold mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
