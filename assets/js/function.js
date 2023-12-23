
// factory function which is used to reduce the repetition of the code 
 function createperson(name){
    return {
        name,
        age: 21,
        greeting() {
            console.log(`${this.age} ${name}`);
        }
    }


}
// let kithi = createperson("krithi");
// kithi.greeting();


// empty object
// let x = {};
// let x1 = new Object();

// literals

// string literal same as number and boolean
// let x = "krithi";

// default constructor of object accessing each and every element and the output will be in array
// let x = new String("krithi");
// let x = new String(prompt("enter name"));
// for (i = 0; i <= x.length; i++){
//     if (x[i] === "i") {
//         alert("printed");
//     }
//     else {
//        alert("nothing");
//     }

// }