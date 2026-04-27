import { FadeUp } from "./motion";
import BackToHome from "./BackToHome";

const categories = [
  {
    n: "01",
    label: "Cybersecurity",
    items: [
      "Ethical Hacking",
      "Vulnerability Scanning",
      "Packet Analysis",
      "Incident Response",
      "Encryption",
      "Access Control",
      "ISO 27001",
      "Risk Management",
      "System Hardening",
    ],
  },
  {
    n: "02",
    label: "OSINT & Investigations",
    items: [
      "Google Dorking",
      "SOCMINT",
      "Digital Footprinting",
      "Geolocation Analysis",
      "Social Engineering",
      "Cybercrime Investigation",
      "Digital Forensics",
    ],
  },
  {
    n: "03",
    label: "IoT & Embedded",
    items: [
      "Raspberry Pi",
      "BLE Integration",
      "Embedded Sensors",
      "Autonomous Navigation",
      "Flutter",
    ],
  },
  {
    n: "04",
    label: "Tools",
    items: [
      "Kali Linux",
      "Nmap",
      "Wireshark",
      "Maltego",
      "theHarvester",
      "Recon-ng",
      "Shodan",
      "Sherlock",
      "DeHashed",
      "HIBP",
      "IntelligenceX",
    ],
  },
  {
    n: "05",
    label: "Programming & Networking",
    items: ["Python", "Bash", "CCNA", "Cisco Packet Tracer", "Database Analysis"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 md:py-48 max-w-5xl mx-auto px-4">
      <FadeUp>
        <div className="mb-12 md:mb-16 flex items-center justify-between">
          <span className="label-eyebrow">Capabilities</span>
          <BackToHome />
        </div>
      </FadeUp>

      <ul className="border-t border-white/10">
        {categories.map((c) => (
          <FadeUp as="li" key={c.n}>
            <div className="grid grid-cols-12 gap-6 py-8 md:py-10 border-b border-white/10">
              <div className="col-span-12 md:col-span-3 flex items-baseline gap-3">
                <span className="font-mono text-xs text-white/30">{c.n}</span>
                <span className="text-sm tracking-widest uppercase text-white/95">
                  {c.label}
                </span>
              </div>
              <div className="col-span-12 md:col-span-9 flex flex-wrap gap-x-6 gap-y-2">
                {c.items.map((it) => (
                  <span key={it} className="text-base text-white/70 font-light">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
