const express = require("express")
const app = express()

function userInputs(req, res, next){
    req.username = req.headers.username;
    req.password = req.headers.password;
    req.kidneyId = parseInt(req.query.kidneyId);
    next();
}
app.use(express.json());
app.use(userInputs);

function userMiddleware(req, res,next){
    if(req.username !== 'ashisdutta' || req.password !== 'ash1234'){
        res.status(403).json({
            msg:"incorrect inputs!"
        })
        return;
    }
    next();
}

function kidneyMiddleware(req, res, next){
    if(req.kidneyId !==1 && req.kidneyId !==2){
        res.status(403).json({
            msg: "wrong kidney inputs!"
        })
        return;
    }
    next();
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, function(req, res){
    console.log("everything is perfect")
    res.send("you are healthy");
} )

app.listen(4400);

