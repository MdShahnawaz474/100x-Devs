const express = require("express");
const router = express.Router();
const zod = require("zod");
const {User} = require("../db")
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config")
module.exports = router

const signUpSchema = zod.object({
    username:zod.string(),
    password:zod.string(),
    firstName:zod.string(),
    lastName:zod.string()
})

router.post("/signup", async(req,res)=>{
    const body= req.body;
    const {success}= signUpSchema.safeParse(req.body);
    if(!success){
        return res.json({
            message:"Email is already taken/Incorrect inputs"
        })
    }

    const user= User.findOne({
        username:body.username
    })
    if (user.id){
        return res.json({
            message :"Email already taken / Incorrect inputs"
        })
    }

    const dbUser = await User.create(body);
    const token = jwt.sign({
        userId : dbUser._id
    },JWT_SECRET);

    res.json({
        message:"User created succefully",
        token: token
    })

})

module.exports= router