import './App.css';

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code, Wrench, Globe2, Database, Tool, Download } from "lucide-react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";



const funFacts = [
  "💻 I'm constantly exploring AI, cloud, and scalable systems future-proofing my skills.",
  "🧠 Learning about startup funding, product-market fit, and team building, because code is just the beginning.",
  "🌐 I'm obsessed with building products that scale and solve real-world problems.",
  "💥 I don't just want to land a job, I want to create opportunities for others too.",
  "📊 I believe tech-savviness + business sense = startup superpower.",
  
];

export default function Portfolio() {
  const [factIndex, setFactIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    let i = 0;
    const keyHandler = (e) => {
      if (e.key === code[i]) {
        i++;
        if (i === code.length) {
          document.body.classList.toggle("bg-rainbow");
          alert("🌈 Easter Egg Activated!");
          i = 0;
        }
      } else {
        i = 0;
      }
    };
    window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main); 
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden relative">
      <Particles
        className="absolute inset-0 z-0"
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: { value: "transparent" } },
          particles: {
            number: { value: 80 },
            size: { value: 2 },
            move: { enable: true, speed: 0.6 },
            color: { value: "#ffffff" },
            links: { enable: true, color: "#ffffff", distance: 120 },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
          },
        }}
      />

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative z-10">
        <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Ayesha Dawodi
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }} className="mt-4 text-xl text-gray-300 max-w-xl">
          Software Engineer • Builder of Cool Things • Dreaming Big with Code & Coffee ☕
        </motion.p>
        <div className="flex space-x-6 mt-8">
          <a href="mailto:dlawizdawodi83@gmail.com" className="hover:scale-110 transition-transform"><Mail /></a>
          <a href="https://www.linkedin.com/in/ayesha-dawodi" className="hover:scale-110 transition-transform"><Linkedin /></a>
          <a href="https://github.com/dlawiz83" className="hover:scale-110 transition-transform"><Github /></a>
        </div>
        <a href="https://drive.google.com/file/d/1Wqwxe3UYCMIxWeiLWetuyBMr2lTCh3QP/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 px-4 py-2 border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-500 hover:text-white transition">
          <Download className="w-4 h-4" /> Download Resume
        </a>

        {/* Fun Facts Carousel */}
        <div key={factIndex} className="mt-10 text-lg text-pink-400 animate-fade-in-out">
  {funFacts[factIndex]}
</div>

      </section>

      {/* Who Am I Section */}
      <section className="bg-gray-950 py-16 px-6 text-center relative z-10">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl font-bold text-white mb-6">
          Who am I?
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-400">
            I'm Ayesha, a CS student and tech enthusiast who’s obsessed with building cool stuff that actually matters. I’m passionate about creating smooth user experiences, elegant code, and high-impact tools.
            I love brainstorming ideas and turning them into real-world products. Currently diving deep into software engineering and startup culture, because I don’t just want to work at a company, I want to build one.
          </p>
          <p className="mt-4 text-lg text-pink-400">🔥 I dream of launching my own startup and shaking up the tech scene.</p>
        </div>
      </section>

      {/* Education Section */}
<section className="bg-gray-950 py-20 px-6 text-center relative z-10">
  <motion.h2
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="text-4xl font-bold mb-12 text-white"
  >
    Education
  </motion.h2>

  <div className="max-w-4xl mx-auto space-y-8">
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800/80 p-8 rounded-2xl shadow-xl transform transition duration-300"
    >
      <h3 className="text-xl font-semibold text-pink-400">University of the People</h3>
      <p className="text-lg text-gray-400 mb-2">Bachelor's in Computer Science</p>
      <p className="text-sm text-gray-300">GPA: 3.76</p>
      <p className="text-sm text-gray-400 mt-2">Expected Graduation: March 2026</p>
    </motion.div>
    </div>
</section>
      

     {/* Skills - Updated UI */}
    <section className="bg-gray-900 py-20 relative z-10">
  <div className="max-w-6xl mx-auto px-6">
    <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl font-bold mb-12 text-center text-white">Skills</motion.h2>
    <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">

      {/* Programming Languages */}
      <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800/60 p-6 rounded-2xl shadow-xl">
        <h3 className="text-xl font-semibold mb-4 text-pink-400 flex items-center"><Code className="mr-2" />Programming Languages</h3>
        <ul className="space-y-2 text-sm text-white/90">
          <li>Java</li>
          <li>JavaScript</li>
          <li>Kotlin</li>
          <li>PHP</li>
          <li>Python (basic)</li>
        </ul>
      </motion.div>

      {/* Frameworks & Libraries */}
      <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800/60 p-6 rounded-2xl shadow-xl">
        <h3 className="text-xl font-semibold mb-4 text-pink-400 flex items-center"><Wrench className="mr-2" />Frameworks & Libraries</h3>
        <ul className="space-y-2 text-sm text-white/90">
          <li>React</li>
          <li>JavaFX</li>
          <li>Tailwind CSS</li>
          <li>Socket Programming</li>
          <li>Agile</li>
        </ul>
      </motion.div>

      {/* Tools & Technologies */}
      <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800/60 p-6 rounded-2xl shadow-xl">
        <h3 className="text-xl font-semibold mb-4 text-pink-400 flex items-center"><Tool className="mr-2" />Tools & Technologies</h3>
        <ul className="space-y-2 text-sm text-white/90">
          <li>Git</li>
          <li>GitHub</li>
          <li>Firebase CLI</li>
          <li>Vercel</li>
          <li>Figma</li>
          <li>UNIX/Linux</li>
        </ul>
      </motion.div>

      {/* Web Technologies */}
      <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800/60 p-6 rounded-2xl shadow-xl">
        <h3 className="text-xl font-semibold mb-4 text-pink-400 flex items-center"><Globe className="mr-2" />Web Technologies</h3>
        <ul className="space-y-2 text-sm text-white/90">
          <li>HTML</li>
          <li>CSS</li>
          <li>REST APIs</li>
          <li>Responsive Design</li>
        </ul>
      </motion.div>

      {/* Databases & Backend */}
      <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800/60 p-6 rounded-2xl shadow-xl">
        <h3 className="text-xl font-semibold mb-4 text-pink-400 flex items-center"><Database className="mr-2" />Databases & Backend</h3>
        <ul className="space-y-2 text-sm text-white/90">
          <li>MySQL</li>
          <li>Firebase (Auth + Firestore)</li>
          <li>MongoDB</li>
        </ul>
      </motion.div>

    </div>
  </div>
</section>


     {/* Projects */}
<section className="max-w-5xl mx-auto px-6 py-20 relative z-20">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-3xl font-bold mb-10">Projects</motion.h2>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div whileHover={{ scale: 1.03 }} className="bg-[#1f1f1f] p-6 rounded-xl shadow-xl">
            <h3 className="text-xl font-semibold mb-2">🚀 CollabText – Real-Time Editor</h3>
            <p className="text-gray-400 mb-2">JavaFX + Java Sockets</p>
            <p className="text-gray-300 text-sm mb-2">A slick, collaborative text editor that allows multiple users to write together in real-time with built-in chat. Ideal for shared notes or live coding sessions.</p>
            <ul className="list-disc list-inside text-gray-300 text-sm mb-3">
              <li>Live multi-user editing with real-time sync</li>
              <li>In-app chat with username support</li>
              <li>Save session as .txt files</li>
              <li>Custom-built client-server protocol</li>
            </ul>
            <a href="https://github.com/dlawiz83/Collaborative-text-editor" className="underline text-pink-500">GitHub Repo</a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-[#1f1f1f] p-6 rounded-xl shadow-xl">
            <h3 className="text-xl font-semibold mb-2">📋 To-Do List App</h3>
            <p className="text-gray-400 mb-2">React + JS</p>
            <p className="text-gray-300 text-sm mb-3">A clean, responsive productivity app for organizing tasks. </p>
            <a href="https://github.com/dlawiz83/todo-list" className="underline text-pink-500">GitHub Repo</a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-[#1f1f1f] p-6 rounded-xl shadow-xl">
            <h3 className="text-xl font-semibold mb-2">🤖 Java ChatBot</h3>
            <p className="text-gray-400 mb-2">Console-based Java</p>
            <p className="text-gray-300 text-sm mb-3">A command-line chatbot built with object-oriented programming principles. Designed for fun conversations and future extensibility.</p>
            <ul className="list-disc list-inside text-gray-300 text-sm mb-3">
              <li>Handles varied user inputs</li>
              <li>Uses pattern matching and simple state management</li>
              <li>Modular and extendable OOP design</li>
            </ul>
            <a href="https://github.com/dlawiz83/Simple-ChatBot" className="underline text-pink-500">GitHub Repo</a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-[#1f1f1f] p-6 rounded-xl shadow-xl">
      <h3 className="text-xl font-semibold mb-2">🎬 Cinema Ticket Booking System</h3>
      <p className="text-gray-400 mb-2">Java (Console-based)</p>
      <p className="text-gray-300 text-sm mb-3">A simple, console-based application in Java that simulates a cinema ticket booking system. Allows users to view available seats, purchase tickets, and view ticket sales statistics.</p>
      <ul className="list-disc list-inside text-gray-300 text-sm mb-3">
        <li>View available seats</li>
        <li>Purchase tickets</li>
        <li>Track ticket sales statistics</li>
      </ul>
      <p className="text-gray-300 text-sm mb-3">Technologies Used: Java, Object-Oriented Programming (OOP)</p>
      <a href="https://github.com/dlawiz83/Cinema-Ticket-Booking-System" className="underline text-pink-500">GitHub Repo</a>
    </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-gray-900 py-20 relative z-20"> 
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-3xl font-bold mb-10">Experience</motion.h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Software Engineering Fellow – Headstarter</h3>
              <p className="text-gray-400 text-sm">Jul 2024 – Sep 2024</p>
              <p className="text-gray-300 text-sm mt-2">Built a Firebase-based inventory system that reduced discrepancies by 30% and improved management workflows.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Microsoft Student Ambassador</h3>
              <p className="text-gray-400 text-sm">Oct 2023 – Sep 2024</p>
              <p className="text-gray-300 text-sm mt-2">Led peer workshops, optimized a static site (20% faster load times), and gained hands-on experience with cloud tech and open-source communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations Section */}
<section className="bg-gray-900 py-20 relative z-10">
  <div className="max-w-6xl mx-auto px-6">
    <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl font-bold mb-12 text-center text-white">Organizations</motion.h2>
    <div className="space-y-8">
      {/* Rewriting the Code Membership */}
      <div>
        <h3 className="text-xl font-semibold">Rewriting the Code – Member</h3>
        <p className="text-gray-400 text-sm">Aug 2024 – Present</p>
        <p className="text-gray-300 text-sm mt-2">Participated in workshops and networking opportunities for women in tech, focused on bridging the gender gap in the tech industry.</p>
      </div>
      
      {/* Girls with Impact Organization */}
      <div>
        <h3 className="text-xl font-semibold">Girls with Impact – Member</h3>
        <p className="text-gray-400 text-sm">Jan 2025 – Mar 2025</p>
        <p className="text-gray-300 text-sm mt-2">Engaged in a Business and Leadership Academy focused on driving social impact, applying software solutions to solve real-world problems related to community development.</p>
      </div>
    </div>
  </div>
</section>


      {/* Contact */}
<section className="max-w-5xl mx-auto px-6 py-20 text-center relative z-20">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-3xl font-bold mb-6">Let’s Connect</motion.h2>
        <p className="text-lg text-gray-400 mb-4">Wanna collaborate or jam on startup ideas? Hit me up 👇</p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:dlawizdawodi83@gmail.com" className="hover:scale-110 transition-transform"><Mail /></a>
          <a href="https://www.linkedin.com/in/ayesha-dawodi" className="hover:scale-110 transition-transform"><Linkedin /></a>
          <a href="https://github.com/dlawiz83" className="hover:scale-110 transition-transform"><Github /></a>
        </div>
      </section>

      <footer className="relative z-20 text-center text-gray-600 text-sm pb-10"> 
        © {new Date().getFullYear()} Ayesha Dawodi. Designed with 💖
      </footer>
    </div>
  );
}
