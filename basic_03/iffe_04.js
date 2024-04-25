// IMMEDIATELY INVOKED FUCNTION (IIFE) 

(function chai (){

    console.log(`DB CONNECTED`);

})();

// GLobal scope ke pollution problem hoti hai toh global scope ke declaration ke pollution hatane ko iife use karte hai

( ()=> {
    console.log(`DB CONNECTED 2`);
})()