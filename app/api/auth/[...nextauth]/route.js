// app/api/auth/[...nextauth]/route.js
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store"; 

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
    // B1: luôn cho login để tránh crash OAuth
    async signIn() {
      return true;
    },

    //  B2: check Firestore ở đây (an toàn hơn)
    async jwt({ token, user }) {
      // chỉ chạy khi user vừa login
      if (user) {
        try {
          console.log("JWT check email:", user.email);

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

          // const snap = await Promise.race([
          //   getDoc(docRef),
          //   new Promise((_, reject) =>
          //     setTimeout(() => reject(new Error("Timeout")), 5000)
          //   ),
          // ]);

          if (!snap.exists()) {
            token.isAllowed = false;
          } else {
            const data = snap.data();
            const emails = Array.isArray(data.emails) ? data.emails : [];

            token.isAllowed = emails.includes(user.email);
          }
        } catch (err) {
          console.error("JWT ERROR:", err);
          token.isAllowed = false;
        }
      }

      return token;
    },

    //  B3: đưa dữ liệu ra client
    async session({ session, token }) {
      session.isAllowed = token.isAllowed;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
