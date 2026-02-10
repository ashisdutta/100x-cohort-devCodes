"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TicketStatusSelect({
  ticketId,
  initialStatus,
}: {
  ticketId: number;
  initialStatus: string;
}) {
  const [status, setStatus] = useState(initialStatus);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;

    // 1. Keep track of the old status in case we need to revert
    const oldStatus = status;

    // 2. Optimistic Update (Update UI immediately)
    setStatus(newStatus);
    setLoading(true);

    try {
      const res = await fetch(`/api/tickets/${ticketId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) {
        throw new Error("Failed to update status");
      }

      router.refresh();
    } catch (error) {
      console.error(error);
      // 3. REVERT changes if API fails
      setStatus(oldStatus);
      alert("Failed to update ticket status"); // Optional: User feedback
    } finally {
      setLoading(false);
    }
  };

  const getColor = (s: string) => {
    switch (s) {
      case "OPEN":
        return "bg-red-500 text-white";
      case "IN_PROGRESS":
        return "bg-orange-400 text-white";
      case "DONE":
        return "bg-green-500 text-white";
      default:
        return "bg-amber-400 text-black";
    }
  };

  return (
    <div
      className="ml-5 relative z-20"
      onClick={(e) => {
        // Blocks the Link click from the parent component
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <select
        value={status}
        onChange={handleChange}
        disabled={loading}
        className={`appearance-none rounded-md px-3 py-1 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/20 cursor-pointer text-center ${getColor(
          status
        )} ${loading ? "opacity-50" : ""}`}
      >
        <option value="OPEN" className="text-black bg-white">
          OPEN
        </option>
        <option value="IN_PROGRESS" className="text-black bg-white">
          IN_PROGRESS
        </option>
        <option value="DONE" className="text-black bg-white">
          DONE
        </option>
        <option value="CLOSED" className="text-black bg-white">
          CLOSED
        </option>
      </select>
    </div>
  );
}
