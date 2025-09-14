import React from "react";
import { education } from "../data/data";
import { motion } from "framer-motion";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-lightbg">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-serifHeading text-green-800 text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Education
        </motion.h2>
        <div className="space-y-8">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              className="border-l-4 border-gold pl-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              <h3 className="text-2xl font-body text-green-800">
                {edu.degree}, {edu.institution}
              </h3>
              <span className="text-gold">
                {edu.startYear
                  ? `${edu.startYear} ‑ ${edu.endYear}`
                  : edu.endYear}
              </span>
              <p className="mt-2 text-gray-600 font-body">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
