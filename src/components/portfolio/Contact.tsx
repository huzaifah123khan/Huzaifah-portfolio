import { FormEvent, useState } from "react";
import { FadeUp } from "./motion";
import BackToHome from "./BackToHome";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sent) return;
    const form = e.currentTarget;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      form.reset();
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="py-32 md:py-48 px-4 md:px-12 border-t border-white/10"
    >
      <FadeUp>
        <div className="mb-16 flex items-center justify-between">
          <span className="label-eyebrow">Contact</span>
          <BackToHome />
        </div>
      </FadeUp>

      <div className="flex flex-col md:flex-row gap-16 md:gap-24">
        {/* Left */}
        <FadeUp className="flex-1 max-w-md space-y-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white/95 leading-[0.95]">
            Initiate Contact.
          </h2>
          <p className="text-sm text-white/70 leading-relaxed">
            Available for cybersecurity engagements, OSINT investigations, and consulting. Leave a message — or reach out directly.
          </p>

          <dl className="space-y-3 text-xs uppercase tracking-[0.2em]">
            <div className="flex gap-4">
              <dt className="text-white/40 w-20 shrink-0">EMAIL</dt>
              <dd>
                <a
                  href="mailto:naeemhuzaifah0@gmail.com"
                  className="text-white/95 hover:text-white/70 transition-colors normal-case tracking-normal"
                >
                  naeemhuzaifah0@gmail.com
                </a>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt className="text-white/40 w-20 shrink-0">PHONE</dt>
              <dd>
                <a
                  href="tel:+923165078828"
                  className="text-white/95 hover:text-white/70 transition-colors normal-case tracking-normal"
                >
                  +92 316 5078828
                </a>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt className="text-white/40 w-20 shrink-0">LINKEDIN</dt>
              <dd>
                <a
                  href="https://linkedin.com/in/huzaifahb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/95 hover:text-white/70 transition-colors normal-case tracking-normal"
                >
                  linkedin.com/in/huzaifahb
                </a>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt className="text-white/40 w-20 shrink-0">BASED</dt>
              <dd className="text-white/95 normal-case tracking-normal">
                Rawalpindi, Punjab, Pakistan
              </dd>
            </div>
          </dl>
        </FadeUp>

        {/* Right form */}
        <FadeUp delay={0.1} className="flex-1 max-w-xl">
          <form onSubmit={onSubmit} className="flex flex-col gap-12">
            <input
              type="text"
              required
              placeholder="NAME"
              aria-label="Name"
              className="bg-transparent border-b border-white/20 focus:border-white pb-4 text-sm uppercase tracking-wider text-white/95 placeholder:text-white/30 outline-none transition-colors"
            />
            <input
              type="email"
              required
              placeholder="EMAIL"
              aria-label="Email"
              className="bg-transparent border-b border-white/20 focus:border-white pb-4 text-sm uppercase tracking-wider text-white/95 placeholder:text-white/30 outline-none transition-colors"
            />
            <textarea
              required
              rows={4}
              placeholder="MESSAGE"
              aria-label="Message"
              className="bg-transparent border-b border-white/20 focus:border-white pb-4 text-sm uppercase tracking-wider text-white/95 placeholder:text-white/30 outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={sent}
              className="self-start text-xs tracking-[0.2em] uppercase font-medium border border-white/20 px-8 py-4 text-white/95 hover:bg-white hover:text-black transition-colors"
            >
              {sent ? "Message Sent" : "Transmit"}
            </button>
          </form>
        </FadeUp>
      </div>
    </section>
  );
};

export default Contact;
