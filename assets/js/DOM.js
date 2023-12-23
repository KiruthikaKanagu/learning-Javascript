
// let a = prompt("enter title key");
// document.title = "welcome " + a;
// console.log(document.title);

// console.log(document.children[0].outerText);

// inside the div how to access the content
// console.log(document.body.children[0].children[1].textContent);

// inside the div inside another div accessing
// console.log(document.body.children[0].children[2].children[0].textContent);


// this will give an articular input tag attribute name
// const inputEl = document.getElementsByTagName('input');
// console.log(inputEl[0].name);

// getting input tag using queryselector
// const inputEl = document.querySelector("input[type=text]")
// console.log(inputEl.name);

// accesing the ul element
// const ulElement = document.querySelectorAll("ul > li");
// let joinedText = " "
// for (const key of ulElement) {
//     let eleNew = key.innerText;
//     joinedText = joinedText + eleNew + " , ";
// }
// joinedText = joinedText.slice(0, -2);
// console.log(`Hey! I Like these kind of enternainment:${joinedText}`);

// onlick this is an event when the method start with prefix onclick it is an event

// const bodyEl = document.querySelector("body");
// console.log(bodyEl);
// bodyEl.addEventListener("contextmenu", () => {
//     alert("perfectly works")
// })

// target ->which means what actions we performed

// bodyEl.addEventListener("contextmenu", (e) => {
//     console.log(e)
// })

// checking the input type
const inputEl = document.querySelector("input")
const btnEl = document.querySelector("button")
const display = document.querySelector("h5");
const headEl = document.querySelector("h3")
btnEl.addEventListener("click", () => {
    const inputName = inputEl.value.trim();
    if (inputName.length > 3 && inputName.length < 20) {
        alert("ok");
        // return;

        display.innerText = `helo ${wordToCapitalize(inputName)}`
        display.style.display = "block"
    }
    else {
        alert("I can't get name")
    }

})


function wordToCapitalize(words) {
    // split the words
    const wordsWithSpaces = words.split(" ");

    const captilizeWords = wordsWithSpaces.map((name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    });

    return captilizeWords.join(" ");
}

// apply css 
const bgChange = document.querySelector("p");
bgChange.style.fontSize = "20px"
const outer = document.querySelector("body#outer")
bgChange.addEventListener("click", () => {
    outer.style.backgroundColor = `#${((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")}`;
})



// document.addEventListener('DOMContentLoaded', () => {
//     display.style.display = "none";
//     // headEl.className = "text-red-500"
//     // adding css using tailwind
//     // by the way of using claslist to use CRUD operation
//     headEl.classList.add("text-green-500")


//     // after 5 sec it will remove
//     setTimeout(() => {
//         headEl.classList.remove("text-green-500")
//     }, 5000)
// })


// create dynamicaly one div container and put class and css
document.addEventListener('DOMContentLoaded', () => {
    var newElement = document.createElement("h3");
    newElement.textContent = "hello Krithika";
    newElement.className ="mx-auto max-w-xl bg-gray-50 m-10 p-5 text-green-500 text-semibold"
    var containerEl = document.getElementById("container");
    containerEl.appendChild(newElement)
})


