// app/api/get-emails/route.js

export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function GET() {
  try {
    const docId = "GJogwB9z5fp3Vu26mPDX";

    const docRef = doc(db, "users", docId);

    let snap;
    try {
      snap = await getDoc(docRef);
    } catch (err) {
      console.error("Firebase getDoc ERROR:");
      console.error("Message:", err.message);
      console.error("Code:", err.code);
      console.error("Full error:", err);

      return NextResponse.json(
        { error: "Firebase getDoc failed", details: err.message },
        { status: 500 }
      );
    }
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
