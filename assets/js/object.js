// object and manipulating the object

const details = {
    firstName: "kiruthika",
    lastName: "kanagaraj",
     age:23,
    cgpa: 8.88,
    phonenumber: 89889393999,
    languages: ['hinid', 'tamil', 'english'],
    hslcscore() {
        const name = "kkn";
        const score = 75;
        console.log(`${this.firstName + " " + this.lastName} secured a ${score} percentage mark in ${name}`)
    },
    sslcscore() {
        const name = "kkn";
        const score = 95;
        return `${this.firstName + " " + this.lastName} secured a ${score} percentage mark in ${name}`
    },
    address() {
        const contact = true;
        if (contact == true) {
            console.log(`${this.firstName} ${this.phonenumber} is located in Erode`);
        }
        else{
            console.log("something went wrong");
        }
    },
    contactDetails:{
    fulladdress: function () {
            return `${details.firstName}, ${details.lastName}`;
        }

    }
}

// CRUD OPERATION
// create
details['newvalue'] = "new value";

// update
details.cgpa = 9.99;

// delete
delete details.lastName;

// check if the data in the object
console.log('cgpa' in details);

// check the address in the function
console.log(details.address());

//  check the object iniside the function
   console.log(details.contactDetails.fulladdress());


// update
  function idea() {
       let isExist1 = 'firstName' in details;
        let isExist2 = 'lastName' in details;


        if (isExist1 == true && isExist2 == true) {
            details.lastName="vanitha";
            let newName=details.lastName;
            console.log(`${newName}Valid property name given`);
        } else {
            console.log("Invalid property name");
        }
    }
idea();


// read data using for in loop
for (const key in details) {
    if (typeof details[key]=="string" || typeof details[key] == "number") {
      console.log(`${key}:${details[key]}`);

    }
}

// read data in the function
    for (const key in details) {
        if (typeof details[key] === "function") {
            const result = details[key](); // Capture the result
            if (result) {
                console.log(result);
            }
        }
}
    
// if user didnt give any value means in output it shows undefined to avoid this we using nullish coalescing operator(?? "")
const language=['sam',];
const first=language[0] ?? "";
const last=language[1] ?? "";
const full=language[0]+language[1];
console.log(full);


// adding values to an array
details.languages.push("repeat");
console.log(details);


//how to get a current age using function

details.age=function(){
    birthyear=new Date(2002,8,10);

     currentYear=new Date();
     myage=currentYear.getFullYear()- birthyear.getFullYear()
     return myage;
}
console.log(details.age());

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// USER GIVE ONLY INPUT NUMBER
// const num1=+prompt("enter number");
// console.log(num1);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////