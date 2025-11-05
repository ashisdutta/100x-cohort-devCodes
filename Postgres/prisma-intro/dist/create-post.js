import { PrismaClient } from "@prisma/client";
import "dotenv/config";
const prisma = new PrismaClient({ log: ["info", "query"] });
async function createPost() {
    await prisma.post.create({
        data: {
            title: "shillong post",
            content: "waterfall",
            published: true,
            author: {
                connect: {
                    id: 3
                }
            }
        }
    });
}
createPost();
