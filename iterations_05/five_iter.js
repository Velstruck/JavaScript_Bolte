// for each loop

const coding = ["js","py","rb","java","cpp"]

coding.forEach( function (item) {
    // console.log(item);
} )

coding.forEach( (item)=>{ //console.log(item);

} )

// function printme(item) {
//     console.log(item);
// }
// coding.forEach(printme)


coding.forEach( (item,index,arr)=>{
    // console.log(item,index,arr);
} )


const myCoding =[
    {
        languageName:"JavaScrpit",
        languageFileName: "js"
    },
    {
        languageName:"Java",
        languageFileName: "java"
    },
    {
        languageName:"Python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item)=>{  //item is every object in this array
    console.log(item.languageName);
} )