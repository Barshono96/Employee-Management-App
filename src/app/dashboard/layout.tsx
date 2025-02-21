"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <div className=" relative flex h-[100vh]">
      <Sidebar />
      <div className="flex flex-1 flex-col " >
        <Navbar />
        <main className="flex-1 overflow-y-auto bg-gray-50/40 p-6 dark:bg-gray-800/40">
          {children}
        </main>
      </div>
    </div>
  );
}
