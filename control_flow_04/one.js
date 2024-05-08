// if
const isUserLoggedIn = true
const temperatur = 41
// if(temperatur<50){
//     console.log("Less than 50");
// }
// else{
//     console.log("not less than 50");
// }

// <, >, <=, ==, >=, !=

// if (score>100) {
    
// }

const balance =  1000

// if(balance>500) console.log("test");

// if (balance<500) {

//     console.log("less than 500");

// }
// else if(balance<750){
//     console.log("less than 750");
// }
// else if(balance<900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }

const user =  true
const loggedInFromGoogle = false
const loggedInFromEmail = true
const debitCard = true

if(user && debitCard) {   // AND statement
    console.log("allow to buy");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("logged in");
}

