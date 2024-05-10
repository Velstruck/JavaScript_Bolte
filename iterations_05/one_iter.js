// for 

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
        // console.log("5 is best number");
    }
    // console.log(i);
    
}
// for(let i=1;i<=10;i++){
//     console.log(`outer loop value: ${i}`);
//     for(let j=1;j<=10;j++){
//         // console.log(`Inner loop value ${j}and outer loop value ${i}`);
//         console.log(i + '*' + j + ' = ' + i*j);
//     }

// }

let myarr = ["Flash", "Batman", "Superman"]
// console.log(myarr.length)
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    // console.log(element);
    
}

// Break and Continue

// for (let index = 0; index < 20; index++){
//     if(index==5){
//         console.log(`Detected 5`);
//         break;
//     }
//    console.log(`Value of i is ${index}`);
// }
for (let index = 0; index < 20; index++){
    if(index==5){
        console.log(`Detected 5`);
        continue; // continue marks up upto one exception and then continues the loop 
    }
   console.log(`Value of i is ${index}`);
}
