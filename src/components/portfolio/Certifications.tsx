import { FadeUp } from "./motion";
import BackToHome from "./BackToHome";

const certs = [
  "Google Cybersecurity Professional Certificate",
  "Advanced Diploma in Cybersecurity",
  "CEH — Certified Ethical Hacker",
  "CCNA",
  "CCEP — Certified Cybersecurity Educator Professional",
  "CPPS — Certified Phishing Prevention Specialist",
  "SOC Analyst Level 1",
  "Networking Fundamentals",
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 md:py-32 max-w-5xl mx-auto px-4">
      <FadeUp>
        <div className="mb-12 md:mb-16 flex items-center justify-between">
          <span className="label-eyebrow">Certifications</span>
          <BackToHome />
        </div>
      </FadeUp>

      <ul className="grid grid-cols-1 md:grid-cols-2 border-t border-white/10">
        {certs.map((c, i) => (
          <FadeUp as="li" key={c}>
            <div className="flex items-baseline gap-4 py-6 md:py-7 px-1 border-b border-white/10 md:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:border-r-white/10 md:pr-8 md:[&:nth-child(even)]:pl-8">
              <span className="font-mono text-xs text-white/30 w-8 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-base text-white/80 font-light">{c}</span>
            </div>
          </FadeUp>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
