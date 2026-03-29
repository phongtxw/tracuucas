// app/page.jsx

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ChemicalsPage() {

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login");
    }, 200);

    return () => clearTimeout(timer);
  }, [router]);

  return null;

}