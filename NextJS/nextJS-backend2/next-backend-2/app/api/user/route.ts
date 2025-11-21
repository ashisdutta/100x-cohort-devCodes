// import { NextRequest, NextResponse } from "next/server";

// export function GET(req:NextRequest){
//     return NextResponse.json({
//         email:"Ash@wfjs.com",
//         password: "weoidcinocn"
//     })
// } 

// export async function POST(req: NextRequest){
//     const body = await req.json();
//     // console.log(body)
//     // console.log(req.headers.get("authorization"));

//     // console.log(req.nextUrl.searchParams.get("name"));

//     return NextResponse.json({
//         body,
//         message: "You are signed up"
//     }) 
// }


import { PrismaClient, Prisma } from "@/app/generated/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import {PrismaPg} from '@prisma/adapter-pg'
import "dotenv/config"

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
})

const client = new PrismaClient({
    adapter,
});


export async function  POST(req:NextRequest) {
    const body = await req.json();

    try {
        await client.user.create({
        data:{
            email:body.username,
            password: body.password
        }
    })
    return NextResponse.json({
        //id:body.id,
        message: "user got created"
    })
    } catch (error) {
        return NextResponse.json({
        message: "Error whiel signing up"
    }, {
        status:411
    })
    }
}