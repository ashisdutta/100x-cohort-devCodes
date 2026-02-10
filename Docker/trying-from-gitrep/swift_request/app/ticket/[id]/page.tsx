// Inside your component
import prisma from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";
import StatusLabel from "@/components/status";
import Comments from "@/components/comment";
import { getServerSession } from "next-auth";
import { authOption } from "@/auth";
import TicketStatusSelect from "@/components/TicketStatusSelect";

export default async function Ticket({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const ticketId = parseInt(id);

  const session = await getServerSession(authOption);
  const currentUser = session?.user as any;
  const isAdmin = (session?.user as any)?.role === "ADMIN";
  const currentUserId = currentUser?.id ? parseInt(currentUser.id) : null;

  if (isNaN(ticketId)) {
    return <div>Invalid Ticket ID</div>;
  }
  const ticket = await prisma.ticket.findUnique({
    where: {
      id: ticketId,
    },
  });

  if (!ticket) {
    // This triggers the Next.js 404 Not Found page
    notFound();
  }

  const isAuthor = ticket?.AuthorId === currentUserId;

  if (!isAdmin && !isAuthor) {
    redirect("/unauthorized");
  }

  return (
    <div>
      <div className="text-3xl font-bold m-3 py-2">
        <h1>Ticket Detail</h1>
      </div>
      <div className="border border-white/10 bg-neutral-900/50 shadow-xl backdrop-blur p-6 hover:border-neutral-700 transition cursor-pointer">
        <div className="flex items-center">
          <h3 className="text-2xl font-semibold tracking-tight">
            {ticket.title}
          </h3>

          {isAdmin ? (
            <TicketStatusSelect
              ticketId={ticket.id}
              initialStatus={ticket.status}
            />
          ) : (
            <StatusLabel status={ticket.status} />
          )}
        </div>
        <div className="text-neutral-400 mt-1">
          <span>
            Created by You on {new Date(ticket.UpdatedAt).toLocaleDateString()}
          </span>
          <span> | </span>
          <span>Category:{ticket.category}</span>
          <span> | </span>
          <span>Priority: {ticket.priority}</span>
        </div>
      </div>
      <div className="m-4">
        <div className="pl-4 border rounded-xl bg-gray-700 p-2 hover: cursor-pointer">
          <p className="line-clamp-2">{ticket.description}</p>
        </div>
        <div>
          <Comments ticketId={ticketId} />
        </div>
      </div>
    </div>
  );
}
