import { motion } from "framer-motion";

const organizations = [
  {
    name: "Rewriting the Code",
    role: "Active Member",
    period: "2023 – Present",
  },
  {
    name: "Propel2Excel",
    role: "Active Fellow",
    period: "2025 – Present",
  },
  
  {
    name: "Microsoft Student Ambassador Program",
    role: "Ambassador",
    period: "Oct 2023 – Sep 2024",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Organizations() {
  return (
    <section id="organizations" className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-semibold mb-12 text-purple-600 text-center">
        Organizations
      </h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="space-y-10"
      >
        {organizations.map(({ name, role, period }, idx) => (
          <motion.article
            key={idx}
            variants={itemVariants}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-purple-700 mb-1">{name}</h3>
            <p className="text-gray-700 font-semibold">{role}</p>
            <time className="text-purple-600 font-medium">{period}</time>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
