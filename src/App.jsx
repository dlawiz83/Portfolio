import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Work from "./components/Work";
import WorkExperience from "./components/WorkExperience";
import Leadership from "./components/Leadership";
import Organizations from "./components/Organizations";
import Education from "./components/Education";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WorkExperience />
        <Work />
       
        <Education />
        <Leadership />
        <Skills />
        <Organizations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

