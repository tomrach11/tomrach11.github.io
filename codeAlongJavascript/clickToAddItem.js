function clearErrors() {
  for (var loopCounter = 0;
  loopCounter < document.forms["numberFun"].elements.length;
  loopCounter++) {
    if (document.forms["numberFun"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
      document.forms["numberFun"].elements[loopCounter].parentElement.className = "form-group";
    }
  }
}

function resetForm() {
  clearErrors();
  document.forms["numberFun"]["num1"].value = "";
  document.forms["numberFun"]["num2"].value = "";
  document.getElementById("results").style.display = "none";
  document.getElementById("submitButton").innerText = "Submit";
  document.getElementById("num1").focus();
}

function validateItems() {
  clearErrors();
  console.log("hello");
  var num1 = document.forms["numberFun"]["num1"].value;
  var num2 = document.forms["numberFun"]["num2"].value;
  if (num1 == "" || isNaN(num1)) {
    alert("Number 1 must be entered with number.");
    document.forms["numberFun"]["num1"].parentElement.className = "form-group has-error";
    document.getElementByID("num1").focus();
    return false;
  }
  if (num2 == "" || isNaN(num2)) {
    alert("Number 2 must be entered with number.");
    document.forms["numberFun"]["num2"].parentElement.className = "form-group has-error";
    document.getElementById("num2").focus();
    return false;
  }
  document.getElementById("results").style.display = "block";
  document.getElementById("submitButton").innerText = "Recalculate";
  document.getElementById("addResult").innerText = Number(num1) + Number(num2);
  document.getElementById("subtractResult").innerText = num1 - num2;
  document.getElementById("multiplyResult").innerText = num1 * num2;
  document.getElementById("divideResult").innerText = num1 / num2;
  return false;
}
