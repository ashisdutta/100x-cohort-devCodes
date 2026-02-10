
import prisma from "@/lib/prisma";
import {z} from "zod"
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

const loginSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(1)
})

export async function POST(req : Request){

     try {
    const body = await req.json();
    const parsed = loginSchema.safeParse(body);
    if (!parsed.success)
      return NextResponse.json({ msg: "Invalid data"}, { status: 400 });

    const { name, email, password } = parsed.data;
      
        const userExists = await prisma.user.findUnique({where:{email}});
        if(userExists) return NextResponse.json({msg:"user alredy exist"}, {status:400});

        const hashed = await bcrypt.hash(password,10)


        await prisma.user.create({
            data: {
                name,
                email,
                password:hashed
            }
        });

        return NextResponse.json({ msg: "User created" }, { status: 201 });
     } catch (error) {
        return NextResponse.json({ msg: "Server error" + error }, { status: 500 });
     }
}


 