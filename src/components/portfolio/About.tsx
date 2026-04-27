import { FadeUp } from "./motion";
import BackToHome from "./BackToHome";

const About = () => {
  return (
    <section id="about" className="py-32 md:py-48 max-w-4xl mx-auto px-4">
      <FadeUp>
        <div className="mb-10 flex items-center justify-between">
          <span className="label-eyebrow">About</span>
          <BackToHome />
        </div>
      </FadeUp>

      <FadeUp delay={0.1}>
        <p className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.15] text-white/95 tracking-tight">
          I work where{" "}
          <em className="font-serif-italic text-white/70">
            ethical hacking meets open-source intelligence
          </em>{" "}
          — surfacing risk before it becomes incident. A final-year Computer Engineering student with a published IoT capstone, my practice spans{" "}
          <em className="font-serif-italic text-white/70">
            threat detection, vulnerability scanning, and structured cybercrime investigation
          </em>
          .
        </p>
      </FadeUp>
    </section>
  );
};

export default About;
