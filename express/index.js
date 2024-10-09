const express = require("express");

const app = express();

const users =[{
    name:"John Doe",
    kidney:[{
        healthy: false
    }]
}];

app.use(express.json());

app.get("/" , function(req,res){
    // write a logic
    const JohnKidney = users[0].kidney
    const numberOfkidney=JohnKidney.length;
    let numberOfhealthyKidney = 0
   for(let i=0; i<JohnKidney.length; i++){
    if(JohnKidney[i].healthy){
        numberOfhealthyKidney = numberOfhealthyKidney +1;
    }
   }
   const numberOfUnhealthykidney= numberOfkidney - numberOfhealthyKidney;

   res.json({
    numberOfkidney,
    JohnKidney,
    numberOfhealthyKidney,
    numberOfUnhealthykidney
   })
})


app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy;
    users[0].kidney.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done!"
    })
})

app.put("/", function(req,res){
    for (let i=0; i<users[0].kidney.length; i++){
        users[0].kidney[i].healthy= true;
    }
    res.json({});
})
  
app.delete("/",function(req,res){
    const newKidney =[];
    for (let i=0; i<users[0].kidney.length; i++){
        if(users[0].kidney[i].healthy){
            newKidney.push({
                healthy:true
            })
        }
    }
    users[0].kidney = newKidney;
    res.json({
        msg:"done"
    })
})

app.listen(3000);