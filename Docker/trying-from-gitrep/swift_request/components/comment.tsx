import FetchComments from "./fetchcomment";
import BottomSendBar from "./SendBar";

interface CommentsProps {
  ticketId: number;
}

export default async function Comments({ ticketId }: CommentsProps) {
  return (
    <div className="mt-5 ml-5">
      <h1 className="text-2xl font-semibold">Activity & Comments</h1>
      <FetchComments ticketId={ticketId} />
      <div>
        <BottomSendBar />
      </div>
    </div>
  );
}
