//Handles New Comments (POST)
import { NextResponse } from "next/server";
import { authOption } from "@/auth";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const session = await getServerSession(authOption);

  if (!session || !session.user) {
    return NextResponse.json(
      { error: "you are not logged-in" },
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const text = body.text;
    const ticketId = Number(body.ticketId);

    if (!ticketId || !text) {
      return NextResponse.json(
        { error: "Ticket ID and Comment Text are required" },
        { status: 400 }
      );
    }

    const existingTicket = await prisma.ticket.findUnique({
      where: { id: ticketId },
      select: { id: true },
    });

    if (!existingTicket) {
      return NextResponse.json(
        { error: "Ticket not found. Cannot comment on a non-existent ticket." },
        { status: 404 }
      );
    }

    const newComment = await prisma.comment.create({
      data: {
        content: text,
        Ticket: { connect: { id: ticketId } },
        Author: { connect: { email: session.user.email! } },
      },
    });

    return NextResponse.json(newComment, { status: 201 });
  } catch (error) {
    console.error("Comment Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
