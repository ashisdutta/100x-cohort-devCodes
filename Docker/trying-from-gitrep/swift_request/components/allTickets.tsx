import StatusLabel from "@/components/status";
import { getServerSession } from "next-auth";
import { authOption } from "@/auth";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function AllTicket() {
  const session = await getServerSession(authOption);

  const tickets = await prisma.ticket.findMany({
    where: {},
    include: {
      Author: true,
    },
    orderBy: { CreateAt: "desc" },
  });

  return (
    <div>
      {tickets.length === 0 && (
        <p className="text-neutral-500 text-center mt-10">No tickets found.</p>
      )}

      <div className="space-y-8">
        {tickets.map((ticket) => (
          <Link key={ticket.id} href={`/ticket/${ticket.id}`}>
            <div className="mt-5 rounded-2xl border border-white/10 bg-neutral-900/50 shadow-xl backdrop-blur p-6 hover:border-neutral-700 transition cursor-pointer">
              <p className="text-neutral-500">Employee: {ticket.Author.name}</p>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {ticket.title}
                </h3>
                <StatusLabel status={ticket.status} />
              </div>

              <p className="text-neutral-400 mt-3 line-clamp-2">
                {ticket.description}
              </p>

              <div className="mt-4 flex items-center text-sm text-neutral-500 gap-2">
                <span className="px-2 py-1 rounded bg-neutral-800/80 border border-white/10">
                  Ticket #{ticket.id}
                </span>
                <span className="text-neutral-600">•</span>
                <span>{new Date(ticket.CreateAt).toLocaleDateString()}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
