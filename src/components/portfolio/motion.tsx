import { motion } from "framer-motion";
import { ReactNode } from "react";

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "ul";
  id?: string;
}

export const FadeUp = ({ children, className, delay = 0, as = "div", id }: FadeUpProps) => {
  const variant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };
  const Comp: any = (motion as any)[as];
  return (
    <Comp
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variant}
    >
      {children}
    </Comp>
  );
};
