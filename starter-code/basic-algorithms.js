// variables
var hacker1 = "Bart";
var hacker2 = window.prompt("What's your name?");
console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// conditionals
if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker1.length < hacker2.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
  console.log("Wow, you both got equally long names, " + hacker1.length + " characters");
}

// loops
var newString ="";

for (var i = 0; i < hacker1.length; i++) {
  newString += hacker1[i] + " ";
}

var upperCaseString = newString.toUpperCase();
console.log(upperCaseString);


var reverseString="";

for (var i = hacker2.length - 1; i >= 0; i--) {
  reverseString += hacker2[i];
}

console.log(reverseString);
