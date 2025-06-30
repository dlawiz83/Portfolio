import { useState, useEffect } from "react";

const navLinks = [
  { id: "hero", title: "Home" },
  { id: "about", title: "About" },
  { id: "work", title: "Projects" },
  { id: "skills", title: "Skills" },
  { id: "contact", title: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

    
      const sections = navLinks.map(({ id }) => document.getElementById(id));
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let sec of sections) {
        if (sec && scrollPos >= sec.offsetTop) {
          setActive(sec.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div
          className={`text-2xl font-bold cursor-pointer ${
            scrolled ? "text-purple-600" : "text-white"
          }`}
          onClick={() => scrollToSection("hero")}
        >
          Ayesha
        </div>
        <ul className="hidden md:flex space-x-8">
          {navLinks.map(({ id, title }) => (
            <li
              key={id}
              className={`cursor-pointer font-medium hover:text-purple-600 transition ${
                active === id
                  ? "text-purple-600 underline underline-offset-4 decoration-2"
                  : scrolled
                  ? "text-gray-700"
                  : "text-white"
              }`}
              onClick={() => scrollToSection(id)}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
