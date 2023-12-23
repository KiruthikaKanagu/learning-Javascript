// switch case if user check the condition mean we using true inside the switch statement
let userInput = prompt("Enter your budget for choosing a mobile");
switch (true) {
    case (userInput >= 10000 && userInput < 60000):
        {
            console.log("Buy an android mobile");
            break;
        }

    case (userInput >= 60000):
        {
            console.log("Buy an iphone");
            break;
        }

    case (userInput < 10000 && userInput >= 1000):
        {
            console.log("Buy an basic mobile");
            break;
        }
    default:
        {
            console.log("oops! ....u dont have enough budjet");
            break;
        }
} 