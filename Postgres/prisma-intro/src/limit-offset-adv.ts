import {PrismaClient } from "@prisma/client";
import "dotenv/config"

const prisma = new (PrismaClient)


//SELECT * FROM question OFFSET 0 LIMIT 10;
//SELECT * FROM question OFFSET 10 LIMIT 10;
//SELECT * FROM question OFFSET 20 LIMIT 10;
async function paginationOffset(){
    const res = await prisma.post.findMany({
        take: 3, // limit
        skip: 0 // offset
    })
    console.log(res)
}

paginationOffset();