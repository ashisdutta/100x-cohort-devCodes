import {PrismaClient } from "@prisma/client";
import "dotenv/config"

const prisma = new (PrismaClient)

async function unpublishedPosts(){
    await prisma.user.update({
        where:{
            id:1
        },
        data:{
            posts:{
                deleteMany:{
                    published: false
                }
            }
        }
    })
}

unpublishedPosts();