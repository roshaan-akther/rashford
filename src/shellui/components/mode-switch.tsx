"use client";

import { Switch } from "@/components/ui/switch";
import { useMode } from "@/shellui/components/dashboard/mode-provider";

export function ModeSwitch() {
  const { currentMode, toggleMode } = useMode();
  const isBuyer = currentMode === 'buyer';

  return (
    <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
      <span className="hidden sm:inline">{isBuyer ? 'Buyer' : 'Publisher'}</span>
      <Switch checked={isBuyer} onCheckedChange={toggleMode} />
      <span className="hidden sm:inline">{isBuyer ? 'On' : 'Off'}</span>
    </div>
  );
}
