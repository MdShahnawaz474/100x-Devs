import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";


export const userRouter  = new Hono<{
    Bindings :{
      DATABASE_URL:string
      JWT_SECRET :string
    }
  }>()


userRouter.post('/signup', async(c) => {
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body = await c.req.json();
   try {
    const user = await prisma.user.create({
      data:{
        email:body.email,
        password:body.password,
        name:body.name
      }
    })
    
   const token =await sign ({id:user.id},c.env.JWT_SECRET);
  
    return c.json({jwt:token});
   } catch (error) {
      c.status(400);
      return c.text("User already exist");
   }
  
  })


userRouter.post("/api/v1/signin", async(c)=>{
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body =await c.req.json()
    try {
      const user = await prisma.user.findFirst({
        where:{
          email: body.email ,
          password:body.password
        }
      });
  
      if(!user){
        c.status(404)
        return c.text("User not found");
      }
  
      const jwt = await sign({
        id:user.id
      },c.env.JWT_SECRET);
  
      return c.text(jwt);
    } catch (error:any) {
      c.status(403)
      return c.text("invalid crediantials"+ error.message )
    }
  })
  