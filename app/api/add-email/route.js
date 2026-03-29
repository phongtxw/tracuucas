import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

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
      emails: arrayUnion(email),
    });

    return NextResponse.json({
      message: "Email added successfully",
    });
  } catch (error) {
    console.error("ADD ERROR:", error);
    return NextResponse.json(
      { error: "Failed to add email" },
      { status: 500 }
    );
  }
}
