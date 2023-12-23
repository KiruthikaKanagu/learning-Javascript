
//cloning means copy the data

let user = {
    name: "krithi",
    age: 21,
    DOB:8 / 10 / 2001,
}

// example-1
let another = Object.assign({}, user);//assign->assign in the empty object
// ({},user) -> means copy the user and paste it in empty object 

// example-2
let newUser = {
    details: "located in erode",
    clg: "vcet",
}
Object.assign(newUser, user);

// example 3
let newUser2 = { ...user }; 
// the three dots means -->spread operator which is used for cloning

console.log(newUser2);