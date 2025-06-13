const express = require('express')
const app = express()
app.use(express.json())


app.post('/health-checkup', function(req, res){
    // kidneys = [1,2]
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length; // exprecting array of numbers
    res.send('you have '+ kidneyLength + 'kidneys');
})

// global catch
app.use(function(err, req, res, next){
    res.json({
        mag: "something went wrong in the server."
    })
})

app.listen(1000, () => {
    console.log("your port no. is 1000")
})
