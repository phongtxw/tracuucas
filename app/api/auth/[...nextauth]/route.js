// app/api/auth/[...nextauth]/route.js

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { db } from "../../../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

const handler = NextAuth({
  debug: true,

  trustHost: true,

  secret: process.env.NEXTAUTH_SECRET,
  baseUrl: process.env.NEXTAUTH_URL,

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

      console.log("User email:", user.email);

      const docId = "GJogwB9z5fp3Vu26mPDX";
      
      const docRef = doc(db, "users", docId);

      const snap = await getDoc(docRef);
      if (!snap.exists()) return;
      const data = snap.data();
      const emails = Array.isArray(data.emails) ? data.emails : [];

      if (!emails.includes(user.email)) {
        return false;
      } 

      return true;
    },

  
  },

});


export { handler as GET, handler as POST };
