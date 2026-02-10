//Handles Updating/Deleting Specific Tickets (PATCH/DELETE)

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { authOption } from "@/auth";
import { getServerSession } from "next-auth";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ ticketId: string }> }
) {
  const session = await getServerSession(authOption);
  //security check
  if (!session || !session?.user) {
    return NextResponse.json(
      { error: "You are not logged-in" },
      { status: 401 }
    );
  }

  const { ticketId } = await params;
  const id = parseInt(ticketId);
  const userId = session?.user?.id;
  const role = session?.user?.role;

  const ticket = await prisma.ticket.findUnique({
    where: { id: id },
    select: { AuthorId: true },
  });

  if (!ticket) {
    return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
  }

  // Author OR Admin check
  if (role !== "ADMIN" && ticket.AuthorId !== userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const body = await req.json();
  //updating db
  const updatedTicket = await prisma.ticket.update({
    where: { id: id },
    data: body,
  });

  return NextResponse.json(updatedTicket);
}
