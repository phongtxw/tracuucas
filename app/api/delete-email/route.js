import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, updateDoc, arrayRemove } from "firebase/firestore";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const docId = "GJogwB9z5fp3Vu26mPDX";
    const docRef = doc(db, "users", docId);

    await updateDoc(docRef, {
      emails: arrayRemove(email),
    });

    return NextResponse.json({
      message: "Email deleted successfully",
    });
  } catch (error) {
    console.error("DELETE ERROR:", error);
    return NextResponse.json(
      { error: "Failed to delete email" },
      { status: 500 }
    );
  }
}
