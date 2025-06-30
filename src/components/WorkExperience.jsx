import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineering Fellow",
    company: "Headstarter AI",
    period: "Jul 2024 – Sep 2024",
    details: [
      "Developed a full-stack inventory management system using React and JavaScript, reducing inventory discrepancies by 30%.",
      "Participated in AI mock interviews with industry mentors to strengthen technical and behavioral interview skills.",
      "Received feedback from engineers, improving communication and system design problem-solving strategies.",
    ],
  },
  {
    role: "Student Ambassador",
    company: "Microsoft",
    period: "Oct 2023 – Sep 2024",
    details: [
      "Attended workshops and training sessions on software development best practices and Microsoft tools, focusing on Azure, GitHub, and VS Code.",
      "Rebuilt a static website using HTML, CSS, JavaScript, and GitHub Pages, reducing load time by 20% and improving accessibility by 15%.",
    ],
  },
  {
    role: "Virtual Insights Series Participant",
    company: "Goldman Sachs",
    period: "May 2025 – June 2025",
    details: [
      "Selected for a competitive 4-week virtual program exploring divisions such as Engineering, Investment Banking, and Risk Management.",
    ],
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

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="max-w-3xl mx-auto px-6 py-20"
    >
      <h2 className="text-4xl font-semibold mb-12 text-purple-600 text-center">
        Experience
      </h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="space-y-12"
      >
        {experiences.map(({ role, company, period, details }, idx) => (
          <motion.article
            key={idx}
            variants={itemVariants}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <header className="flex justify-between items-center mb-3">
              <h3 className="text-2xl font-semibold text-purple-700">{role}</h3>
              <time className="text-purple-600 font-medium">{period}</time>
            </header>
            <p className="text-gray-700 font-semibold mb-4">{company}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
