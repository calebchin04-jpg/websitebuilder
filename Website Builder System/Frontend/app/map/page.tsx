'use client';

import { useEffect } from 'react';
import { useSwitcherStore } from '@/lib/store';
import MergedCursor from '@/components/MergedCursor';

export default function MapPage() {
  const { snapToHub } = useSwitcherStore();
  useEffect(() => { snapToHub(); }, [snapToHub]);
  return <MergedCursor />;
}
