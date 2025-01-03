import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createPostInput, updatePost } from "ahaan-medium-blog";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<
{
    Bindings:{
    DATABASE_URL :string
    JWT_SECRET : string
    },
    Variables:{
        userId : any
    }
}>()

blogRouter.use("/*",async(c,next)=>{
    const authHeader = c.req.header("authorization")||""
    const user =await verify(authHeader, c.env.JWT_SECRET)
    
    if(user){
        
        c.set("userId", user.id); 
       await next()
    }else{
        c.status(403)
        return c.json({
            message:"You are not logged in"
        })
    }

})


blogRouter.post("/", async(c) => {
    const body =await  c.req.json();
    const {success}= createPostInput.safeParse(body);
    if(!success){
        c.status(411)
        return c.json({
            message:"Inputs not correct"
        })
    }
    const authorId = c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try {
        const blog = await prisma.post.create({
            data:{
                title: body.title,
                content : body.content,
                authorId: authorId
            }
        })
        return c.json({
            id: blog.id
        })
    } catch (error) {
        c.status(404);
        return c.text("Invalid crediantials")
    }
});

blogRouter.put("/", async(c) => {
    const body = await c.req.json();
    const {success}=updatePost.safeParse(body);
    if(!success){
        c.status(411)
        return c.json({ 
            message:"Inputs not correct"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    
    try {
      const post =  await prisma.post.update({
            where:{
              id: body.id
            },
            data:{
                title: body.title,
                content: body.content,
            }
        })
    return c.json({
        id: post.id
    })
    } catch (error) {
        c.status(404);
        return c.text("Invalid crediantials")
    }
    
});


// Pagination
blogRouter.get("/bulk", async (c)=>{
    const prisma =new  PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try {

        const blogs = await prisma.post.findMany({
            select:{
                content:true,
                title:true,
                id:true,
                author:{
                    select:{
                        name:true
                    }
                }
            }
        })

        return c.json({
            blogs
        })
    } catch (error) {
        c.status(404);
        return c.text("Invalid crediantials")
    }
})

blogRouter.get("/:id", async(c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.post.findFirst({
        where:{
            id:id
        },
        select:{
            id:true,
            title:true,
            content:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    })

    return c.json({
        blog
    })
  } catch (error) {
    c.status(404);
    return c.text("Invalid crediantials")
  }
});
