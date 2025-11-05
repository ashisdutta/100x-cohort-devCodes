import { PrismaClient } from "@prisma/client";
import "dotenv/config";
const prisma = new (PrismaClient);
async function advQuery() {
    const res = await prisma.user.findMany({
        where: {
            email: {
                endsWith: "@gmail.com"
            },
            posts: {
                some: {
                    published: true
                }
            }
        },
        include: {
            posts: {
                where: {
                    published: true
                }
            }
        }
    });
    console.log(res);
}
advQuery();
