// app/api/auth/[...nextauth]/route.js

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { db } from "../../../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

const handler = NextAuth({
  debug: true,

  trustHost: true,

  secret: process.env.NEXTAUTH_SECRET,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,

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

  // callbacks: {
  //   async signIn({ user }) {

  //     const docId = "GJogwB9z5fp3Vu26mPDX";
      
  //     const docRef = doc(db, "users", docId);

  //     const snap = await getDoc(docRef);
  //     if (!snap.exists()) return;
  //     const data = snap.data();
  //     const emails = Array.isArray(data.emails) ? data.emails : [];

  //     if (!emails.includes(user.email)) {
  //       return false;
  //     } 

  //     return true;
  //   },

  
  // },

  callbacks: {
    async signIn({ user }) {
      try {
        // Tạm thời comment phần Firebase để test login trước
        // Sau khi login thành công thì mới mở lại
        /*
        const docId = "GJogwB9z5fp3Vu26mPDX";
        const docRef = doc(db, "users", docId);
        const snap = await getDoc(docRef);
        
        if (!snap.exists()) return false;
        
        const data = snap.data();
        const emails = Array.isArray(data.emails) ? data.emails : [];
        
        if (!emails.includes(user.email)) {
          return false;
        }
        */
        console.log("SignIn callback: user email =", user.email);

        return true;   // Cho phép tất cả email login tạm thời
      } catch (error) {
        console.error("SignIn callback error:", error);
        return false;   // Trả về false thay vì crash server
      }
    },
  },

});


export { handler as GET, handler as POST };
