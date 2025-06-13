
const express = require("express")
const zod = require("zod")
const app = express();
app.use(express.json())

const schema = zod.object({
    email : zod.string().email(),
    password: zod.string().min(8),
    country : zod.literal("IN").or(zod.literal("US"))
})

app.get('/', function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    const country = req.body.country;

    const response = schema.safeParse(req.body);

    if(!response.success){
        res.status(411).json({
            msg:"invalid input"
        })
    }
    else{
        res.json({
            response
        })
    }
})

app.listen(1)
