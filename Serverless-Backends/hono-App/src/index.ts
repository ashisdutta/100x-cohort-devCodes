import { Hono, Next } from 'hono'
import { PrismaClient } from './generated/prisma/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { env } from 'hono/adapter'

const app = new Hono()

app.post('/', async (c) => {
  // Todo add zod validation here
  const body: {
    name: string;
    email: string;
    password: string
  } = await c.req.json()
  const { DATABASE_URL } = env<{ DATABASE_URL: string }>(c)

  const prisma = new PrismaClient({
      datasourceUrl: DATABASE_URL,
  }).$extends(withAccelerate())

  console.log(body)

  const createUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: body.password
    },
    //cacheStrategy: { ttl: 60 },
  });
  if(createUser){
    console.log("done Creating user");
  }
  
  return c.json({msg: "as"})
})

export default app

























// import { Hono } from 'hono'

// const app = new Hono()

// async function authMiddleware(c:any, next:any){
//   if(c.req.header("Authorization")){
//     await next()
//   } else {
//     return c.text("you don't have access")
//   }
// }



// app.get('/', authMiddleware, async (c) => {

//   const body = await c.req.json();
//   console.log(body);
//   console.log(c.req.header("Authorization"));
//   console.log(c.req.query("param"));
  
//   return c.text('Hello Hono!')
// })

// export default app

