import { ArrowLeft } from "lucide-react";

const scrollToHero = () => {
  const el = document.getElementById("hero");
  el?.scrollIntoView({ behavior: "smooth" });
};

const BackToHome = () => {
  return (
    <button
      onClick={scrollToHero}
      className="group inline-flex items-center gap-2 text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors"
      aria-label="Back to home"
    >
      <ArrowLeft
        size={14}
        strokeWidth={1.5}
        className="transition-transform duration-300 group-hover:-translate-x-1"
      />
      Back
    </button>
  );
};

export default BackToHome;
