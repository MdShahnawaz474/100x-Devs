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
        required: true,
    },
    lastName: {
        type: String,
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


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
