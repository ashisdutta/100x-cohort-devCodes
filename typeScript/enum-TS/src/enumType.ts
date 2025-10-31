// // Direction

// enum Direction{
//     up,
//     down,
//     left,
//     right
// }

// function doSomething(keyNumber:Direction){
//     console.log("keyNumber for Left", Direction.left)
// }

// doSomething(Direction.left)


// want to change values of enum's

enum Direction{
    up="up",
    down="down",
    left="left",
    right="right"
}

function doSomething(keyNumber:Direction){
    console.log(Direction.up)
}
doSomething(Direction.down)



// use in express
// enum ResponseStatus{
//     success = 200,
//     notFound = 404,
//     Error = 500
// }

// app.get('/', (req, res)=>{
//     if(!req.query.userId){
//         res.status(ResponseStatus).json({})
//     }
// })