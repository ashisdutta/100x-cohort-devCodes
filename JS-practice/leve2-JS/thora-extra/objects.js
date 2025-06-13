// singleton

// object literals

const mySymbol = Symbol("key1")

const JsUser = {
    name: "Ashis",
    "full name": "Ashis Dutta",
    age: 20,
    email: "ash@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySymbol]: "mykey1"

}

// console.log(JsUser[mySymbol])
// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser["full name"]);

// JsUser.email = "Ashis@chatgpt.com";
// console.log(JsUser);
// // Object.freeze(JsUser);
// JsUser.email = "nomail.com";
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello JS user");
}

JsUser.greeting2 = function(){
    console.log(`Hello Js user, ${this["full name"]}`);
}

JsUser.greeting();
JsUser.greeting2();
   