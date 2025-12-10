// import { NextResponse } from "next/server";

// export function GET(){
//     return NextResponse.json({
//         message:"Hi there"
//     })
// }

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
    CredentialsProvider({
        name: "email",
        credentials: {
        username: { label: "Username", type: "text", placeholder: "ash@gmail.com" },
        password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
            const username  = credentials?.username;
            const password = credentials?.password;

            // db request to check if this username and password are correct
            // lets take this user as a actual user got form db call
            const user = {
                name: "ash",
                id:"1",
                email:"ash@gmail.com"
            }

        if (user) {
            return user
        } else {
            return null
        }
        }
    }),
    GoogleProvider({
        clientId:"hjbj",
        clientSecret: "hggh"
    })
],
    secret: process.env.NEXTAUTH_SECRET
})

export const GET = handler
export const POST = handler