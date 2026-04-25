interface PageIndicatorProps {
  current: number;
  total: number;
  onJump: (i: number) => void;
}

const PageIndicator = ({ current, total, onJump }: PageIndicatorProps) => {
  return (
    <div className="absolute bottom-3 left-1/2 z-30 -translate-x-1/2 sm:bottom-4">
      <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur-sm sm:gap-2 sm:px-4 sm:py-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onJump(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-5 bg-white sm:w-6" : "w-1.5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PageIndicator;
