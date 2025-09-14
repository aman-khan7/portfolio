import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-body text-gray-800 bg-white">
      <Navbar />
      <main className="">
        {" "}
        {/* leave space for fixed navbar */}
        <Hero />
        <Skills />
        <ProjectsSection />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
