import { Hono } from 'hono'
import{PrismaClient} from "@prisma/client/edge"
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode,sign,verify } from 'hono/jwt'
// import { env } from 'hono/adapter'

const app = new Hono<{
  Bindings :{
    DATABASE_URL:string
    JWT_SECRET :string
  }
}>()

app.use("/api/v1/blog/*",async (c,next)=>{
  const header = c.req.header("authorization")|| "";
  // Bearer token => ["Bearer","Token"];
  const token = header.split("")[1];

  const response = await verify(token,c.env.JWT_SECRET)
  if(response.id){
    next()
  }else{
    c.status(404);
    return c.json({
      error:"Unauthorize"
    })
  }
})

app.post('/api/v1/signup', async(c) => {
  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL,
  }).$extends(withAccelerate())

const body = await c.req.json()

const user = await prisma.user.create({
  data:{
    email:body.email,
    password:body.password
  }
})

  const token = await sign({
    id:user.id

  },c.env.JWT_SECRET);

  return c.json({
    jwt:token
  })
})


app.post ("/api/v1/signin",async (c)=>{

 const prisma = new PrismaClient({
  datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const user = await prisma.user.findUnique({
    where:{
      email: body.email,
      password:body.password
    }
  });

  if(!user){
    c.status(404);
  return c.text("User not found");
  }

  const jwt = await sign ({
    id: user.id
  },c.env.JWT_SECRET);
  return c.json({jwt});

})

app.post("/api/v1/blog",(c)=>{
  return c.text("this is a blog post")
})

app.put("/api/v1/blog", (c)=>{
  return c.text("This is put request from blog");
})

app.get("/api/v1/blog/:id",(c)=>{
  return c.text("this is get request");
})

export default app
