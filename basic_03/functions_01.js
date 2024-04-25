

function add2nums(number1,number2){
    return number1 + number2
}

// const result = add2nums(3,6)

// console.log(result);

function userLoggedIn(username){
    if(username===undefined){
        console.log("please enter a username");
    }
    else{
    return`${username} Just Logged In`
    }
}
console.log(userLoggedIn());  