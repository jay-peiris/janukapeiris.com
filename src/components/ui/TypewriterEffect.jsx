import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "../../utils/cn";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
  cursor,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseSpeed = 2000;

    const type = () => {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
        if (currentText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setCurrentIndex(0);
        }
      } else {
        setCurrentText(currentWord.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
        if (currentText === currentWord) {
          setIsDeleting(true);
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? typeSpeed : currentText === words[wordIndex] ? pauseSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, wordIndex, currentText, words]);

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