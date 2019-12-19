function play(){
  var bet = Number(document.getElementById("money").value);
  var rollCount = 0;
  var rollCountAmountWon = 0;
  var highest = 0;

  var money = bet;
  while (money > 0) {
    var num = rollDice() + rollDice();
    if (num == 7) {
      money += 4;
      rollCount += 1;
        if (money >= highest) {
          rollCountAmountWon = rollCount;
          highest = money;
        }
    }
    else {
      money -= 1;
      rollCount += 1;
    }
  }
  if (validate(bet)) {
    document.getElementById("displayResult").style.display = "block";
    document.getElementById("startingBet").innerText = bet;
    document.getElementById("rollCount").innerText = rollCount;
    document.getElementById("highest").innerText = highest;
    document.getElementById("rollCountAmountWon").innerText = rollCountAmountWon;
  }
  console.log(rollCount);
  console.log(rollCountAmountWon);
  console.log(highest);

}

function validate(bet) {
  if (bet < 1) {
    document.getElementById("displayResult").style.display = "none";
    alert("Please bet more than 1$");
    return false;
  }
  return true;
}
function rollDice() {
  return Math.floor(Math.random()*6+1);
}
