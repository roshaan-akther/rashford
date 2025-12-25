"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  LayoutDashboard,
  ShoppingBag,
  Key,
  Upload,
  BarChart3,
  Settings,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";

type NavItem = {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: NavItem[];
};

const NAV: NavItem[] = [
  { title: "Home", url: "/test/shell", icon: Home },
  { title: "Dashboard", url: "/test/shell/dashboard", icon: LayoutDashboard },
  {
    title: "Buyer",
    url: "#",
    icon: ShoppingBag,
    children: [
      { title: "API Keys", url: "/test/shell/buyer/api-keys", icon: Key },
      { title: "Purchases", url: "/test/shell/buyer/purchases", icon: ShoppingBag },
    ],
  },
  {
    title: "Publisher",
    url: "#",
    icon: Upload,
    children: [
      { title: "Publish", url: "/test/shell/publisher/publish", icon: Upload },
      { title: "Performance", url: "/test/shell/publisher/metrics", icon: BarChart3 },
    ],
  },
  { title: "Team", url: "/test/shell/team", icon: Users },
  { title: "Settings", url: "/test/shell/settings", icon: Settings },
];

export function ShellSidebar() {
  const pathname = usePathname();

  const renderItem = (item: NavItem) => {
    const isActive = pathname === item.url;
    const hasChildren = item.children && item.children.length > 0;

    if (hasChildren) {
      return (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild isActive={isActive} tooltip={item.title}>
            <Link href={item.url}>
              <item.icon className="size-4" />
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
          <SidebarMenuSub>
            {item.children!.map((child) => (
              <SidebarMenuSubItem key={child.title}>
                <SidebarMenuSubButton asChild isActive={pathname === child.url}>
                  <Link href={child.url}>
                    <child.icon className="size-4" />
                    <span>{child.title}</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </SidebarMenuItem>
      );
    }

    return (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton asChild isActive={isActive} tooltip={item.title}>
          <Link href={item.url}>
            <item.icon className="size-4" />
            <span>{item.title}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader className="px-3 py-2">
        <div className="flex items-center gap-2">
          <div className="text-lg font-semibold">Shell UI</div>
        </div>
        <div className="mt-2">
          <SidebarInput placeholder="Search" />
        </div>
      </SidebarHeader>

      <SidebarContent className="px-1.5 py-1 gap-1.5">
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{NAV.map(renderItem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarSeparator />

      <SidebarFooter className="px-2 pb-3">
        <div className="text-xs text-muted-foreground">
          Demo shell from <code>shellui</code>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
