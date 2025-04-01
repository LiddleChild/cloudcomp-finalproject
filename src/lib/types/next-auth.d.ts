/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    user_id: string;
    email: string;
    display_name: string;
    password: string;
  }

  interface Session {
    user: User;
  }
}
