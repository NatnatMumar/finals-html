var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var fname = document.getElementById("fname").value;
var lname = document.getElementById("lname").value;
var email = document.getElementById("email").value;
if ( fname == "Justine Lenart" && lname == "Mumar" && email == "jlbmumar@yahoo.com"){
alert ("Login successfully");
window.location = "About.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("fname").disabled = true;
document.getElementById("lname").disabled = true;
document.getElementById("email").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}