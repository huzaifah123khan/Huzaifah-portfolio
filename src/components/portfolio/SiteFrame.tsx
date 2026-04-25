import { ReactNode } from "react";

interface SiteFrameProps {
  children: ReactNode;
}

const SiteFrame = ({ children }: SiteFrameProps) => {
  return (
    <div className="h-screen w-screen bg-background p-3 md:p-6">
      <div
        className="relative mx-auto h-full w-full max-w-[1400px] overflow-hidden rounded-[14px] bg-frame"
        style={{ border: "1px solid hsl(0 0% 100% / 0.12)" }}
      >
        {children}
      </div>
    </div>
  );
};

export default SiteFrame;
