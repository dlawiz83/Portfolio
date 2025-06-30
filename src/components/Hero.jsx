import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-6 text-center"
    >
      <motion.h1
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold mb-4 max-w-4xl"
      >
        Hi, I’m Ayesha Dawodi
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-xl mb-8 max-w-xl"
      >
        Software Engineer focused on building innovative digital solutions.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-full shadow-lg"
        >
          View My Work
        </motion.button>

        <motion.a
          href="https://drive.google.com/file/d/1SnKFtH7nKqvRvjPag1VaEuKuidaEyOJM/view?usp=sharing" 
          download
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
          aria-label="Download Resume"
        >
          Download Resume
        </motion.a>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-10">
        <motion.a
          href="https://github.com/dlawiz83"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#fbbf24" }} // yellow on hover
          className="text-white text-4xl transition-colors"
          aria-label="GitHub"
        >
          <svg
            className="w-10 h-10"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.39-1.333-1.758-1.333-1.758-1.09-.745.083-.73.083-.73 1.204.085 1.838 1.236 1.838 1.236 1.07 1.832 2.807 1.302 3.492.995.108-.774.418-1.302.76-1.602-2.665-.3-5.467-1.332-5.467-5.931 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 0 1 3.003-.404 11.5 11.5 0 0 1 3.003.404c2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.244 2.873.12 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.807 5.628-5.48 5.922.43.37.823 1.1.823 2.22v3.293c0 .32.217.694.825.576C20.565 21.795 24 17.297 24 12c0-6.63-5.373-12-12-12z" />
          </svg>
        </motion.a>

        <motion.a
          href="https://linkedin.com/in/ayesha-dawodi"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#0ea5e9" }} // blue on hover
          className="text-white text-4xl transition-colors"
          aria-label="LinkedIn"
        >
          <svg
            className="w-10 h-10"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.76 0 5-2.239 5-5v-14c0-2.761-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.763 0-.973.784-1.763 1.75-1.763s1.75.79 1.75 1.763c0 .973-.784 1.763-1.75 1.763zm13.5 11.268h-3v-5.604c0-1.337-.027-3.06-1.865-3.06-1.865 0-2.151 1.456-2.151 2.96v5.704h-3v-10h2.881v1.367h.041c.401-.757 1.379-1.556 2.837-1.556 3.034 0 3.595 1.997 3.595 4.59v5.599z" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
