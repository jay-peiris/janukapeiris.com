import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { cn } from "../../utils/cn";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
  cursor,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isReverse, setIsReverse] = useState(false);
  const currentIndexRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      if (currentWordIndex >= words.length) {
        setCurrentWordIndex(0);
        currentIndexRef.current = 0;
        setIsReverse(false);
        setCurrentText("");
        intervalRef.current = setTimeout(animate, 2000);
        return;
      }

      const currentWord = words[currentWordIndex];
      if (isReverse) {
        setCurrentText((prev) => prev.slice(0, -1));
        if (currentText.length === 0) {
          setIsReverse(false);
          setCurrentWordIndex((prev) => prev + 1);
          currentIndexRef.current = 0;
          intervalRef.current = setTimeout(animate, 1000);
        } else {
          intervalRef.current = setTimeout(animate, 30);
        }
      } else {
        if (currentIndexRef.current < currentWord.length) {
          setCurrentText((prev) => prev + currentWord[currentIndexRef.current]);
          currentIndexRef.current += 1;
          intervalRef.current = setTimeout(animate, 150);
        } else {
          setIsReverse(true);
          intervalRef.current = setTimeout(animate, 2000);
        }
      }
    };

    intervalRef.current = setTimeout(animate, 100);

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [currentWordIndex, currentText, words, isReverse]);

  return (
    <div className={cn("font-bold", className)}>
      <span>{currentText}</span>
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
        className={cn("inline-block", cursorClassName)}
      >
        {cursor || "|"}
      </motion.span>
    </div>
  );
}; 