const express= require("express")
const app = express();
const UrlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connect");
const PORT = 8000

connectToMongoDB("mongodb+srv://mdshahnawazm17:0786%401234@cluster0.ucjqz7r.mongodb.net/short-url").then(()=>console.log("MongoDb Connected"))

app.use(express.json())
 
app.use("/url", UrlRoute)
app.listen(PORT ,()=> console.log(`server started at PORT: ${PORT}`))