import MetaRow from "../MetaRow";

interface ProjectSlideProps {
  title: string;
  year: string;
  client: string;
  type: string;
  description: string;
  tags: string[];
  bgHue?: number;
}

const ProjectSlide = ({ title, year, client, type, description, tags, bgHue = 240 }: ProjectSlideProps) => {
  return (
    <div className="relative h-full w-full">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(110% 70% at 30% 30%, hsl(${bgHue} 6% 16%) 0%, hsl(${bgHue} 4% 9%) 55%, hsl(${bgHue} 4% 6%) 100%)`,
        }}
      />
      {/* faint diagonal lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, white 0 1px, transparent 1px 14px)",
        }}
      />

      <div className="relative z-10 flex h-full min-h-full flex-col justify-end overflow-y-auto px-5 pb-20 pt-24 sm:px-6 sm:pb-24 sm:pt-28 md:px-14 md:pb-20 md:pt-32">
        <div className="mb-6 flex flex-wrap gap-2 sm:mb-8">
          {tags.map((t) => (
            <span key={t} className="tag-pill">{t}</span>
          ))}
        </div>

        <h1 className="mb-8 font-display text-[2.5rem] font-extrabold uppercase leading-[0.9] tracking-[-0.03em] text-white sm:text-[3.5rem] md:mb-12 md:text-[clamp(3rem,8vw,7rem)]">
          {title}
        </h1>

        <MetaRow
          year={year}
          items={[
            { label: "Client", value: client },
            { label: "Type", value: type },
            { label: "What We Did", value: description },
          ]}
        />
      </div>
    </div>
  );
};

export default ProjectSlide;
