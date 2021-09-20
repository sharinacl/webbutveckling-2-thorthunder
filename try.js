
//this is the java script code for the date in the footer
var d = new Date();
document.getElementById("datum").innerHTML = d;


//this is the javascript validation form code
function validateForm() {
    let x = document.forms["forM"]["email"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;
    }
  }









