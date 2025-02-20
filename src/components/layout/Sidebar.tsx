'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { LayoutGrid, Table2, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const sidebarItems = [
  {
    title: 'Card view ',
    href: '/dashboard',
    icon: LayoutGrid,
  },
  {
    title: 'Table View',
    href: '/dashboard/table',
    icon: Table2,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={cn(
      'relative border-r bg-gray-100/40 transition-all duration-300 ease-in-out dark:bg-gray-800/40',
      isCollapsed ? 'w-16' : 'w-64'
    )}>
      <div className="flex h-16 items-center justify-between px-4">
        {!isCollapsed && (
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
            Employee Manager
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <Menu className="h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="space-y-2 p-2">
          {sidebarItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span
                className={cn(
                  'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                  pathname === item.href ? 'bg-accent' : 'transparent',
                  isCollapsed ? 'justify-center' : 'justify-start'
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {!isCollapsed && <span>{item.title}</span>}
              </span>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
