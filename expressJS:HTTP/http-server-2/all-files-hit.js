const express = require("express")
const fs = require("fs")
const app = express()
app.use(express.json())

app.get("/files/:filename", function(req, res){
    const name = req.params.filename;
    console.log(name);
    fs.readFile(`files/${name}`,'utf-8', function(err, data){
        res.json({
            data
        })
    })
})


app.listen(6000);