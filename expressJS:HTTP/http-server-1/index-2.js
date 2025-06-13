const express = require("express")
const bodyParser = require("body-parser")

const app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.post('/',function(req, res){
    console.log("hi there")
    res.send("2man")
})



app.post('/',function(req, res){
    const userData = req.body;
    console.log(userData)
    

    res.send("got your cradantials")
})





app.listen(port, function(){
    console.log(`ur port is ${port}`)
})