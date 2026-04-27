import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { MoreVertical } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  { label: "About", id: "about" },
  { label: "Education", id: "education" },
  { label: "Certifications", id: "certifications" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ top: number; right: number } | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const updatePosition = () => {
    const el = triggerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({
      top: rect.bottom + 12,
      right: window.innerWidth - rect.right,
    });
  };

  const toggle = () => {
    if (!open) updatePosition();
    setOpen((v) => !v);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => updatePosition();
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onResize, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onResize);
    };
  }, [open]);

  const handleJump = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <>
      <button
        ref={triggerRef}
        onClick={toggle}
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-haspopup="menu"
        className="text-white/95 hover:text-white transition-colors"
      >
        <MoreVertical className="w-5 h-5" strokeWidth={1.5} />
      </button>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && pos && (
              <>
                <motion.div
                  key="backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setOpen(false)}
                  className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-sm"
                />
                <motion.div
                  key="menu"
                  role="menu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  style={{ top: pos.top, right: pos.right }}
                  className="fixed z-[90] w-52 rounded-xl border border-white/10 bg-[#111111] py-2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]"
                >
                  {items.map((it) => (
                    <button
                      key={it.id}
                      role="menuitem"
                      onClick={() => handleJump(it.id)}
                      className="block w-full px-4 py-2.5 text-left text-sm text-white hover:bg-white/[0.06] transition-colors"
                    >
                      {it.label}
                    </button>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};

export default DropdownMenu;
