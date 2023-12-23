//if-else practise section
// -------------------------------------------------------------------
// 16-20 ->teen
// 21-40 -->adult
// 41-50 -->uncle/Aunty
// below 16 -->kidoo
// above 50 -->boomer
// nothing number ---> I can't understand give ur age as number;
let age = prompt("print age:");
if (age >= 16 && age <= 20) {
    console.log("Hii Teenagers!");
}
else if (age >= 21 && age <= 40) {
    console.log("Adults!");
}
else if (age >= 41 && age <= 50) {
    console.log("Uncle/Aunty!");
}
else {
    if (age < 16) {
        console.log("hi kiddo!");
    }
    else if (age > 50) {
        console.log("boomers");
    }
    else {
        console.log('I can\'t understand give ur age as number');
    }
}
// -----------------------------------------------------------------------------------

// enter proper number if user give string instead of number it show an errror message

const favnum=prompt("enter");
const fav=parseInt(favnum);
if(isNaN(fav)){ //isNaN is method used for not a number
    console.log("enter proper number");
}
else{
    console.log(fav);
}
// -------------------------------------------------------------------------------------

// if-else in real time
let iskriti = true;
if (iskriti) {
    let q1 = prompt("What is your favorite?");
    if (q1) {
        let q2 = prompt("Why is it your favorite?");
        if (q2) {
            let q3 = alert("Cool");
        }
        else {
            alert("Please enter why it is your favorite.");
        }
    }
    else {
        alert("Please enter your favorite.");
    }
}
//   --------------------------------------------------------------------------

// checking typeof
// let age = "krithi"
// console.log(typeof (age));
// --------------------------------------------------------------
