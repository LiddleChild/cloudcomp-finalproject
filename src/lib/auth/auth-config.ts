import { dbclient } from "@/lib/clients/db";
import bcrypt from "bcryptjs";
import { getServerSession, NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const nextAuthConfig: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password)
          throw new Error("credentials cannot be empty");

        const result = await dbclient.query("SELECT * FROM users WHERE email = $1 LIMIT 1", [
          credentials.email,
        ]);

        const user = result.rowCount ?? 0 > 0 ? (result.rows[0] as User) : null;

        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return user;
        }

        throw new Error("credential does not match");
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      return { ...session, user: token };
    },
  },
};

export async function getSession() {
  return getServerSession(nextAuthConfig);
}
