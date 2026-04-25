const ContactSlide = () => {
  return (
    <div className="relative flex h-full min-h-full w-full flex-col overflow-y-auto px-5 pb-8 pt-24 sm:px-6 sm:pt-28 md:px-14 md:pt-32">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <div className="label-mono mb-6">Get in Touch</div>
        <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.9] tracking-[-0.03em] text-white sm:text-6xl md:text-[clamp(3.5rem,9vw,7.5rem)]">
          Let&apos;s Work
          <br />
          Together.
        </h2>

        <a
          href="mailto:naeemhuzaifah0@gmail.com"
          className="group mt-10 inline-flex max-w-full items-center gap-3 rounded-full border border-white/20 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white hover:text-background sm:mt-12 sm:px-8 sm:py-5 sm:text-[13px]"
        >
          <span className="truncate">naeemhuzaifah0@gmail.com</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white"
          >
            LinkedIn ↗
          </a>
          <a
            href="tel:+923165078828"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white"
          >
            +92-316-5078828
          </a>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
            Rawalpindi, PK
          </span>
        </div>
      </div>

      <div className="border-t pt-5 mt-6 flex flex-col items-center justify-between gap-2 text-[10px] uppercase tracking-[0.2em] text-white/30 md:flex-row"
        style={{ borderColor: "hsl(0 0% 100% / 0.08)" }}
      >
        <span>© 2025 Huzaifah Bin Naeem</span>
        <span>Rawalpindi, Punjab, Pakistan</span>
      </div>
    </div>
  );
};

export default ContactSlide;
