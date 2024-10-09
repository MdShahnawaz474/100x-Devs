const express = require("express")
const app = express()
const {createTodo, updateTodo}= require ("./type")
const {todo} = require("./db");
const cors = require("cors");
const PORT = 8000;

app.use(express.json());
app.use(cors());

app.post("/todo" , async(req , res)=>{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success){
        res.status(411).json({
            msg: "You send a wrong inputs"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
        
    })
    res.json({
        msg: "Todo created"
    })

})

app.get("/todos", async(req, res)=>{
    const todos = await todo.find({}); 
    
    res.json({todos})
})

app.put("/completed", async(req, res)=>{
    const updatePaylod = req.body;
    const parsePayload = updateTodo.safeParse(updatePaylod);

    if(!parsePayload.success){
        res.status(411).json({
            msg : "You sent the wrong input"
        });
    }

    await todo.update({
        _id:req.body.id
    },{
        completed : true
    })
    res.json({
        msg: "Todos marked as completed"
    })

})

app.listen(PORT , ()=>console.log(`App is listening on PORT : ${PORT}`));

