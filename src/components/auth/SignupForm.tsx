// "use client";

// import { useState } from "react";
// import { useAppDispatch } from "@/lib/hooks";
// import { signup } from "@/lib/store/authSlice";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useRouter } from "next/navigation";
// import { useForm } from "react-hook-form";

// export default function SignupForm() {
//   const dispatch = useAppDispatch();
//   const router = useRouter();
//   const [error, setError] = useState("");

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     mode: "onBlur",
//   });

//   const onSubmit = (data: any) => {
//     setError("");

//     const users = JSON.parse(localStorage.getItem("users") || "[]");
//     const exists = users.some((u: any) => u.email === data.email);

//     if (exists) {
//       setError("Email already exists");
//       return;
//     }

//     dispatch(signup(data));
//     router.push("/");
//   };

//   return (
//     <div className="mx-auto max-w-sm space-y-6">
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <div className="space-y-2">
//           <Label htmlFor="name">Name</Label>
//           <Input
//             id="name"
//             placeholder="John Doe"
//             {...register("name", {
//               required: "Name is required",
//               minLength: { value: 3, message: "Must be at least 3 characters" },
//             })}
//           />
//           {errors.name?.message && (
//             <p className="text-sm text-red-500">
//               {String(errors.name.message)}
//             </p>
//           )}
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="email">Email</Label>
//           <Input
//             id="email"
//             type="email"
//             placeholder="your@email.com"
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^\S+@\S+\.\S+$/,
//                 message: "Invalid email address",
//               },
//             })}
//           />
//           {errors.email?.message && (
//             <p className="text-sm text-red-500">
//               {String(errors.email.message)}
//             </p>
//           )}
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="password">Password</Label>
//           <Input
//             id="password"
//             type="password"
//             placeholder="*******"
//             {...register("password", {
//               required: "Password is required",
//               minLength: { value: 6, message: "Must be at least 6 characters" },
//             })}
//           />
//           {errors.password?.message && (
//             <p className="text-sm text-red-500">
//               {String(errors.password.message)}
//             </p>
//           )}
//         </div>

//         {error && <p className="text-sm text-red-500">{error}</p>}

//         <Button type="submit" className="w-full">
//           Sign Up
//         </Button>
//       </form>

//       <div className="text-center text-sm">
//         Already have an account?{" "}
//         <Button
//           variant="link"
//           className="p-0"
//           onClick={() => router.push("/login")}
//         >
//           Login
//         </Button>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { signup } from "@/lib/store/authSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function SignupForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data: any) => {
    setError("");

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const exists = users.some((u: any) => u.email === data.email);

    if (exists) {
      setError("Email already exists");
      return;
    }

    dispatch(signup(data));
    router.push("/");
  };

  return (
    <div className="mx-auto max-w-sm space-y-6 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="John Doe"
            className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
            {...register("name", {
              required: "Name is required",
              minLength: { value: 3, message: "Must be at least 3 characters" },
            })}
          />
          {errors.name?.message && (
            <p className="text-sm text-red-500">
              {String(errors.name.message)}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email?.message && (
            <p className="text-sm text-red-500">
              {String(errors.email.message)}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="*******"
            className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Must be at least 6 characters" },
            })}
          />
          {errors.password?.message && (
            <p className="text-sm text-red-500">
              {String(errors.password.message)}
            </p>
          )}
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <Button
          type="submit"
          className="w-full  bg-black dark:bg-blue-500 hover:bg-teal-950 dark:hover:bg-blue-600"
        >
          Sign Up
        </Button>
      </form>

      <div className="text-center text-sm">
        Already have an account?{" "}
        <Button
          variant="link"
          className="p-0 text-blue-600 dark:text-blue-400"
          onClick={() => router.push("/login")}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
