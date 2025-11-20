import { NextRequest } from "next/server";
import { PrismaClient,Prisma } from "@/app/generated/prisma/client";
import "dotenv/config"
import { PrismaPg } from '@prisma/adapter-pg'
const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
})

const client = new PrismaClient({
    adapter,
});


export async function POST(req:NextRequest){
    // extract the body
    const body= await req.json();
    //store the body in the database
    await client.user.create({
        data: {
            username:body.username,
            password:body.password
        }
    })

    return Response.json({
        message: "You are logged in"
    })
}


export function GET(){
    // database logic

    return Response.json({
        email: "ashis@gmail.com",
        name: "Ash"
    })
}
