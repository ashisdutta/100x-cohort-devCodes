import { Hono } from 'hono'
import { PrismaClient } from './generated/prisma/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'


const app = new Hono<{
  Bindings:{
    DATABASE_URL:string,
    JWT_SECRET: string,
  }
}>();


//middleware
app.use('/api/v1/blog/*', async (c ,next)=>{
  const header = c.req.header("Authorization") || ""; // to ignore undefined if user sends nothing
  // token => ["Bearer", "token"]

  const token = header.split("")[1]

  const response = await verify(token, c.env.JWT_SECRET);
  if(response.id){
    await next();
  } else{
    c.status(403)
    return c.json({error : "unauthorized to access"})
  }
})










app.post("/api/v1/user/signup", async (c)=>{

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password
    }
  })

  const token = await sign({id:user.id}, c.env.JWT_SECRET)

  return c.json({
    jwt: token
  })
  
})

app.post("/api/v1/user/signin", async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();

  const user = await prisma.user.findUnique({
    where:{
      email:body.email,
      password: body.password
    }
  });

  if(!user){
    c.status(403);
    return c.json({
      error: "user doesn't exist"
    });
  }
  const token = await sign({id:user.id}, c.env.JWT_SECRET);
  return c.json({
    jwt: token
  })

})

// app.post("/api/v1/blog", (c)=>{

// })

// app.put("/api/v1/blog", (c)=>{

// })

// //GET /api/v1/blog/:id

// app.get("/api/v1/blog/:id", (c)=>{

// })

// app.get("/api/v1/blog/bulk", (c)=>{

// })


export default app
