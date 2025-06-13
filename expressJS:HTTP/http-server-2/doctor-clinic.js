const express = require("express")
const app = express();
app.use(express.json());


let users = [{
    name: 'john',
    kidneys: [{
        healthy :false
    }, {healthy : true}]    // lets say only one patient in the hospital
}]

app.get('/', function(req, res){
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;

    let numberOfHealthyKidneys = 0;
    for(let i=0; i<numberOfKidneys; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})


// user can add a new kidney
app.post('/', function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({healthy: isHealthy})
    res.json({
        msg: "Done!"
    })
})


// PUT - User can replace a kidney, make it healthy  

app.put('/', function(req, res){
    if(isThereAtLeastOneUnhealthyKidneys()){
        for( let i=0; i< users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({})
    }
    else{
        res.status(411).json({
            msg: "you have no bad kidneys"
        })
    }
    
})

// delete - removing all the unhealthy kidneys
app.delete("/", function(req, res){
    if(isThereAtLeastOneUnhealthyKidneys()){
        let newKidneys = [];
    for(let i=0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy : true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg:"done"});
    }
    else{
        res.status(411).json({
            msg:"you have no bad kidneys"
        })
    }
    
})


function isThereAtLeastOneUnhealthyKidneys(){
    let atLeastOneUnhealthyKidneys = false;
    for(let i=0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atLeastOneUnhealthyKidneys = true;
        }
    }
    return atLeastOneUnhealthyKidneys;
}



app.listen(4000);
