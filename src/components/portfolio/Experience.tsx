import { FadeUp } from "./motion";
import BackToHome from "./BackToHome";

const roles = [
  {
    period: "Jan 2025 — Present",
    title: "OSINT Investigator",
    org: "Freelance",
    location: "Rawalpindi, Pakistan",
    bullets: [
      "Conducted ethical open-source intelligence investigations for identity verification, fraud detection, and digital risk assessment.",
      "Collected, analyzed, and correlated publicly available data using Google Dorking, SOCMINT, and online footprint analysis to produce actionable intelligence reports.",
      "Executed background investigations and cybercrime case support using structured OSINT methodologies.",
      "Mapped digital footprints and traced online threats across social media platforms and public databases.",
    ],
  },
  {
    period: "Apr 2025 — May 2025",
    title: "Cybersecurity Intern",
    org: "Cetura",
    location: "Islamabad, Pakistan",
    bullets: [
      "Monitored and analyzed network traffic to identify potential security threats and anomalies in real time.",
      "Practiced encryption techniques and conducted security analysis to harden organizational systems.",
      "Assisted in developing and implementing security policies and incident response procedures.",
    ],
  },
  {
    period: "Jun 2025 — Aug 2025",
    title: "Cybersecurity Bootcamp Trainee",
    org: "Innovista",
    location: "Rawalpindi, Pakistan",
    bullets: [
      "Studied core cybersecurity concepts including ISO 27001 standards and risk management frameworks.",
      "Performed hands-on labs in network security, access control, and incident response simulations.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 max-w-5xl mx-auto px-4">
      <FadeUp>
        <div className="mb-12 md:mb-16 flex items-center justify-between">
          <span className="label-eyebrow">Experience</span>
          <BackToHome />
        </div>
      </FadeUp>

      <ul className="border-t border-white/10">
        {roles.map((r) => (
          <FadeUp as="li" key={r.title}>
            <div className="grid grid-cols-12 gap-6 md:gap-10 py-12 border-b border-white/10">
              <div className="col-span-12 md:col-span-4">
                <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">
                  {r.period}
                </div>
                <h3 className="text-2xl md:text-3xl font-medium text-white/95 tracking-tight">
                  {r.title}
                </h3>
                <div className="mt-2 text-sm text-white/60">
                  {r.org} · {r.location}
                </div>
              </div>
              <ol className="col-span-12 md:col-span-8 space-y-4">
                {r.bullets.map((b, i) => (
                  <li key={i} className="grid grid-cols-[2.25rem_1fr] gap-2 items-baseline">
                    <span className="font-mono text-xs text-white/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-white/70 leading-relaxed">{b}</span>
                  </li>
                ))}
              </ol>
            </div>
          </FadeUp>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
