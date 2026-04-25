const roles = [
  {
    title: "OSINT Investigator",
    place: "Freelance · Rawalpindi",
    when: "Jan 2025 – Present",
    desc: "Ethical OSINT investigations for identity verification, fraud detection and digital risk assessment.",
  },
  {
    title: "Cybersecurity Intern",
    place: "Cetura · Islamabad",
    when: "Apr – May 2025",
    desc: "Network traffic monitoring, encryption, security analysis.",
  },
  {
    title: "Cybersecurity Bootcamp Trainee",
    place: "Innovista · Rawalpindi",
    when: "Jun – Aug 2025",
    desc: "ISO 27001, risk management, hands-on incident response labs.",
  },
];

const ExperienceSlide = () => {
  return (
    <div className="relative h-full w-full overflow-y-auto px-6 pb-12 pt-28 md:px-14 md:pt-28">
      <div className="label-mono mb-4">Experience</div>
      <h2 className="mb-10 font-display text-[clamp(3rem,7vw,6rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.03em] text-white md:mb-14">
        Where I&apos;ve Worked.
      </h2>

      <div className="flex flex-col">
        {roles.map((r) => (
          <div
            key={r.title}
            className="group grid grid-cols-1 gap-2 border-t px-2 py-7 transition-colors duration-300 hover:bg-frame-elevated md:grid-cols-[1fr_auto] md:gap-6"
            style={{ borderColor: "hsl(0 0% 100% / 0.08)" }}
          >
            <div>
              <div className="font-display text-[1.1rem] font-bold uppercase tracking-tight text-white md:text-[1.3rem]">
                {r.title}
              </div>
              <div className="mt-1 font-mono text-[10px] tracking-[0.18em] text-white/40 uppercase">
                {r.place}
              </div>
              <div className="mt-3 max-w-2xl font-mono text-[11.5px] leading-relaxed text-white/50">
                {r.desc}
              </div>
            </div>
            <div className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase md:text-right">
              {r.when}
            </div>
          </div>
        ))}
        <div className="border-t" style={{ borderColor: "hsl(0 0% 100% / 0.08)" }} />
      </div>
    </div>
  );
};

export default ExperienceSlide;
