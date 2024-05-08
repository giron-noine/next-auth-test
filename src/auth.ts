import NextAuth from "next-auth";
import Auth0 from "next-auth/providers/auth0";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Auth0],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id as string;
      return session;
    },
  },
});
