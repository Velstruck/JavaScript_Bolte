const coding = ["js","py","rb","java","cpp"]


// const values = coding.forEach( (item)=>{ // doesn't return the values
//     return item;
// } )

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num)=> num>4) // returns the values
// console.log(newNums);

const newNums1 = myNums.filter( (num)=> {
    return num>4
}) 
// console.log(newNums1);

const newNums2 = []

myNums.forEach( (num)=>{
    if (num>4) {
        newNums2.push(num);
    }
} )
console.log(newNums2);

