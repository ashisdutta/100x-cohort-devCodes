import NextAuth, { DefaultSession } from "next-auth";
import { Role } from "@prisma/client";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      name: string;
      role: Role;
    } & DefaultSession["user"];
  }

  interface User {
    id: number;
    name: string;
    role?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: number;
    name: string;
    role: Role;
  }
}
