import { PrismaClient } from "@prisma/client";
import "dotenv/config";
const prisma = new PrismaClient();
async function createUser() {
    await prisma.user.create({
        data: {
            email: "dharma@gmail.com",
            name: "dharmaDas"
        }
    });
}
createUser();
