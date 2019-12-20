function validate() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var contact = document.getElementById("contact").value;
  var x = contact[0];
  console.log(name);
  console.log(email);
  console.log(x);

  if (name == "" || !(isNaN(name)) ) {
    alert ("Please enter a valid name")
    return false;
  }
  else if (validEmail(email) == false) {
    alert ("Please enter valid email with @")
    return false;
  }
  else if (contact == "") {
    alert ("Please select reason of inquiry")
    return false;
  }

  return true;
}

function validEmail(name) {
  for(var i = 0; i < name.length; i++){
    if (name[i] == "@") {
      return true;
    }
  }
  return false;
}
