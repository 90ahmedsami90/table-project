var userInput = prompt("Enter a number to print its multiplication table:");
if (userInput =>  0 ) {
    
    for (var i = 1; i <= 10; i++) {
        console.log(userInput + " x " + i + " = " + (userInput * i));
    }
} else {
    console.log(10 + " x " + i + " = " + (10 + i));
}
