const certs = [
  { name: "Google Cybersecurity Professional", year: "2024" },
  { name: "CEH — Certified Ethical Hacker", year: "2024" },
  { name: "CCNA", year: "2024" },
  { name: "Advanced Diploma in Cybersecurity", year: "2024" },
  { name: "CCEP — Cybersecurity Educator Pro", year: "2024" },
  { name: "CPPS — Phishing Prevention Specialist", year: "2024" },
  { name: "SOC Analyst Level 1", year: "2024" },
  { name: "Networking Fundamentals", year: "2023" },
];

const CertificationsSlide = () => {
  return (
    <div className="relative h-full w-full overflow-y-auto px-6 pb-12 pt-28 md:px-14 md:pt-28">
      <div className="label-mono mb-4">Credentials</div>
      <h2 className="mb-10 font-display text-[clamp(3rem,7vw,6rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.03em] text-white md:mb-14">
        Certified.
      </h2>

      <div className="flex flex-col">
        {certs.map((c) => (
          <div
            key={c.name}
            className="group grid grid-cols-[1fr_auto] items-center gap-6 border-t px-2 py-5 transition-colors duration-300 hover:bg-frame-elevated md:py-6"
            style={{ borderColor: "hsl(0 0% 100% / 0.08)" }}
          >
            <div className="font-display text-[1rem] font-bold uppercase tracking-tight text-white md:text-[1.15rem]">
              {c.name}
            </div>
            <div className="font-mono text-[11px] tracking-[0.18em] text-white/35">{c.year}</div>
          </div>
        ))}
        <div className="border-t" style={{ borderColor: "hsl(0 0% 100% / 0.08)" }} />
      </div>
    </div>
  );
};

export default CertificationsSlide;
