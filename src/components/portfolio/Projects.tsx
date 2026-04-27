import { FadeUp } from "./motion";
import BackToHome from "./BackToHome";
import curocart from "@/assets/project-curocart.jpg";
import password from "@/assets/project-password.jpg";
import network from "@/assets/project-network.jpg";

const projects = [
  {
    image: curocart,
    title: "CuRoCart",
    category: "Customer Assistant Robotic Cart · Raspberry Pi · Flutter · IoT · BLE",
    summary:
      "An autonomous robotic shopping trolley with BLE-based pairing, real-time IoT product tracking, and dual-sensor item detection — eliminating traditional checkout counters and automating the full retail workflow.",
    year: "2025–2026",
  },
  {
    image: password,
    title: "Password Strength Checker",
    category: "Python · Machine Learning",
    summary:
      "ML-based system to evaluate password strength and detect weak or predictable patterns using entropy analysis and dictionary lookups.",
    year: "2024",
  },
  {
    image: network,
    title: "Small Business Network Design",
    category: "Cisco Packet Tracer · Networking",
    summary:
      "Secure small-business network with routers, switches, and firewall policies — focused on segmentation, access control, and scalability.",
    year: "2024",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 md:px-0">
      <FadeUp>
        <div className="mb-12 md:mb-16 md:px-12 flex items-center justify-between">
          <span className="label-eyebrow">Selected Works</span>
          <BackToHome />
        </div>
      </FadeUp>

      <div className="space-y-24 md:space-y-32">
        {projects.map((p) => (
          <article key={p.title}>
            <FadeUp>
              <div className="group relative w-full aspect-[21/9] md:aspect-[24/9] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1920}
                  height={820}
                  className="w-full h-full object-cover grayscale-cinematic transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="grid grid-cols-12 gap-6 mt-6 md:mt-8 md:px-12">
                <div className="col-span-12 md:col-span-7">
                  <h3 className="text-xl md:text-2xl font-medium text-white/95 tracking-tight">
                    {p.title}
                  </h3>
                  <div className="mt-2 text-sm text-white/50">{p.category}</div>
                </div>
                <p className="col-span-12 md:col-span-4 text-sm text-white/60 leading-relaxed">
                  {p.summary}
                </p>
                <div className="col-span-12 md:col-span-1 text-sm text-white/40 md:text-right">
                  {p.year}
                </div>
              </div>
            </FadeUp>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
