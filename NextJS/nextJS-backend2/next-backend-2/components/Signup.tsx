"use client"

import axios from "axios";
import { useState } from "react"

export default function Signup(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return <div className="flex flex-col justify-center h-screen">
            <div className="flex justify-center">
            <div className="border border-1 p-5">
                <div>
                    <input onChange={(e)=>{
                        setUsername(e.target.value)
                    }} className="p-2" type="text" placeholder="username" />
                </div>
                <div>
                    <input onChange={(e)=>{
                        setPassword(e.target.value)
                    }} className="p-2" type="text" placeholder="password" />
                </div>
                <div>
                    <button onClick={()=>{
                        axios.post("http://localhost:3000/api/user", {
                            username,
                            password
                        })
                    }} className="p-2 cursor-pointer bg-amber-300">Sign up</button>
                </div>
            </div>
        </div>
    </div>
}