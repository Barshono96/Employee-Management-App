"use client";

import { useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { login } from "@/lib/store/authSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u: any) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      dispatch(login(formData));
      router.push("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="mx-auto max-w-sm space-y-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md dark:shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700 dark:text-white">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:focus:ring-gray-600"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className="text-gray-700 dark:text-white">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="*******"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:focus:ring-gray-600"
          />
        </div>
        {error && (
          <p className="text-sm text-red-500 dark:text-red-400">{error}</p>
        )}
        <Button
          type="submit"
          className="w-full  bg-black dark:bg-blue-500 hover:bg-teal-950 dark:hover:bg-blue-600"

        >
          Login
        </Button>
      </form>
      <div className="text-center text-sm text-gray-600 dark:text-gray-300">
        Don't have an account?{" "}
        <Button
          variant="link"
          className="p-0 text-blue-600 dark:text-blue-400"
          onClick={() => router.push("/signup")}
        >
          Sign up
        </Button>
      </div>
    </div>
  );
}
