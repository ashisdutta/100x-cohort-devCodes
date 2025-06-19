const jwt = require("jsonwebtoken")
// decode , verify, generate

const value = {
    name:"AshisDutta",
    accountNumber : 123123123
}

// jwt
//const token = jwt.sign(value, "secret");
//console.log(token);
// this token has been generated using this secret, and 
// hence this token can only be verified using this secret

const token = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQXNoaXNEdXR0YSIsImFjY291bnROdW1iZXIiOjEyMzEyMzEyMywiaWF0IjoxNzUwMjIwMzY4fQ.UvrHyQY2LFcKfZ1UNdCzUrI5E2F465IVWYXUUoY_z7g", "secret")
