'use client';

import { motion } from 'framer-motion';
import { useSwitcherStore } from '@/lib/store';
import { audio } from '@/lib/audio';

export default function NexusLogo() {
  const { isHubActive, isSwitcherOpen, phase, openSwitcher } = useSwitcherStore();

  const visible = isHubActive || isSwitcherOpen;
  if (!visible) return null;

  const handleClick = () => {
    if (phase === 'switching') return;
    audio.playChirp();
    // Open switcher with Deals pre-selected (index 2 in Hub view: [Hub, Crossroads, Deals, Placeholder])
    openSwitcher(2);
  };

  return (
    <motion.div
      className="fixed top-0 left-0 z-[200] select-none cursor-pointer group"
      style={{ paddingLeft: 75, paddingTop: 28 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      onClick={handleClick}
    >
      {/* Logo row with pulsing dot + halo */}
      <div className="flex items-center gap-3 relative">
        {/* Sonar ring — expands outward from the logo on loop */}
        <motion.div
          aria-hidden
          style={{
            position:      'absolute',
            inset:         '-12px -22px',
            borderRadius:  14,
            border:        '1.5px solid #4DAF8D',
            boxShadow:     '0 0 8px 1px rgba(77,175,141,0.45)',
            pointerEvents: 'none',
          }}
          animate={{ scale: [1, 1.9], opacity: [0.8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut', repeatDelay: 2.0 }}
        />

        {/* Pulsing live dot */}
        <span className="relative flex h-[7px] w-[7px] shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
            style={{ background: '#4DAF8D' }} />
          <span className="relative inline-flex h-[7px] w-[7px] rounded-full"
            style={{ background: '#4DAF8D' }} />
        </span>

        <motion.h1
          className="text-[22px] font-bold leading-none tracking-[0.18em]"
          style={{ color: '#ECE2CE' }}
          whileHover={{ opacity: 0.6 }}
          transition={{ duration: 0.15 }}
        >
          CROSSROADS
        </motion.h1>
      </div>
    </motion.div>
  );
}
