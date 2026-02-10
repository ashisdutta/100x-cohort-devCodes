//Handles Creating Tickets (POST)
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOption } from "@/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const session = await getServerSession(authOption);

    if(!session || !session.user){
        return NextResponse.json(
            {error : "you must be logged in to create a ticket."},
            {status:401}
        );
    }

    try {
        const body = await req.json();
        const { title, description, priority, category } = body;

        if(!title|| !category || !description){
            return NextResponse.json(
                {error: "Title, description, Category are required."},
                {status:400}
            );
        }

        const newTicket = await prisma.ticket.create({
            data: {
                title,
                description: description || "",
                priority: priority || "LOW",
                category,
                status: "OPEN", 
                Author: {
                    connect: {id: session.user.id}
                }
            }
        })

        return NextResponse.json(newTicket, {status:201});

    } catch (error) {
        console.error("Error creating ticket:", error);
        return NextResponse.json(
            {error:"Internal Server Error"},
            {status: 500}
        )
    }
}