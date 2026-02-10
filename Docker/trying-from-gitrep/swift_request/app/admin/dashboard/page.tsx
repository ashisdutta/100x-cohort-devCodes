import AllTicket from "@/components/allTickets";
import BtnLogout from "@/components/logoutbtn";
export default function LoginPage() {
  return (
    <div>
      <header className="mb-8 pb-5 rounded-b-2xl border border-white/10 bg-neutral-900/50 shadow-xl backdrop-blur p-6">
        <div className="flex justify-between">
          <div>
            <h1 className=" text-4xl font-extrabold tracking-tight bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
          </div>
          <BtnLogout />
        </div>
      </header>
      <div className="w-1/2 mx-auto mt-3">
        <AllTicket />
      </div>
    </div>
  );
}
