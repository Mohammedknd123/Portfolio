import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import StarBackground from "../components/StarBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
