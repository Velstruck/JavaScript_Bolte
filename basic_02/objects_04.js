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

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);