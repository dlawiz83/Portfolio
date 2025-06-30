import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay },
  }),
};

const highlights = [
  {
    title: "AI + Product Enthusiast",
    description:
      "Passionate about designing intelligent user experiences that blend code, creativity, and purpose.",
  },
  {
    title: "Software Engineer",
    description:
      "Experienced in building real-world projects using React, Next.js, Kotlin, Java, and more.",
  },
  {
    title: "Passionate Innovator",
    description:
      "Dedicated to crafting seamless user experiences with modern design and smart animations.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-20 text-gray-900"
    >
      {/* Heading */}
      <motion.h2
        className="text-5xl font-extrabold mb-12 text-purple-700 inline-block relative cursor-pointer"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
        About Me
        <motion.span
          layoutId="underline"
          className="block h-1 w-24 bg-purple-600 rounded-full mt-2 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        />
      </motion.h2>

      {/* Intro Text */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl space-y-6 mb-16"
        variants={{
          visible: {
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        <motion.p variants={fadeUp} className="text-lg leading-relaxed">
           I’m Ayesha, a software engineer with a strong interest in product management,
          artificial intelligence, and startup innovation. I love building interactive digital tools
          that make life easier, smarter, and more beautiful.
        </motion.p>

        <motion.p variants={fadeUp} className="text-lg leading-relaxed">
           My journey blends code, creativity, and curiosity, from building full-stack
          web apps to exploring machine learning, launching hackathon MVPs, and diving into
          AI research. I’m especially passionate about early-stage product ideation, human-centered design, and solving meaningful problems.
        </motion.p>
      </motion.div>

      {/* Key Highlights Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {highlights.map(({ title, description }, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(111, 66, 193, 0.25)" }}
            className="bg-purple-50 p-6 rounded-xl cursor-pointer shadow-md transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3 text-purple-700">{title}</h3>
            <p className="text-gray-700">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
