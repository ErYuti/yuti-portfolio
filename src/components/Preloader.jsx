import React from "react";
import { motion } from "motion/react";

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      className="fixed inset-0 z-[100] bg-spotify-black flex flex-col items-center justify-center"
    >
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 border-2 border-spotify-green/20 rounded-full border-t-spotify-green"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 flex items-center justify-center font-black text-spotify-green text-3xl italic"
        >
          MK.
        </motion.div>
      </div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 200 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="h-[2px] bg-spotify-green mt-12 rounded-full shadow-[0_0_100px_#1DB954]"
      />
      <p className="mt-6 font-black text-spotify-grey tracking-[0.5em] uppercase text-[8px]">
        Loading Experience
      </p>
    </motion.div>
  );
};

export default Preloader;