'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwitcherStore } from '@/lib/store';
import ParticleBackground from './ParticleBackground';
import LiveHub from './LiveHub';
import CrossroadsPreview from './CrossroadsPreview';
import LiveHubPreview from './LiveHubPreview';
import DealsPreview from './deals/DealsPreview';

// ─── layout constants ─────────────────────────────────────────────────────────
const ITEM  = 90;   // box size (px)
const GAP   = 12;   // gap between boxes
const PAD_X = 18;   // pill horizontal padding
const PAD_Y = 18;   // pill vertical padding
const PILL_W = 4 * ITEM + 3 * GAP + 2 * PAD_X;   // 432
const PILL_H = ITEM + 2 * PAD_Y;                   // 126

// x-offset of the highlight for item i (highlight is 12px larger on each side)
const HIGHLIGHT_INSET = 6;
function hlX(i: number) {
  return PAD_X + i * (ITEM + GAP) - HIGHLIGHT_INSET;
}

// ─── items ────────────────────────────────────────────────────────────────────
const HUB_BOX        = { bg: '#111114', label: 'Live Hub'    };
const CROSSROADS_BOX = { bg: '#F4ECD8', label: 'Crossroads'  };
const DEALS_BOX      = { bg: '#1A120A', label: 'Deals'       };
const PLACEHOLDER_B  = { bg: '#1E0D38', label: 'Coming Soon' };

// Position 0 is always the view the user was *just on* (current active).
// Position 1 is the other main view (the switch destination).
function buildDisplayBoxes(hubIsActive: boolean) {
  return hubIsActive
    ? [HUB_BOX, CROSSROADS_BOX, DEALS_BOX, PLACEHOLDER_B]
    : [CROSSROADS_BOX, HUB_BOX, DEALS_BOX, PLACEHOLDER_B];
}

// ─── spring configs ───────────────────────────────────────────────────────────
const SPRING_PILL      = { type: 'spring' as const, stiffness: 420, damping: 32, mass: 0.7 };
const SPRING_HIGHLIGHT = { type: 'spring' as const, stiffness: 400, damping: 30, mass: 0.7 };
const FADE             = { duration: 0.22, ease: 'easeOut' } as const;

export default function NexusSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const { isHubActive, isSwitcherOpen, phase, initialCursor, resolveTransition, snapToHub, snapToMarketing } =
    useSwitcherStore();

  // which box is highlighted inside the open switcher
  const [cursor, setCursor] = useState(1);

  // Freeze the box order at the moment the switcher opens so the layout
  // doesn't jump while closing. Position 0 = "was just on", position 1 = destination.
  const [displayBoxes, setDisplayBoxes] = useState(() => buildDisplayBoxes(isHubActive));

  // Route-commit guard: hold the hub overlay until the destination pathname lands
  const [pendingNav, setPendingNav] = useState<string | null>(null);
  useEffect(() => {
    if (pendingNav && pathname === pendingNav) {
      snapToMarketing();
      setPendingNav(null);
    }
  }, [pathname, pendingNav]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (isSwitcherOpen) {
      setDisplayBoxes(buildDisplayBoxes(isHubActive));
      setCursor(initialCursor);
    }
  }, [isSwitcherOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-commit after 700ms — same timing as the 1→2 (Crossroads→Hub) transition
  const autoCommitRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (!isSwitcherOpen) return;
    if (autoCommitRef.current) clearTimeout(autoCommitRef.current);
    autoCommitRef.current = setTimeout(() => commit(cursor), 700);
    return () => { if (autoCommitRef.current) clearTimeout(autoCommitRef.current); };
  }, [isSwitcherOpen, cursor]); // eslint-disable-line react-hooks/exhaustive-deps

  const isTransitioning = phase === 'switching';
  const hubVisible = isHubActive || isSwitcherOpen;

  function commit(i: number) {
    setCursor(i);
    const label = displayBoxes[i].label;
    if (label === 'Live Hub') {
      snapToHub();
    } else if (label === 'Deals') {
      // Push route and hold hub overlay until Next.js confirms the pathname
      // has changed — prevents Crossroads flashing through during hub fade-out.
      router.push('/deals');
      setPendingNav('/deals');
    } else if (label === 'Crossroads' && pathname === '/deals') {
      router.push('/');
      setPendingNav('/');
    } else {
      snapToMarketing();
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] overflow-hidden"
      style={{ pointerEvents: hubVisible && !isTransitioning ? 'auto' : 'none' }}
    >
      {/* ── Hub content — AnimatePresence lets it fade out before unmounting ── */}
      <AnimatePresence initial={false}>
        {hubVisible && (
          <motion.div
            key="hub"
            className="absolute inset-0"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {/* particle bg */}
            <div className="absolute inset-0 z-0" aria-hidden>
              <ParticleBackground />
            </div>

            {/* live hub view — fades in/out as hub becomes active/inactive */}
            <motion.div
              className="absolute inset-0 z-10"
              animate={{ opacity: isHubActive && !isSwitcherOpen ? 1 : 0 }}
              transition={FADE}
              onAnimationComplete={resolveTransition}
              style={{ pointerEvents: isHubActive && !isSwitcherOpen ? 'auto' : 'none' }}
            >
              <LiveHub />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Switcher overlay ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isSwitcherOpen && (
          <motion.div
            key="switcher"
            className="absolute inset-0 z-20 flex flex-col items-center justify-center"
            initial={false}
          >
            {/* backdrop blur + dim */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={FADE}
              style={{
                backdropFilter:       'blur(28px) brightness(0.45)',
                WebkitBackdropFilter: 'blur(28px) brightness(0.45)',
                backgroundColor:      'rgba(0,0,0,0.38)',
              }}
            />

            {/* pill */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.84, y: 16 }}
              animate={{ opacity: 1, scale: 1,    y: 0  }}
              exit={{    opacity: 0, scale: 0.90,  y: 8  }}
              transition={SPRING_PILL}
              style={{
                width:                PILL_W,
                height:               PILL_H,
                background:           'rgba(26, 26, 28, 0.80)',
                backdropFilter:       'blur(48px) saturate(200%)',
                WebkitBackdropFilter: 'blur(48px) saturate(200%)',
                borderRadius:         24,
                border:               '1px solid rgba(255,255,255,0.10)',
                boxShadow:            '0 40px 100px rgba(0,0,0,0.70), inset 0 1px 0 rgba(255,255,255,0.07)',
              }}
            >
              {/* sliding selection highlight */}
              <motion.div
                style={{
                  position:   'absolute',
                  top:        PAD_Y - HIGHLIGHT_INSET,
                  width:      ITEM + HIGHLIGHT_INSET * 2,
                  height:     ITEM + HIGHLIGHT_INSET * 2,
                  borderRadius: 18,
                  background: 'rgba(255,255,255,0.11)',
                  border:     '1px solid rgba(255,255,255,0.22)',
                  boxShadow:  'inset 0 1px 0 rgba(255,255,255,0.14)',
                }}
                animate={{ x: hlX(cursor) }}
                transition={SPRING_HIGHLIGHT}
              />

              {/* boxes */}
              <div
                style={{
                  position: 'absolute',
                  top:      PAD_Y,
                  left:     PAD_X,
                  display:  'flex',
                  gap:      GAP,
                }}
              >
                {displayBoxes.map((box, i) => (
                  <motion.div
                    key={box.label + i}
                    onHoverStart={() => setCursor(i)}
                    onClick={() => commit(i)}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{   scale: 0.94 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 28 }}
                    style={{
                      width:        ITEM,
                      height:       ITEM,
                      borderRadius: 14,
                      background:   box.bg,
                      border:       '1px solid rgba(255,255,255,0.07)',
                      cursor:       'pointer',
                      flexShrink:   0,
                      position:     'relative',
                      overflow:     'hidden',
                    }}
                  >
                    {box.label === 'Crossroads' && (
                      <div
                        style={{
                          position:        'absolute',
                          top:             0,
                          left:            0,
                          width:           1440,
                          height:          900,
                          transform:       `scale(${ITEM / 1440})`,
                          transformOrigin: 'top left',
                          pointerEvents:   'none',
                        }}
                      >
                        <CrossroadsPreview />
                      </div>
                    )}
                    {box.label === 'Live Hub' && (
                      <div
                        style={{
                          position:        'absolute',
                          top:             0,
                          left:            0,
                          width:           900,
                          height:          900,
                          transform:       `scale(${ITEM / 900})`,
                          transformOrigin: 'top left',
                          pointerEvents:   'none',
                        }}
                      >
                        <LiveHubPreview />
                      </div>
                    )}
                    {box.label === 'Deals' && (
                      <div
                        style={{
                          position:        'absolute',
                          top:             0,
                          left:            0,
                          width:           900,
                          height:          900,
                          transform:       `scale(${ITEM / 900})`,
                          transformOrigin: 'top left',
                          pointerEvents:   'none',
                        }}
                      >
                        <DealsPreview />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* label — swaps with cursor */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{    opacity: 0 }}
              transition={{ delay: 0.12, duration: 0.18 }}
              style={{ marginTop: 16, height: 20 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={cursor}
                  initial={{ opacity: 0, y: 5  }}
                  animate={{ opacity: 1, y: 0  }}
                  exit={{    opacity: 0, y: -5 }}
                  transition={{ duration: 0.14 }}
                  style={{
                    fontSize:      13,
                    fontWeight:    500,
                    color:         'rgba(255,255,255,0.72)',
                    letterSpacing: '0.05em',
                    display:       'block',
                    textAlign:     'center',
                  }}
                >
                  {displayBoxes[cursor].label}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
