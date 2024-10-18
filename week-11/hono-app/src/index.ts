import { Hono } from 'hono'

const app = new Hono();

async function authMiddleWare(c:any,next:any){
  if(c.req.header){
    // Do Validation
     await next()
  }else{
    return c.text("You dont have access");
  }

}
app.use(authMiddleWare);



app.post("/",authMiddleWare, async(c)=>{
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));
  
  return c.text("hello Hono!");
})


export default app