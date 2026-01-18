"use client";

import { AnimatePresence } from "framer-motion";
import { m } from "./LazyMotion";
import Image from "next/image";

interface CursorPreviewProps {
  imageUrl: string | null;
  position: { x: number; y: number };
}

export default function CursorPreview({ imageUrl, position }: CursorPreviewProps) {
  return (
    <AnimatePresence>
      {imageUrl && (
        <m.div
          className="fixed z-50 pointer-events-none hidden lg:block"
          style={{
            left: position.x + 20,
            top: position.y + 20,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <div className="relative w-64 h-40 overflow-hidden border-2 border-primary shadow-2xl tech-clip-br">
            <Image
              src={imageUrl}
              alt="Project preview"
              fill
              className="object-cover"
              sizes="256px"
            />
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
