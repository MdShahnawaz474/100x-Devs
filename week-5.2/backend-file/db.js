const mongoose = require("mongoose");
const { string, boolean } = require("zod");

mongoose.connect("mongodb+srv://mdshahnawazm17:0786%401234@cluster0.ucjqz7r.mongodb.net/todos")

const todosSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todosSchema);

module.exports={
    todo
}