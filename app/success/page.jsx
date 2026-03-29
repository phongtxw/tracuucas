"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function LoginSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home"); 
    }, 500);

    return () => clearTimeout(timer);
  }, [router]);

  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user?.email) {
      localStorage.setItem("userEmail", session.user.email);
    }
  }, [session]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-emerald-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md text-center animate-fade-in">
        
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          Đăng nhập thành công
        </h1>

        <p className="text-gray-500 mb-6">
          Bạn sẽ được chuyển hướng trong vài giây...
        </p>

        <button
          onClick={() => router.push("/home")}
          className="w-full bg-green-600 hover:bg-green-700 transition-all duration-200 text-white font-medium py-3 rounded-xl shadow-md"
        >
          Đi đến trang chính
        </button>
      </div>
    </div>
  );
}
