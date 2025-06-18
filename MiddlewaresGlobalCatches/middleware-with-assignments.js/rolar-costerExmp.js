// // ----------------------   without Middleware  --------------------------------

// const express = require("express")
// const app = express()

// // func that returns a boolean if the age of the person is more than 14
// function isOldEnough(age){
//     if(age >= 14){
//         return true;
//     } else {
//         return false;
//     }
// }


// app.get("/ride1", function(req, res){
//     if(isOldEnough(req.query.age)){
//         res.json({
//             msg: "you have successfully ride the ride1"
//         })
//     } else {
//         res.status(411).json({
//             msg: "Sorry you are not of age yet"
//         })
//     }
// })

// app.get("/ride2", function(req, res){
//     if(isOldEnough(req.query.age)){
//         res.json({
//             msg: "you have successfully ride the ride2"
//         })
//     } else {
//         res.status(411).json({
//             msg: "Sorry you are not of age yet"
//         })
//     }
// })


// app.listen(3000)



const express = require("express")
const app = express()

// middleware
function isOldEnoughMiddleware(req, res, next){
    let age = req.query.age;
    if(age<=14){
        res.status(411).json({
            msg: "sorry, you are not of age yet"});
    } else{
        next();
    }
}

app.use(isOldEnoughMiddleware)

app.get("/ride1", function(req, res){
    res.json({
        msg:"u have succesfully completed the ride1"
    })
})

app.get("/ride2", function(req, res){
    res.json({
        msg:"you have successfully completed the ride2"
    })
})

app.listen(4000);