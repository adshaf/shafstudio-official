"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { ReactNode } from "react";

// LazyMotion provider that only loads animation features when needed
// This reduces the initial bundle size significantly
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}

// Export the lightweight 'm' component instead of 'motion'
// 'm' only works within LazyMotion context but is much smaller
export { m };
