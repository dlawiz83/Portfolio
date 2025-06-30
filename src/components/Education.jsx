import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-purple-600 text-center mb-12"
      >
        Education
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-purple-500"
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          University of the People
        </h3>
        <p className="text-gray-600 mb-1 italic">
          Bachelor of Science in Computer Science
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Nov 2023 – Dec 2025 | GPA: <span className="font-semibold">3.78 / 4.00</span>
        </p>
        <h4 className="text-md font-semibold text-gray-700 mb-1">Relevant Coursework:</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
          <li>Digital Electronics, Databases I & II, Web Programming</li>
          <li>Operating Systems, Software Engineering, Networking</li>
          <li>Mobile Apps, Computer Graphics, Algorithms, Data Structures</li>
        </ul>
      </motion.div>
    </section>
  );
}
