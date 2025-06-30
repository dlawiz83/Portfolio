import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      "Java",
      "JavaScript",
      "PHP",
      "Kotlin",
      "Python",
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      "React",
      "JavaFX",
      "Tailwind CSS",
      "Socket Programming",
      "Agile",
      "Next.js",
      "Vite",
      "Bootstrap",
      "Node.js",
    ],
  },
  {
    category: "Web Technologies",
    skills: [
      "HTML",
      "CSS",
      "REST APIs",
      "Responsive Design",
    ],
  },
  {
    category: "Databases & Backend",
    skills: [
      "MySQL",
      "Firebase (Auth + Firestore)",
      "MongoDB",
      "AWS/Azure",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Figma",
      "UNIX/Linux",
      "Firebase CLI",
      "Microsoft Office (Word, Excel, PowerPoint)",
    ],
  },
  {
    category: "Professional Skills",
    skills: [
      "Software Engineering",
      "Product Management",
      "Full-Stack Development",
    ],
  },
  {
  category: "Product & Project Management",
  skills: [
    "Kanban",
    "User Stories",
    "MVP Strategy",
    "Feature Prioritization",
    "Stakeholder Communication",
    "Roadmapping",
    "Jira",
    "A/B Testing"
  ],
},
{
  category: "Development Practices",
  skills: [
    "CI/CD",
    "Test-Driven Development (TDD)",
    "Git & GitHub Workflow",
    "Version Control",
    "Pair Programming"
  ],
}
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-semibold mb-2 text-purple-600 text-center">
          My Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {skillsData.map(({ category, skills }) => (
            <motion.div
              key={category}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-purple-700">
                {category}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold shadow-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
