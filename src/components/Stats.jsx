import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const StatCard = ({ value, label, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const nextValue = Math.min(
          Math.floor(increment * currentStep),
          value
        );
        setCount(nextValue);

        if (currentStep >= steps) {
          setCount(value);
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-white font-black text-[40px] sm:text-[56px] mb-2 tracking-tight">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-white/60 font-medium text-[14px] sm:text-[16px] uppercase tracking-wide">
        {label}
      </div>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#0a192f] via-[#0d1b2a] to-[#0a192f] py-20 border-y border-accent/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <StatCard value={737} label="Cost Savings (£K)" prefix="£" suffix="K" />
          <StatCard value={37} label="Adoption Growth" suffix="x" />
          <StatCard value={10} label="Years Experience" suffix="+" />
        </div>
      </div>
    </div>
  );
};

export default Stats;

