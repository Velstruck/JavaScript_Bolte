//singleton

//Object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Vasu",
    age: 21,
    [mySym]: "mykey1",
    Location: "Delhi",
    isLoggedin: false,
    "email yes":"Vasudevfbp7@gmail.com",
    lastLogginDays:["Monday","Saturday"]
}
// 9:33
// console.log(JsUser["email yes"]);
// Object.freeze(JsUser)
// console.log(JsUser[mySym]);

// JsUser["email yes"]="chatgpt@gmail.com"
// console.log(JsUser["email yes"]);


JsUser.greeting = function(){
    console.log("Hi JS User");
}
JsUser.greetingTWo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTWo());