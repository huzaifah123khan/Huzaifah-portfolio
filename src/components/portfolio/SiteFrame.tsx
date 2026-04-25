import { ReactNode } from "react";

interface SiteFrameProps {
  children: ReactNode;
}

const SiteFrame = ({ children }: SiteFrameProps) => {
  return (
    <div className="min-h-screen w-full bg-background p-2 sm:p-3 md:p-6 md:h-screen">
      <div
        className="relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-[10px] md:rounded-[14px] bg-frame min-h-[calc(100vh-1rem)] md:h-full"
        style={{ border: "1px solid hsl(0 0% 100% / 0.12)" }}
      >
        {children}
      </div>
    </div>
  );
};

export default SiteFrame;
