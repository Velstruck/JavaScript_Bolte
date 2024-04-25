const user = {
    username:"Vasu",
    price:999,
    welcomemessage:function(){
        console.log(`${this.username}, Welcome to the website`);
        console.log(this);
    }

}

// user.welcomemessage()
// user.username ="Sam"
// user.welcomemessage()

// console.log(this);

// function chai() {
//     let username= "Vasu"
//     console.log(this.username); // works only in objects nit in functions

// }
// chai()

// const chai = function (){
//     let username = "Vasudev"
//     console.log(this.username);
    
// }
// chai()

const chai = ()=>{
    let username = "Vasudev"
    console.log(this);
    
}
// chai()

// const add2 = (num1,num2)=>{
//     return num1+num2
// }

// console.log(add2(3,4));

const add2 = (num1,num2) => (num1 + num2)// same output

console.log(add2(3,4));

const add3 = (num1,num2) => ({username:"Vasudev"}) // to return object wrap it in parenthesis

console.log(add3(3,4));

