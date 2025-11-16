import { Hono } from 'hono'
import { PrismaClient } from '../generated/prisma/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import { createBlogInput,updateBlogInput } from '@ashisdta/common'

export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET: string,
    },
    Variables:{
        userId:string
    }
}>();

//middleware
blogRouter.use('/*', async (c ,next)=>{
    try {
        const header = c.req.header("Authorization") || ""; // to ignore undefined if user sends nothing
        
        // token => ["Bearer", "token"]
        const token = header.split(" ")[1]
        const payload = await verify(token, c.env.JWT_SECRET);

        if(payload){
            c.set('userId', String(payload.id));
            await next();
        } else{
            c.status(403)
            return c.json({error : "unauthorized to access"})
        }
    } catch (error) {
        c.status(403)
        c.json({
            message: "you're not logged in"
        })
    }
})



blogRouter.post("/", async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const authorId = c.get("userId")
    const body = await c.req.json();
    const { success } = createBlogInput.safeParse(body);

    if(!success){
        c.status(411);
        c.json({
            message: "invalid input"
        })
    }

    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId:authorId
        }
    })

    return c.json({
        id:post.id
    })
})

//update post
blogRouter.put("/", async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const {success} = updateBlogInput.safeParse(body);
    if(!success){
        c.status(411);
        c.json({
            message: "Incorrect input"
        })
    }

    const updatedPost = await prisma.post.update({
        where: {
            id: body.id
        },
        data:{
            title: body.title,
            content: body.content
        }
    })
    return c.text("post updated")
})


// paggination will be needed
blogRouter.get("/bulk", async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const allBlogPosts = await prisma.post.findMany();

    return c.json({
        allBlogPosts
    })
})


// //GET /api/v1/blog/:id
blogRouter.get("/:id", async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const id = c.req.param("id");

    try {
        const post = await prisma.post.findFirst({
            where:{
                id:id
            }
        })

        return c.json({
            post
        })
    } catch (error) {
        c.status(411);
        return c.json({
            massage: "error while fetching post"
        })
    }
})

