"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";
import LoginForm from "@/components/auth/LoginForm";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="mb-8 text-center">
        <div className="mb-4 mr-4 flex items-center justify-center">
          <Image
            src="/employee_8934611.png"
            alt="Logo"
            width={64}
            height={64}
            className="rounded"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Welcome Back</h1>
        <p className="mt-2 text-gray-600">Log in to your account to continue</p>
      </div>
      <div className="w-full max-w-md">
        <div className="rounded-lg bg-white p-8 shadow-md">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
