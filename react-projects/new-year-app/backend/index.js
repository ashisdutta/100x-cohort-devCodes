// write basic express boilerplate code,
// with express.json() middleware


const express = require("express")
const {createTodo, updateTodo} = require("./types")
const app = express();
const {todo} = require("./db")
const cors = require("cors")

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));


app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        return res.status(411).json({
            msg:"you send the wrong inputs",
        })
    }
    
    // and put it in mongoDB
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed:false
    })
    return res.json({
        msg:"todo Created"
    })

})

app.get("/todos", async function(req, res){
    const todos = await todo.find();
    res.json({
        todos
    })
})

app.put("/completed", async function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        return res.status(411).json({
            msg:"you send the wrong inputs",
        })
    }
    await todo.updateOne({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"Todo marked as completed"
    })
})

app.listen(3000);