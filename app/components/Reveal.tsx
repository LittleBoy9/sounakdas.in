"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
};

/**
 * A deliberately small entrance: 10px of lift and a fade, once, never
 * staggered. The layout's density is the point, so anything larger reads as
 * the page assembling itself rather than settling.
 *
 * Under `prefers-reduced-motion` the element renders in its final state with
 * no initial offset, so there is nothing to animate and nothing to wait for.
 */
const Reveal = ({ children, delay = 0 }: RevealProps) => {
  const reduced = useReducedMotion();

  if (reduced) return <>{children}</>;

  const hidden = { opacity: 0, y: 10 };
  const shown = { opacity: 1, y: 0 };
  const transition = { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const, delay };

  return (
    <motion.div
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -60px 0px" }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
