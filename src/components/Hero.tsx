import React from "react";
import { hero } from "../data/data";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center text-center py-20 bg-lightbg"
    >
      <motion.img
        src={hero.photo}
        alt={hero.name}
        className="w-40 h-40 rounded-full border-4 border-gold shadow-lg object-cover"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h1
        className="mt-6 text-4xl font-serifHeading text-green-800"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {hero.name}
      </motion.h1>
      <motion.p
        className="mt-4 max-w-xl text-lg font-body text-gray-700"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        {hero.shortBio}
      </motion.p>
      <motion.a
        href="/aman_khan_resume.pdf"
        download
        className="mt-8 px-6 py-3 bg-gold text-white rounded hover:bg-gold‑dark transition"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        Download Resume
      </motion.a>
    </section>
  );
};

export default Hero;
