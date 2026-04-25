interface TopNavProps {
  current: number;
  total: number;
  onJump: (i: number) => void;
  nextLabel?: string;
  onNext: () => void;
}

const TopNav = ({ current, total, onJump, nextLabel, onNext }: TopNavProps) => {
  return (
    <nav className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between px-6 py-5 md:px-10 md:py-7">
      <button onClick={() => onJump(0)} className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-white">
        HUZAIFAH BIN NAEEM
      </button>

      <div className="hidden items-center gap-8 md:flex">
        <button onClick={() => onJump(0)} className="nav-mono">Home</button>
        <button onClick={() => onJump(4)} className="nav-mono">About</button>
        <button onClick={() => onJump(1)} className="nav-mono">Projects</button>
      </div>

      <div className="flex items-center gap-6">
        {nextLabel && (
          <button onClick={onNext} className="nav-mono hidden md:inline-flex">
            {nextLabel} →
          </button>
        )}
        <button onClick={() => onJump(8)} className="nav-mono">Get in Touch</button>
        <span className="font-mono text-[10px] tracking-[0.2em] text-white/40">
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
    </nav>
  );
};

export default TopNav;
