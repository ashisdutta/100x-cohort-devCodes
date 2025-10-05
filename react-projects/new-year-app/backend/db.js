// will use mongoose library to connect to our library

// lets create mongoDB schema
/*
    Todo {
        title: string;
        description: string;
        completed: boolean
    }
*/

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ashisdutta795_db_user:iD3NHjrWG9sTVfwh@todo-cluster0.jeardyh.mongodb.net/?retryWrites=true&w=majority&appName=todo-Cluster0")


const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo
}