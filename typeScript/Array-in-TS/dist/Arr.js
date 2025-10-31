"use strict";
// Given an array of positive integers as input, return the maximum value in the array
// type numberArr = number[]
Object.defineProperty(exports, "__esModule", { value: true });
function legal(users) {
    const legalUsers = users.filter(e => e.age > 18);
    console.log(legalUsers);
}
legal([{ name: "Ash", age: 20 }, { name: "puja", age: 17 }]);
//# sourceMappingURL=Arr.js.map