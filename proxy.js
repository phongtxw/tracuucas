// proxy.js
import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
    error: "/unauthorized",
  },
});

export const config = {
  matcher: [
    "/((?!api/auth|_next|favicon.ico).*)",
  ],
};