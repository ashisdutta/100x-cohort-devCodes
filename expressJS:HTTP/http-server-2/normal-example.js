const express = require("express")

const app = express()


function calculateSum(n){
    let sum = 0;
    for(let i=1; i<=n;i++){
        sum += i;
    }
    return sum;
}


app.get('/', function(req, res){
    const n = req.query.n;
    const ans = calculateSum(n)
    res.send(ans);
})


app.listen(3000);
