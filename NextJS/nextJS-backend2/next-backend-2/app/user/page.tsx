///////////////   general method of fetching data. ////////////

// import axios from "axios"
// async function fetchData(){
//     const response = await axios.get("http://localhost:3000/api/user")
//     return response.data;
// }

// export default async function User(){
//     const data = await fetchData();

//     return (
//         <div>
//             {data.password}
//             {data.email}
//         </div>
//     )
// }

/////////////////////////// Better fetches //////////////////////

import { PrismaClient, Prisma } from "@/app/generated/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import {PrismaPg} from '@prisma/adapter-pg'
import "dotenv/config"

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
})

const client = new PrismaClient({
    adapter,
});

async function  fetchData() {
    const user = await client.user.findFirst({
        where:{
            email:"hvnd9h"
        }
    });

    return {
        email:user?.email, password:user?.password
    }
}

export default async function User(){
    const data = await fetchData();

    return (
        <div>
            {data.password}
            {data.email}
        </div>
    )
}




//////////////////   extenal(clouflare workers ) backend call

// "use client"
// import axios from "axios"
// import { useEffect, useState } from "react"


// export default function User(){
//     const [loading, setLoading] = useState(true)
//     const [data, setData] = useState({
//         email:"",
//         name:""
//     })

//     useEffect(()=> {
//         axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
//         .then(response => {
//             setLoading(false)
//             setData(response.data)
//         })
//     })
//     return (
//         <div>
//             {data.name}
//             {data.email}
//         </div>
//     )
// }