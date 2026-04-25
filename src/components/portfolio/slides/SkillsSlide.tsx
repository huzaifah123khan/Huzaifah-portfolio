const services = [
  {
    n: "01",
    title: "Ethical Hacking & Penetration Testing",
    desc: "Vulnerability scanning, system hardening, ISO 27001",
  },
  {
    n: "02",
    title: "OSINT Investigations",
    desc: "Google Dorking, SOCMINT, digital footprinting, cybercrime case support",
  },
  {
    n: "03",
    title: "Network Security",
    desc: "Traffic monitoring, firewall configs, access control, incident response",
  },
  {
    n: "04",
    title: "Digital Forensics",
    desc: "Evidence collection, cybercrime investigation, threat analysis",
  },
  {
    n: "05",
    title: "IoT & Embedded Systems",
    desc: "Raspberry Pi, BLE integration, Flutter mobile development",
  },
];

const SkillsSlide = () => {
  return (
    <div className="relative grid h-full min-h-full w-full grid-cols-1 overflow-y-auto md:grid-cols-12 md:overflow-hidden">
      <div className="flex flex-col justify-end px-5 pb-8 pt-24 sm:px-6 sm:pb-10 sm:pt-28 md:col-span-5 md:px-14 md:pb-20 md:pt-32">
        <div className="label-mono mb-6">Services</div>
        <h2 className="font-display font-extrabold uppercase leading-[0.9] tracking-[-0.03em] text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          What
          <br />I Do.
        </h2>
      </div>

      <div className="flex flex-col justify-center px-5 pb-12 pt-6 sm:px-6 sm:pt-8 md:col-span-7 md:px-14 md:pt-32 md:pb-12 md:overflow-y-auto">
        <div className="flex flex-col">
          {services.map((s) => (
            <div key={s.n} className="group grid grid-cols-[40px_1fr] items-baseline gap-4 border-t px-2 py-5 transition-colors duration-300 hover:bg-frame-elevated md:py-6"
              style={{ borderColor: "hsl(0 0% 100% / 0.08)" }}
            >
              <div className="font-mono text-[11px] tracking-[0.2em] text-white/25">{s.n}</div>
              <div>
                <div className="font-display text-[1.05rem] font-bold uppercase tracking-tight text-white transition-colors group-hover:text-white md:text-[1.2rem]">
                  {s.title}
                </div>
                <div className="mt-1 font-mono text-[11px] leading-relaxed text-white/45">
                  {s.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSlide;
