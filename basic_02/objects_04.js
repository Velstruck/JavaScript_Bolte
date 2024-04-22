const tinderUser= {}

// const tinderUser= new Object()
tinderUser.id="123abc"
tinderUser.name="Sam"
tinderUser.isLoggedIn=false

const regularUser ={
    email: "someone@gmail.com",
    fullname: {
        userfullname:{
            
        firstname: "Vasu",
        lastname: "Dev"
    
        }
    }

}

// console.log(regularUser.fullname.userfullname);

const obj1 ={1: "a", 2:"b"}
const obj2 ={3: "c", 4:"d"}
const obj3 ={5:"e", 6:"f" }

const obj4 = Object.assign({},obj1,obj2,obj3) //Interesting and important syntax
// console.log(obj4);

// const obj5 = {...obj1, ...obj2, ...obj3}
// console.log(obj5);
const users=[
    {
        id:1,
        email:"vasu@gmail.com"
    },
    {
        id:2,
        email:"dev@gmail.com"
    },
    {
        id:22,
        email:"asda@gmail.com"
    },    {
        id:45,
        email:"sadasd@gmail.com"
    },
    {
        id:11,
        email:"vu@gmail.com"
    }
]

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //console.log(Object.values(tinderUser)); can also be used
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course ={
    coursename:"jsInHindi",
    price:"999",
    courseInstructor:"vasu"
}

const {courseInstructor:Instructor}= course
console.log(Instructor);
