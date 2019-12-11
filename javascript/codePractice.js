//If practice result
var n = 25;
var result = 0;

if (n%2 == 0) {
  result+=10;
}
else {
  result-=n;
}
console.log("If results " + result);

//While loop practice result
var sum = 0;
var loopCounter = 0;
for(loopCounter; loopCounter<=n; loopCounter++ ) {
  sum+=loopCounter;
}
console.log("While loop result " + sum);

//Function Example
function sayHello(myName) {
    if (myName == "Mr. Grinch") {
        alert("You're a mean one, " + myName);
    } else {
        alert('Hello, ' + myName);
    }
}
// sayHello(prompt("What's your name?"));

//Counting all the characters
