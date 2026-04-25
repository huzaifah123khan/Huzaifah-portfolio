const AboutSlide = () => {
  return (
    <div className="relative grid h-full min-h-full w-full grid-cols-1 overflow-y-auto md:grid-cols-2 md:overflow-hidden">
      {/* Left */}
      <div className="relative flex flex-col justify-end overflow-hidden px-5 pb-10 pt-24 sm:px-6 sm:pb-12 sm:pt-28 md:px-14 md:pb-20 md:pt-32"
        style={{ background: "radial-gradient(100% 80% at 30% 70%, hsl(0 0% 14%) 0%, hsl(240 4% 7%) 70%)" }}
      >
        <div className="label-mono mb-6">About</div>
        <h2 className="font-display font-extrabold uppercase leading-[0.9] tracking-[-0.03em] text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Threat
          <br />
          Hunter.
        </h2>
      </div>

      {/* Right */}
      <div className="flex flex-col justify-between border-t md:border-l md:border-t-0 px-5 pb-10 pt-10 sm:px-6 sm:pt-12 md:px-14 md:pt-32 md:overflow-y-auto"
        style={{ borderColor: "hsl(0 0% 100% / 0.08)" }}
      >
        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
          <div>
            <div className="label-mono mb-3">Based In</div>
            <div className="value-mono normal-case tracking-normal">Rawalpindi, PK</div>
          </div>
          <div>
            <div className="label-mono mb-3">Education</div>
            <div className="value-mono normal-case tracking-normal">
              BS Computer Engineering<br />IIUI, 2022–2026
            </div>
          </div>
          <div>
            <div className="label-mono mb-3">Experience</div>
            <div className="value-mono normal-case tracking-normal">
              2+ Years<br />OSINT &amp; Cybersecurity
            </div>
          </div>
          <div>
            <div className="label-mono mb-3">Contact</div>
            <div className="value-mono normal-case tracking-normal text-[10px] leading-relaxed">
              naeemhuzaifah0@gmail.com<br />+92-316-5078828
            </div>
          </div>
        </div>

        <p className="mt-12 max-w-xl font-mono text-[13px] leading-relaxed text-white/55">
          Cybersecurity analyst and OSINT investigator with hands-on experience in ethical hacking,
          digital forensics, network security, and open-source intelligence. Final year Computer
          Engineering student at IIUI with a published IoT capstone project.
        </p>
      </div>
    </div>
  );
};

export default AboutSlide;
