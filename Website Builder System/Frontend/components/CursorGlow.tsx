'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
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
      className="fixed inset-0 pointer-events-none z-0 transition-none"
      style={{ background: 'radial-gradient(600px circle at -200px -200px, transparent 0%, transparent 100%)' }}
    />
  );
}
