"use strict";
// // Direction
Object.defineProperty(exports, "__esModule", { value: true });
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
var Direction;
(function (Direction) {
    Direction["up"] = "up";
    Direction["down"] = "down";
    Direction["left"] = "left";
    Direction["right"] = "right";
})(Direction || (Direction = {}));
function doSomething(keyNumber) {
    console.log(Direction.up);
}
doSomething(Direction.down);
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
//# sourceMappingURL=enumType.js.map