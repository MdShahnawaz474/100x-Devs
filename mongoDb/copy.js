const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://mdshahnawazm17:0786%401234@cluster0.ucjqz7r.mongodb.net/youtube")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch(err => console.log(err, "Mongo error"));

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    JobTitle: {
        type: String
    },
    Gender: {
        type: String
    }
});

const User = mongoose.model("User", UserSchema);

app.post("/api/users", async (req, res) => {
    const body = req.body;

    if (!body.firstName || !body.email) {
        return res.status(400).json({ msg: "First name and email are required." });
    }
     
    try {
        const user = new User({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            Gender: body.gender,
            JobTitle: body.job_title
        });

        const result = await user.save();
        return res.status(201).json({
            msg: "Success",
            user: result
        });
    } catch (error) {
        return res.status(500).json({ msg: "Server error", error });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
