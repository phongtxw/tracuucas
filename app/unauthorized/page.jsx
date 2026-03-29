"use client";

import { signIn } from "next-auth/react";

export default function UnauthorizedPage() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-orange-100 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md text-center">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-4 rounded-full">
            <svg
              className="w-10 h-10 text-red-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01M5.93 19h12.14c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L4.2 16c-.77 1.33.19 3 1.73 3z"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Tài khoản không hợp lệ
        </h1>

        <p className="text-gray-500 mb-8">
          Bạn không có quyền truy cập vào hệ thống này.
          <br />
          Vui lòng sử dụng tài khoản được cấp quyền.
        </p>

      </div>
    </div>
  );
}
