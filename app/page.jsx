"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Page() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return;

    // ❌ chưa login
    if (!session) {
      router.push("/login");
      return;
    }

    // ❌ login nhưng không hợp lệ
    if (!session.isAllowed) {
      router.push("/unauthorized");
      return;
    }

    // ✅ hợp lệ → vào home
    router.push("/home");
  }, [session, status, router]);

  return null;
}
