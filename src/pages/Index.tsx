import { useCallback, useEffect, useState } from "react";
import CustomCursor from "@/components/portfolio/CustomCursor";
import SiteFrame from "@/components/portfolio/SiteFrame";
import TopNav from "@/components/portfolio/TopNav";
import PageIndicator from "@/components/portfolio/PageIndicator";
import HeroSlide from "@/components/portfolio/slides/HeroSlide";
import ProjectSlide from "@/components/portfolio/slides/ProjectSlide";
import AboutSlide from "@/components/portfolio/slides/AboutSlide";
import SkillsSlide from "@/components/portfolio/slides/SkillsSlide";
import CertificationsSlide from "@/components/portfolio/slides/CertificationsSlide";
import ExperienceSlide from "@/components/portfolio/slides/ExperienceSlide";
import ContactSlide from "@/components/portfolio/slides/ContactSlide";

const slides = [
  { key: "home", label: "Home", next: "Projects" },
  { key: "curocart", label: "CuRoCart", next: "Next Project" },
  { key: "password", label: "Password Checker", next: "Next Project" },
  { key: "smb", label: "SMB Network", next: "About" },
  { key: "about", label: "About", next: "Skills" },
  { key: "skills", label: "Skills", next: "Certifications" },
  { key: "certs", label: "Certifications", next: "Experience" },
  { key: "experience", label: "Experience", next: "Contact" },
  { key: "contact", label: "Contact" },
];

const Index = () => {
  const [page, setPage] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const total = slides.length;

  const go = useCallback(
    (i: number) => {
      const next = Math.max(0, Math.min(total - 1, i));
      if (next === page) return;
      setPage(next);
      setAnimKey((k) => k + 1);
    },
    [page, total]
  );

  useEffect(() => {
    // Set page title + meta for SEO
    document.title = "Huzaifah Bin Naeem — Cybersecurity & OSINT Portfolio";
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
      "Portfolio of Huzaifah Bin Naeem — cybersecurity analyst, OSINT investigator and Computer Engineering student based in Rawalpindi, PK."
    );
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        go(page + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(page - 1);
      } else if (e.key === "Home") {
        go(0);
      } else if (e.key === "End") {
        go(total - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [page, go, total]);

  // Wheel navigation (desktop only) — debounced
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 768px)").matches) return;
    let lock = false;
    const onWheel = (e: WheelEvent) => {
      // Allow scroll inside scrollable inner panes
      const t = e.target as HTMLElement;
      if (t.closest("[data-scroll-area], .overflow-y-auto")) {
        const el = t.closest(".overflow-y-auto") as HTMLElement | null;
        if (el && el.scrollHeight > el.clientHeight) {
          const atTop = el.scrollTop <= 0 && e.deltaY < 0;
          const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1 && e.deltaY > 0;
          if (!atTop && !atBottom) return;
        }
      }
      if (lock) return;
      if (Math.abs(e.deltaY) < 30) return;
      lock = true;
      setTimeout(() => (lock = false), 700);
      if (e.deltaY > 0) go(page + 1);
      else go(page - 1);
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [page, go]);

  const renderSlide = () => {
    switch (page) {
      case 0:
        return <HeroSlide />;
      case 1:
        return (
          <ProjectSlide
            title="CuRoCart"
            year="2025–2026"
            client="Final Year Project"
            type="IoT / Mobile App"
            description={"Autonomous robotic\nshopping cart with\nBLE pairing, Flutter\napp & smart billing."}
            tags={["Raspberry Pi", "Flutter", "BLE", "IoT"]}
            bgHue={210}
          />
        );
      case 2:
        return (
          <ProjectSlide
            title="Password Strength Checker"
            year="2024"
            client="Semester Project"
            type="Machine Learning"
            description={"ML-based system to\nevaluate password\nsecurity using\nentropy analysis."}
            tags={["Python", "Machine Learning", "NLP"]}
            bgHue={0}
          />
        );
      case 3:
        return (
          <ProjectSlide
            title="Secure SMB Network"
            year="2024"
            client="Academic Project"
            type="Network Design"
            description={"Designed a secure\nsmall business\nnetwork with Cisco,\nfirewall & segmentation."}
            tags={["Cisco", "Packet Tracer", "Networking"]}
            bgHue={150}
          />
        );
      case 4:
        return <AboutSlide />;
      case 5:
        return <SkillsSlide />;
      case 6:
        return <CertificationsSlide />;
      case 7:
        return <ExperienceSlide />;
      case 8:
        return <ContactSlide />;
      default:
        return null;
    }
  };

  return (
    <main>
      <CustomCursor />
      <SiteFrame>
        <TopNav
          current={page}
          total={total}
          onJump={go}
          nextLabel={slides[page].next}
          onNext={() => go(page + 1)}
        />

        <div key={animKey} className="absolute inset-0 animate-slide-up-fade">
          {renderSlide()}
        </div>

        <PageIndicator current={page} total={total} onJump={go} />

        {/* Side arrows */}
        <button
          onClick={() => go(page - 1)}
          aria-label="Previous slide"
          disabled={page === 0}
          className="absolute left-3 top-1/2 z-30 hidden -translate-y-1/2 rounded-full border border-white/10 bg-black/30 p-3 text-white/70 backdrop-blur-sm transition hover:border-white/30 hover:text-white disabled:opacity-30 md:block"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={() => go(page + 1)}
          aria-label="Next slide"
          disabled={page === total - 1}
          className="absolute right-3 top-1/2 z-30 hidden -translate-y-1/2 rounded-full border border-white/10 bg-black/30 p-3 text-white/70 backdrop-blur-sm transition hover:border-white/30 hover:text-white disabled:opacity-30 md:block"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </SiteFrame>
    </main>
  );
};

export default Index;
