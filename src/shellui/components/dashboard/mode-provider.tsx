'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Mode = 'buyer' | 'publisher';

type ModeContextType = {
  currentMode: Mode;
  isBuyerMode: boolean;
  isPublisherMode: boolean;
  toggleMode: () => void;
  setMode: (mode: Mode) => void;
};

const ModeContext = createContext<ModeContextType | null>(null);

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return ctx;
}

export function ModeProvider({ children }: { children: ReactNode }) {
  const [currentMode, setCurrentMode] = useState<Mode>('buyer');

  useEffect(() => {
    const saved = localStorage.getItem('dashboard-mode') as Mode | null;
    if (saved === 'buyer' || saved === 'publisher') {
      setCurrentMode(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('dashboard-mode', currentMode);
  }, [currentMode]);

  const toggleMode = () => setCurrentMode((prev) => (prev === 'buyer' ? 'publisher' : 'buyer'));

  const value: ModeContextType = {
    currentMode,
    isBuyerMode: currentMode === 'buyer',
    isPublisherMode: currentMode === 'publisher',
    toggleMode,
    setMode: setCurrentMode,
  };

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
}
