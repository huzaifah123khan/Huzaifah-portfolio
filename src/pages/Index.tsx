import { useEffect } from "react";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Education from "@/components/portfolio/Education";
import Certifications from "@/components/portfolio/Certifications";
import Contact from "@/components/portfolio/Contact";
import TopButton from "@/components/portfolio/TopButton";

const Index = () => {
  useEffect(() => {
    document.title = "Huzaifah Bin Naeem — Cybersecurity & OSINT";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name='${name}']`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };
    setMeta(
      "description",
      "Cybersecurity analyst and OSINT investigator based in Rawalpindi. Ethical hacking, digital forensics, network security and IoT — by Huzaifah Bin Naeem."
    );
  }, []);

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white p-4 md:p-8 font-sans">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
      <TopButton />
    </main>
  );
};

export default Index;
