"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LayoutGrid, Table2, Menu, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const sidebarItems = [
  {
    title: "Card View",
    href: "/dashboard",
    icon: LayoutGrid,
  },
  {
    title: "Table View",
    href: "/dashboard/table",
    icon: Table2,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration issues

  return (
    <div
      className={cn(
        "relative border-r bg-gray-100/40 dark:bg-gray-800/40 transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Top Section */}
      <div className="flex h-16 items-center justify-between px-4">
        {!isCollapsed && (
          <Link
            href="/dashboard"
            className="flex items-center gap-2 font-semibold"
          >
            Employee Manager
          </Link>
        )}
        <div className="flex gap-2">
          {/* Sidebar Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Dark Mode Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Sidebar Links */}
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="space-y-2 p-2">
          {sidebarItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all",
                  pathname === item.href
                    ? "bg-gray-300 dark:bg-gray-700"
                    : "transparent",
                  isCollapsed ? "justify-center" : "justify-start"
                )}
              >
                <item.icon className="mr-2 h-5 w-5" />
                {!isCollapsed && <span>{item.title}</span>}
              </span>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
