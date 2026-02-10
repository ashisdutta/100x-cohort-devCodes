"use client"

import {signOut} from "next-auth/react"


export default function BtnLogout(){
    return(
      <div>
       <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="flex items-center gap-2 px-4 py-2 rounded-3xl bg-red-500/90 hover:bg-red-800 active:bg-red-700 border border-white/10 shadow-md shadow-red-500/20 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-50 hover: cursor-pointer"
        >
        Logout
        </button>
      </div>
    )
}