export default function StatusLabel({ status }: any) {
  return (
    <div
      className={`ml-5 rounded-md p-1 
             ${
               status === "OPEN"
                 ? "bg-red-500"
                 : status === "IN_PROGRESS"
                 ? "bg-orange-400"
                 : status === "DONE"
                 ? "bg-green-500"
                 : "bg-amber-400"
             }
            `}
    >
      <p>{status}</p>
    </div>
  );
}
