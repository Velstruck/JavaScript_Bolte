// array reduce method

const numbers=[1,2,3]

// const myTotal=numbers.reduce(function (acc,currVal){
//     console.log(`Accumulator: ${acc} and currVal: ${currVal}`);
//     return acc+currVal
// },0)

// // console.log(myTotal);

const myTotal=numbers.reduce( (acc,currVal)=> acc+currVal,0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName:"Js Course",
        price:2999
    },
    {
        itemName:"Mobile Dev",
        price:5699
    },
    {
        itemName:"Data Science",
        price:12999
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(priceToPay);