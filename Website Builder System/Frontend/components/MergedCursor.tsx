'use client';

import { useEffect, useRef } from 'react';

/**
 * MergedCursor
 *
 * Native cursor is preserved. Only the ambient radial glow follows the pointer —
 * the previous custom dot + ring layers were removed because they hid/replaced
 * the OS cursor and could drop out during fast moves or drags.
 */
export default function MergedCursor() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(
          600px circle at ${e.pageX}px ${e.pageY}px,
          rgba(47, 79, 79, 0.18) 0%,
          rgba(20, 30, 50, 0.10) 40%,
          transparent 70%
        )`;
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed inset-0 pointer-events-none z-[9990]"
      style={{
        background: 'radial-gradient(600px circle at -300px -300px, transparent 0%, transparent 100%)',
        mixBlendMode: 'normal',
      }}
    />
  );
}
