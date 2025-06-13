const express = require("express")
const app = express()

app.get('/health-checkup', function(req, res){
    // do health checks here
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != 'ashisdutta'|| password != 'password'){
        res.status(403).json({"msg":"something up with your inputs"})
        return;
    }

    if(kidneyId != 1 && kidneyId !=2){
        res.status(411).json({"mag": "wrong inputs"});
        return;
    }

    res.json({
        'msg': 'your kidney is fine'
    })
});

app.listen(4500);