import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Strengths from "./components/Strengths";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Strengths />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
