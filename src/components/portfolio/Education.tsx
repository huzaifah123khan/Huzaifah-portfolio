import { FadeUp } from "./motion";
import BackToHome from "./BackToHome";

const rows = [
  {
    period: "2022 — Jun 2026",
    school: "International Islamic University Islamabad (IIUI)",
    degree: "Bachelor of Science in Computer Engineering",
    location: "Islamabad, Pakistan",
  },
  {
    period: "Jun 2020 — Jun 2022",
    school: "Askaria College",
    degree: "Intermediate in Computer Science",
    location: "Rawalpindi, Pakistan",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32 max-w-5xl mx-auto px-4">
      <FadeUp>
        <div className="mb-12 md:mb-16 flex items-center justify-between">
          <span className="label-eyebrow">Education</span>
          <BackToHome />
        </div>
      </FadeUp>

      <ul className="border-t border-white/10">
        {rows.map((r) => (
          <FadeUp as="li" key={r.school}>
            <div className="grid grid-cols-12 gap-6 py-8 md:py-10 border-b border-white/10 items-baseline">
              <div className="col-span-12 md:col-span-3 text-xs uppercase tracking-[0.2em] text-white/40">
                {r.period}
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="text-base md:text-lg text-white/95 font-medium tracking-tight">
                  {r.school}
                </div>
                <div className="mt-1 text-sm text-white/60">{r.degree}</div>
              </div>
              <div className="col-span-12 md:col-span-3 text-sm text-white/50 md:text-right">
                {r.location}
              </div>
            </div>
          </FadeUp>
        ))}
      </ul>
    </section>
  );
};

export default Education;
