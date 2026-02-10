import CreateTicketModal from "@/components/Ticketreq" 
import BtnLogout from "@/components/logoutbtn"
import Ticket from "@/components/ticketsFetch"



export default async function Dashboard(){
    return(
<div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-neutral-950 text-neutral-200">
    <header className="mb-8 pb-5 rounded-b-2xl border border-white/10 bg-neutral-900/50 shadow-xl backdrop-blur p-6">
      <div className="flex justify-between">
        <div>
          <h1 className=" text-4xl font-extrabold tracking-tight bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-transparent">
            Employee Dashboard
          </h1>
          <p className="text-neutral-400 mt-1 text-sm">
            Manage your tickets and requests effortlessly
          </p>
        </div>
       <BtnLogout />
      </div>
    </header>

  <div className="max-w-4xl mx-auto p-8">
    <section className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-semibold tracking-tight">My Requests</h2>
      <CreateTicketModal />
    </section>
    <Ticket/>    
  </div>
</div>

    )
}