// app/api/get-emails/route.js

export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function GET() {
  try {
    const docId = "GJogwB9z5fp3Vu26mPDX";

    const docRef = doc(db, "users", docId);
    const snap = await getDoc(docRef);

    if (!snap.exists()) {
      return NextResponse.json({ emails: [] });
    }

    const data = snap.data();

    return NextResponse.json({
      emails: data.emails || [],
    });
  } catch (error) {
    console.error("ERROR:", error);
    return NextResponse.json(
      { error: "Failed to fetch emails" },
      { status: 500 }
    );
  }
}
