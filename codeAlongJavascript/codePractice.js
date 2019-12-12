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
var portalString = "The cake is a lie";
countingCharacters(portalString, "e");

function countingCharacters(stringToCount, characterToFind) {
  var x = 0;
  var count = 0;

  for (x; x < stringToCount.length; x++) {
    if (stringToCount[x] == characterToFind) {
      count += 1;
    }
  }
  console.log ("String to search in: " + stringToCount);
  console.log ("Character to find: " + characterToFind);
  console.log("Number of times the character appears: " + count);
}

//Counting 2 character
function counting2Char(str, search) {

  var count = 0;
  var numChars = search.length;
  var lastIndex = str.length - numChars;

  var index = 0;
  for (index; index <= lastIndex; index++) {
    var current = str.substring(index, index + numChars);
    if (current == search) {
      count++;
    }
  }
  return count;
}
console.log(counting2Char("xxaxxxbxx", "xx"));

//Rolling Dice (Math.random)
function rollDice(numside) {
  return Math.ceil(Math.random() * numside);
}

for (var i = 0; i < 100; i++) {
  // console.log(rollDice(10));
}

//Code Practice: Defining Function
function addTwoNumbers(firstNumber, secondNumber) {
  result = firstNumber + secondNumber;
  return result;
}
console.log(addTwoNumbers(10, 9));
console.log("-----------------------------");

//Array
//Comparing Element
var testArray = [0, 1, 1, "1", 3, "311"];
for (var i = 0; i < testArray.length - 1; i++) {
  var currentEle = testArray[i];
  var nextEle = testArray[i + 1];

  console.log("Testing " + currentEle + " and " + nextEle + "(greater than): " + (currentEle <= nextEle));
  console.log("Testing " + currentEle + " and " + nextEle + "(less than or equal to): " + (currentEle <= nextEle));

  if (currentEle == nextEle) {
    console.log("Testing " + currentEle + " and " + nextEle + "(strictly equal to): " + (currentEle === nextEle));

    if (currentEle !== nextEle) {
      console.log(currentEle + " is " + typeof(currentEle));
      console.log(nextEle + " is " + typeof(nextEle));
    }
    else {
      console.log("Testing " + currentEle + " and " + nextEle + "(equal to): false");
    }
  }
}

//Sum of Array
var array = [17, 42, 311, 5, 9, 10, 28, 7, 6];
var sum = 0;
for (var i = 0; i < array.length; i++) {
  sum += array[i];
}
console.log("sum of array is " + sum);

//Code Practice: Find Max
arr = [17, 42, 311, 5, 9, 10, 28, 7, 6];
console.log(findMax(arr))

function findMax(arr) {
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
