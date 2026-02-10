import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "./lib/prisma";
import {z} from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1)
})

export const authOption: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "text", placeholder:"abc@example.com"},
                password: {label:"password", type: "password", placeholder: "password" }
            },
            authorize: async (credentials) => {
                if(!credentials) return null

                const {email, password} = await loginSchema.parseAsync(credentials)

                const user = await prisma.user.findUnique({
                    where: {email}
                })

                if(!user || !user.password) return null 

                const isMatch = await bcrypt.compare(password, user.password)
                if(!isMatch) return null

                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    role: user.role,
                }
            }
        })
    ],
    callbacks: {
        async jwt({token, user}){
            if(user){
                token.role = user.role;
                token.id = Number(user.id);
                token.name = user.name;
            }
            return token
        },
        async session({session, token}){
            if(session.user){
                session.user.role = token.role as string
                session.user.id = token.id as number
                session.user.name = token.name as string
            }
            return session
        }
    },

    pages:{
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60 //30 days
    }
}