import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import crmImage from "../assets/crm.jpg";

const allProjects = [
  {
    id: 1,
    title: "SkillSwap – Learning Match Platform",
    description:
      "Real-time matching for peer learning. Built with React, Firebase, and Tailwind. Shipped MVP in 2 days for AlgoArena Hackathon.",
    image: "https://plus.unsplash.com/premium_photo-1663089908126-830b913cfd9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGVhcm5pbmclMjB0ZWFtd29ya3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Web",
    link: "https://skill-swap-rosy-alpha.vercel.app/",
    github: "https://github.com/dlawiz83/SkillSwap",
  },
  {
    id: 2,
    title: "Recipe Vault – Personal Recipe Manager",
    description:
      "Organize recipes with modals, images, and search. Built with JavaScript, HTML, CSS & localStorage. No backend required.",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80",
    category: "Web",
    link: "https://flavor-vault-six.vercel.app/",
    github: "https://github.com/dlawiz83/FlavorVault",
  },
  {
    id: 3,
    title: "CollabText – Real-Time Editor",
    description:
      "Collaborative text editing app with chat. Built using JavaFX and sockets. Supports real-time sync, chat & save as .txt.",
    image: "https://plus.unsplash.com/premium_photo-1682141013747-5aed8665c154?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVycyUyMHdvcmtpbmclMjB0b2dldGhlcnxlbnwwfHwwfHx8MA%3D%3D",
    category: "Desktop",
    link: "#",
    github: "https://github.com/dlawiz83/Collaborative-text-editor",
  },
  {
    id: 4,
    title: "Java ChatBot – Console OOP Bot",
    description:
      "Command-line chatbot using OOP principles. Pattern matching, modular state, easy to extend.",
    image: "https://images.unsplash.com/photo-1595623654300-b27329804025?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVybWluYWwlMjBjb2Rpbmd8ZW58MHx8MHx8fDA%3D",
    category: "Desktop",
    link: "#",
    github: "https://github.com/dlawiz83/Simple-ChatBot",
  },
  {
    id: 5,
    title: "Secret Message App – PHP + MySQL",
    description:
      "Send one-time secret messages via unique links. Messages auto-delete after viewing. Built with PHP + MySQL.",
    image: "https://plus.unsplash.com/premium_photo-1674506652851-1f8426f4ac39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJpdmFjeSUyMGNvbmNlcHR8ZW58MHx8MHx8fDA%3D",
    category: "Web",
    link: "#",
    github: "https://github.com/dlawiz83/Secret-Message-Generator",
  },
  {
    id: 6,
    title: "Cinema Ticket Booking – Java Console App",
    description:
      "Console-based cinema booking system. OOP, statistics tracking, and seat view logic in Java.",
    image: "https://plus.unsplash.com/premium_photo-1664303124313-126bf7456982?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2luZW1hJTIwc2VhdHN8ZW58MHx8MHx8fDA%3D",
    category: "Desktop",
    link: "#",
    github: "https://github.com/dlawiz83/Cinema-Ticket-Booking-System",
  },
  {
  id: 7,
  title: "Connexta – CRM Web App (Backend in Progress)",
  description:
    "Built with Node.js, Express, MongoDB, and JWT authentication. Features full CRUD APIs for users, contacts, and interactions, a Next Actions dashboard, stage-based pipeline API, input validation, and security measures.",
  image: crmImage, 
  category: "Web",
  link: "#", 
  github: "https://github.com/dlawiz83/Connexta",
}

];

const categories = ["All", "Web", "Desktop"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-semibold mb-8 text-purple-600 text-center">
        Projects
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-12 space-x-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-5 py-2 mb-2 rounded-full font-semibold transition
              ${
                selectedCategory === cat
                  ? "bg-purple-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-purple-100"
              }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map(
            ({ id, title, description, image, link, github }) => (
              <motion.div
                key={id}
                variants={cardVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 25px rgba(111, 66, 193, 0.3)",
                }}
                className="relative rounded-xl overflow-hidden cursor-pointer shadow-lg bg-white"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-56 object-cover transition-transform duration-500 ease-in-out"
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-purple-900 bg-opacity-90 text-white p-6 flex flex-col justify-center opacity-0"
                >
                  <h3 className="text-2xl font-bold mb-2">{title}</h3>
                  <p className="mb-4 text-sm">{description}</p>
                  <div className="flex space-x-6">
                    {link !== "#" && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-semibold hover:text-purple-300"
                      >
                        Live Demo
                      </a>
                    )}
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-semibold hover:text-purple-300"
                    >
                      GitHub
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            )
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
