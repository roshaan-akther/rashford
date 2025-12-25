"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ModeSwitch } from "@shellui/components/mode-switch";
import { HelloLottie } from "@shellui/components/hello-lottie";
import { useMode } from "@shellui/components/dashboard/mode-provider";
import { ArrowRight, LineChart, Rocket, Shield, Sparkles } from "lucide-react";

export default function ShellDemoPage() {
  const { currentMode } = useMode();

  const stats = [
    { label: "Active interfaces", value: "24", delta: "+12%" },
    { label: "Requests today", value: "182k", delta: "+4.2%" },
    { label: "Error rate", value: "0.21%", delta: "-0.05%" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <HelloLottie size={28} />
          <div>
            <p className="text-sm text-muted-foreground">Shell UI Demo</p>
            <h1 className="text-2xl font-semibold leading-tight">Dashboard shell scaffold</h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ModeSwitch />
          <Badge variant="secondary" className="text-xs">
            Mode: {currentMode}
          </Badge>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Sparkles className="h-5 w-5 text-primary" />
            Quick actions
          </CardTitle>
          <CardDescription>
            Use this shell as a starting point for dashboards, buyers/publishers, or admin surfaces.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Rocket, label: "Start new flow", href: "#" },
            { icon: Shield, label: "View security posture", href: "#" },
            { icon: LineChart, label: "Open analytics", href: "#" },
          ].map((item) => (
            <Button
              key={item.label}
              variant="outline"
              className="justify-between"
              asChild
            >
              <a href={item.href} className="flex w-full items-center gap-2">
                <item.icon className="h-4 w-4 text-muted-foreground" />
                <span>{item.label}</span>
                <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground" />
              </a>
            </Button>
          ))}
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              Tabs for buyer/publisher sections using shared shell chrome.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="buyer" className="space-y-4">
              <TabsList>
                <TabsTrigger value="buyer">Buyer</TabsTrigger>
                <TabsTrigger value="publisher">Publisher</TabsTrigger>
              </TabsList>
              <TabsContent value="buyer" className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  Buyer mode focuses on API keys, purchases, and usage analytics.
                </div>
                <Separator />
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <Badge variant="outline">API Keys</Badge>
                  <Badge variant="outline">Usage analytics</Badge>
                  <Badge variant="outline">Security</Badge>
                </div>
              </TabsContent>
              <TabsContent value="publisher" className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  Publisher mode highlights publishing flows, payments, and performance.
                </div>
                <Separator />
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <Badge variant="outline">Publish</Badge>
                  <Badge variant="outline">Payments</Badge>
                  <Badge variant="outline">Performance</Badge>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Stats</CardTitle>
            <CardDescription>Real-time shell demo numbers.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center justify-between rounded-lg border p-3">
                <div>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p className="text-lg font-semibold">{s.value}</p>
                </div>
                <Badge variant="secondary">{s.delta}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
