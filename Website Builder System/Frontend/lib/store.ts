import { create } from 'zustand';

export type SwitcherPhase = 'idle' | 'switching' | 'resolved';

interface SwitcherState {
  isHubActive: boolean;    // true = LiveHub is the current view
  isSwitcherOpen: boolean; // true = cards are spread for alt-tab
  phase: SwitcherPhase;    // animation lock
  initialCursor: number;   // which tile to pre-select when switcher opens

  openSwitcher: (cursor?: number) => void;
  snapToHub: () => void;
  snapToMarketing: () => void;
  resolveTransition: () => void;
}

export const useSwitcherStore = create<SwitcherState>((set) => ({
  isHubActive: false,
  isSwitcherOpen: false,
  phase: 'idle',
  initialCursor: 1,

  openSwitcher:     (cursor = 1) => set({ isSwitcherOpen: true, phase: 'switching', initialCursor: cursor }),
  snapToHub:        () => set({ isHubActive: true,  isSwitcherOpen: false, phase: 'switching' }),
  snapToMarketing:  () => set({ isHubActive: false, isSwitcherOpen: false, phase: 'switching' }),
  resolveTransition: () => set({ phase: 'resolved' }),
}));
