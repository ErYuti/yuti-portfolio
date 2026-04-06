import React from "react";
import { motion } from "motion/react";

export const AnimatedText = ({ text, className }) => {
  return (
    <div className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap mr-[0.3em]">
          {word.split("").map((char, j) => (
            <motion.span
              key={j}
              className="char-hover inline-block"
              whileHover={{ 
                scale: 1.4, 
                color: "#1DB954",
                y: -10,
                rotate: 5
              }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  );
};