import React from "react";
import { contact } from "../data/data";
import { motion } from "framer-motion";

const Contact: React.FC = () => (
  <section id="contact" className="py-20 bg-white">
    <div className="container mx-auto px-4 text-center">
      <motion.h2
        className="text-3xl font-serifHeading text-green-800 mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Contact
      </motion.h2>
      <motion.div
        className="flex justify-center space-x-8 text-gray-700 font-body"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <a href={`mailto:${contact.email}`} className="hover:text-gold">
          Email
        </a>
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gold"
        >
          GitHub
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gold"
        >
          LinkedIn
        </a>
        {contact.twitter && (
          <a
            href={contact.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold"
          >
            Twitter
          </a>
        )}
      </motion.div>
    </div>
  </section>
);

export default Contact;
