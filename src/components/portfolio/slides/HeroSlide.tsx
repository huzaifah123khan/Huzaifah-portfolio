import MetaRow from "../MetaRow";

const HeroSlide = () => {
  return (
    <div className="relative h-full w-full">
      {/* subtle gradient backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 70% 20%, hsl(0 0% 18%) 0%, hsl(240 4% 8%) 60%, hsl(240 4% 6%) 100%)",
        }}
      />
      {/* grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.7'/></svg>\")",
        }}
      />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-24 pt-28 md:px-14 md:pb-20 md:pt-32">
        <div className="mb-12 max-w-5xl">
          <h1 className="font-display text-[clamp(3.5rem,9vw,8rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.03em] text-white">
            Cybersecurity
            <br />
            &amp; OSINT
          </h1>
        </div>

        <MetaRow
          year="2025"
          items={[
            { label: "Specialization", value: "Cybersecurity\n& OSINT" },
            { label: "Type", value: "Freelance\n& Student" },
            {
              label: "What I Do",
              value:
                "Ethical hacking,\nOSINT investigations,\nthreat detection &\nnetwork security.",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default HeroSlide;
