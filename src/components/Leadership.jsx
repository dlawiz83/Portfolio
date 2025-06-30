import { motion } from "framer-motion";

const leaderships = [
  {
    title: "Organizer - Local Tech Meetups",
    period: "2022 - Present",
    description:
      "Organized monthly meetups to connect developers and entrepreneurs.",
  },
  {
    title: "Volunteer at Local Elementary School",
    period: "2023 - Present",
    description:
      "Assisted with community activities and supported school events to help local children.",


  },
  {
    title: "School Student Representative",
    period: "2019 - 2022",
    description:
      "Represented students by delivering speeches and organizing events to enhance school community engagement.",
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
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="max-w-5xl mx-auto px-6 py-20"
    >
      <h2 className="text-4xl font-semibold mb-12 text-purple-600 text-center">
        Leadership
      </h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative before:absolute before:top-0 before:left-8 before:h-full before:w-1 before:bg-purple-300"
      >
        {leaderships.map(({ title, period, description }, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(111, 66, 193, 0.3)" }}
            className="relative pl-20 mb-16 cursor-pointer"
          >
            {/* Timeline circle */}
            <div className="absolute left-4 top-2 w-8 h-8 rounded-full bg-purple-600 border-4 border-white shadow-lg"></div>

            <h3 className="text-2xl font-semibold mb-1">{title}</h3>
            <time className="text-purple-600 font-medium mb-3 block">{period}</time>
            <p className="text-gray-700 max-w-xl">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
