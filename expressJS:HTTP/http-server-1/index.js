const express = require('express')
const bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

// app.post('/', (req, res) => {
//     console.log(req.body)
//     res.send('<h1>hi everyone!</h1>')
// })

// app.post('/your-html', (req, res)=>{
//     console.log(req.headers["authorization"])
//     res.send({
//         msg:"2+2 = 4"
//     })
// })

// app.get("/route-handler", function(req, res){
//     res.json({
//         name: "Ashis",
//         age:20
//     })
// })

app.post('/backend-api/conversation',(req, res)=>{
    const message = req.query.msg;
    console.log(message);
    // ML thingy
    res.json({
        "output": "2+2 = 4"
    })
})





app.listen(port, function(){
    console.log(`the port is ${port}`)
})


// create todo app that lets users store todos on the server
// try to create http server from scratch in c
