import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-20 text-center">
      <motion.h2
        className="text-4xl font-semibold mb-6 text-purple-600"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Let’s Connect!
      </motion.h2>

      <motion.p
        className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Have an idea, opportunity, or just want to say hi? I’m always excited to meet new people and explore what we can build together.
      </motion.p>

      <motion.div
        className="flex justify-center space-x-8 text-purple-600 text-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <motion.a
          href="https://linkedin.com/in/ayesha-dawodi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          whileHover={{ scale: 1.2, color: "#0e76a8" }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/dlawiz83"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          whileHover={{ scale: 1.2, color: "#333" }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="mailto:dlawizdawodi83@gmail.com"
          aria-label="Email"
          whileHover={{ scale: 1.2, color: "#ea4335" }}
        >
          <FaEnvelope />
        </motion.a>
      </motion.div>
    </section>
  );
}
