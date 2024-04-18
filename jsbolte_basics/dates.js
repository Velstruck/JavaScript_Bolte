let myDate = new Date()
console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());

console.log(typeof(myDate));

let myCreatedDate = new Date(2024,1,22)
// console.log(myCreatedDate.toDateString());
let myTimeStamp = Date.now()

// console.log(myTimeStamp);

let newDate = new Date()
// console.log(newDate.getMonth());
newDate.toLocaleString('default', {
    weekday: "long"
})
console.log(newDate.getDay());