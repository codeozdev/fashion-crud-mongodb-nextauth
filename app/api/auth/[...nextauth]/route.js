import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = {
          id: 1,
          name: "John",
          password: "next",
        };
        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
