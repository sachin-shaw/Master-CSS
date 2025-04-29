const user = document.getElementById("user_input");
console.log(user);

function One() {
  user.textContent += 1;
}
function Two() {
  user.textContent += 2;
}
function Three() {
  user.textContent += 3;
}
function Four() {
  user.textContent += 4;
}
function Five() {
  user.textContent += 5;
}
function Six() {
  user.textContent += 6;
}
function Seven() {
  user.textContent += 7;
}
function Eight() {
  user.textContent += 8;
}
function Nine() {
  user.textContent += 9;
}
function Zero() {
  user.textContent += 0;
}
function Add() {
  user.textContent += "+";
}
function Sub() {
  user.textContent += "-";
}
function Multiply() {
  user.textContent += "*";
}
function Divide() {
  user.textContent += "/";
}
function Reset() {
  user.textContent = "";
}
function Evaluate() {
  let ans = eval(user.textContent);
  user.textContent = ans;
}
