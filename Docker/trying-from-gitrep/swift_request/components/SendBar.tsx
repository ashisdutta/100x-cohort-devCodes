"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";

const BottomCommentBar = () => {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const { id: ticketId } = useParams();

  const handleSubmit = async () => {
    if (!comment.trim() || loading) return;

    try {
      setLoading(true);
      await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ticketId,
          text: comment.trim(),
        }),
      });

      setComment("");
    } catch (err) {
      console.error("Failed to post comment", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed bottom-0 left-0 w-full flex justify-center pb-6"
      style={{ bottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center gap-3 bg-[#111827] border border-gray-700 rounded-full px-4 py-2 shadow-xl w-[90%] max-w-2xl">
        {/* Comment Input */}
        <input
          type="text"
          placeholder="Write a comment…"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="flex-1 bg-transparent outline-none text-gray-200 placeholder-gray-500"
        />

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={!comment.trim() || loading}
          className={`rounded-full px-4 py-1 text-sm transition ${
            !comment.trim() || loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-500 text-white"
          }
          hover:cursor-pointer
          `}
        >
          {loading ? (
            "Posting…"
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="#e5e7eb"
            >
              <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default BottomCommentBar;
