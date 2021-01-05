document.getElementById("submit").addEventListener("click", cLick); 
function cLick() {
let text = document.getElementById("answer").value;
let r = text/2;
let a = 6.28*r
alert ("area is: " +a)
let c = 3.14*r**2
alert ("circumference is: " +c)
}