import { PrismaClient } from "@prisma/client";
import "dotenv/config";
const prisma = new PrismaClient();
async function getUsers() {
    // to get all user
    const users = await prisma.user.findMany({});
    console.log(users);
    const user = await prisma.user.findUnique({
        where: {
            id: 1
        },
        include: {
            posts: true
        }
    });
    console.log(user);
}
