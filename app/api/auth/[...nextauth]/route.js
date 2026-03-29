// app/api/auth/[...nextauth]/route.js
export const dynamic = "force-dynamic";

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { db } from "../../../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

const handler = NextAuth({
  debug: true,

  trustHost: true,

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt", 
  },

  pages: {
    signIn: "/login",
    error: "/unauthorized",
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      try {
        console.log("User email:", user.email);

        const docId = "GJogwB9z5fp3Vu26mPDX";
        const docRef = doc(db, "users", docId);

        const snap = await getDoc(docRef);
        if (!snap.exists()) return false;

        const data = snap.data();
        const emails = Array.isArray(data.emails) ? data.emails : [];

        return emails.includes(user.email);
      } catch (err) {
        console.error("SIGNIN ERROR:", err);
        return false;
      }
    }

  
  },

});


export { handler as GET, handler as POST };
