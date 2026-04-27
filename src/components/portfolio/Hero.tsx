import heroImg from "@/assets/hero-server.jpg";
import DropdownMenu from "./DropdownMenu";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative border border-white/15 rounded-[12px] overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col"
    >
      {/* Background image */}
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-80 grayscale-cinematic"
      />
      <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between p-6 md:p-10 mix-blend-difference">
        <span className="text-xl font-bold tracking-[0.2em] uppercase text-white">
          HUZAIFAH
        </span>
        <DropdownMenu />
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom content */}
      <div className="relative z-10 grid grid-cols-12 gap-6 items-end p-6 md:p-10 mix-blend-difference">
        <div className="col-span-12 md:col-span-7">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.9] text-white">
            SECURE &amp;
            <br />
            INVESTIGATE
          </h1>
          <div className="mt-6 text-sm tracking-widest text-white/60">2026</div>
        </div>

        <div className="col-span-12 md:col-span-5 flex flex-col gap-8 md:items-end md:text-right">
          <dl className="text-xs uppercase tracking-[0.2em] space-y-2">
            <div className="flex md:justify-end gap-4">
              <dt className="text-white/40 w-16">NAME</dt>
              <dd className="text-white/95">Huzaifah Bin Naeem</dd>
            </div>
            <div className="flex md:justify-end gap-4">
              <dt className="text-white/40 w-16">ROLE</dt>
              <dd className="text-white/95">Cybersecurity &amp; OSINT</dd>
            </div>
            <div className="flex md:justify-end gap-4">
              <dt className="text-white/40 w-16">BASED</dt>
              <dd className="text-white/95">Rawalpindi, PK</dd>
            </div>
          </dl>

          <p className="max-w-sm text-sm text-white/80 leading-relaxed md:text-right">
            Cybersecurity analyst and OSINT investigator with hands-on experience in ethical hacking, digital forensics, network security, and open-source intelligence.
          </p>

          <button
            onClick={() => scrollTo("projects")}
            className="text-xs tracking-[0.2em] uppercase text-white/95 hover:text-white border-b border-white/40 hover:border-white pb-1 transition-colors w-fit md:self-end"
          >
            Selected Work →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
