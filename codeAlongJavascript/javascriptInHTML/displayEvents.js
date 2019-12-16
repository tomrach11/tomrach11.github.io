// var start = 4;
// var end = 20;
// var step = 3;
// var arr = [];
//
// for (var i = start; i <= end; i += step) {
//   if (i % 2 == 0) {
//     arr[arr.length] = i;
//     console.log(i);
//   }
// }
// console.log(arr);

//start function

function results() {
  console.log("entering function");
  var start = Number(document.getElementById("start").value);
  var end = Number(document.getElementById("end").value);
  var step = Number(document.getElementById("step").value);

  for (var i = start; i <= end; i += step) {
    if (i % 2 == 0) {
      document.getElementById("showResult").innerText += i + "<br> ";
    }
  }
  document.getElementById("startNum").innerText = start;
  document.getElementById("endNum").innerText = end;
  document.getElementById("stepNum").innerText= step;
  document.getElementById("displayResult").style.display = "none";


  return false;
}
function validate() {
  var start = Number(document.getElementById("start").value);
  var end = Number(document.getElementById("end").value);
  var step = Number(document.getElementById("step").value);
  //validate not number
  if (isNan(start) && isNan(end) && isNaN(step)) {
    alert("Please enter number only !!");
  }
  if (step <= 0) {
    alert("Step has to be more than 0");
    document.getElementById("step").value = "";
    document.getElementById("step").focus;
  }
  if (end <= start) {
    alert("Ending Number Has to be greater than starting number");
    document.getElementById("ending").value = "";
    document.getElementById("ending").focus();
  }
  result();
}
