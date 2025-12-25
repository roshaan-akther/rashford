"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ModeProvider } from "@shellui/components/dashboard/mode-provider";
import { ShellSidebar } from "./shell-sidebar";

export default function ShellLayout({ children }: { children: React.ReactNode }) {
  return (
    <ModeProvider>
      <SidebarProvider>
        <div className="flex min-h-screen w-full bg-background text-foreground">
          <ShellSidebar />
          <SidebarInset className="p-6 lg:p-10">
            <div className="mx-auto flex max-w-5xl flex-col gap-6">
              {children}
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </ModeProvider>
  );
}
