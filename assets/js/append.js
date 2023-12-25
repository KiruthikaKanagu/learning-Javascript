const ulPlacesEl = document.querySelector("ul#places")
// const place=pune
// ulPlacesEl.append(place);
const h1El = document.createElement("li");
h1El.className = "text-gray-500 underline"
h1El.innerText = "pune"
ulPlacesEl.append(h1El);


// if i click the button it shows thankyou message
const containerEl = document.querySelector("#show")
const viewbtnEl = document.querySelector("#btn-view > button")
const greetMsg = document.createElement("p");
greetMsg.innerText = "Thankyou for Your Valuable Time!!😍";
greetMsg.className = "max-w-xl mx-auto px-4 py-2 bg-white text-semibold text-green-500 text-center";
const innerEl = document.querySelector("#inner");

viewbtnEl.addEventListener("click", () => {
    // Hide the inner content
    innerEl.style.display = "none";
    // Append the thank you message
    containerEl.appendChild(greetMsg);
    viewbtnEl.style.display ="none"
});


