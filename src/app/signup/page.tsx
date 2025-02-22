// 'use client';

// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { useAppSelector } from '@/lib/hooks';
// import SignupForm from '@/components/auth/SignupForm';
// import Image from "next/image";


// export default function SignupPage() {
//   const router = useRouter();
//   const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

//   useEffect(() => {
//     if (isAuthenticated) {
//       router.push('/dashboard');
//     }
//   }, [isAuthenticated, router]);

//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
//       <div className="mb-8 text-center">
//         <div className="mb-4 mr-4 flex items-center justify-center">
//                   <Image
//                     src="/employee_8934611.png"
//                     alt="Logo"
//                     width={64}
//                     height={64}
//                     className="rounded"
//                   />
//                 </div>
//         <h1 className="text-4xl font-bold text-gray-900">Create Account</h1>
//         <p className="mt-2 text-gray-600">Sign up to get started</p>
//       </div>
//       <div className="w-full max-w-md">
//         <div className="rounded-lg bg-white p-8 shadow-md">
//           <SignupForm />
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/lib/hooks';
import SignupForm from '@/components/auth/SignupForm';
import Image from "next/image";

export default function SignupPage() {
  const router = useRouter();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
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
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Create Account</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Sign up to get started</p>
      </div>
      <div className="w-full max-w-md">
        <div className="rounded-lg bg-white dark:bg-gray-800 p-8 shadow-md">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}
