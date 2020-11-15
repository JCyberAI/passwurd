// Assignment Code
var generateBtn = document.querySelector("#generate");
const capitalLetters: ["A", "B", "C", "D", "E", "F,", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercaseLetters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const specialCharacters: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
const numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


function randomSelector() {
  for (let i = 0; i < 25; i++) {
    var randomCL = Math.floor(Math.random() * capitalLetters.length);
  }

  for (let i = 0; i < 25; i++) {
   var randomLL = Math.floor(Math.random() * lowercaseLetters.length);
  }

  for (let i = 0; i < 9; i++) {
    var randomSC = Math.floor(Math.random() * specialCharacters.length);
  }

  for (let i = 0; i < 10; i++) {
    var randomNumber = Math.floor(Math.random() * numbers.length);
  }
  console.log(randomSelector)
}

if (generateBtn) {
  confirm("Password will be 8-128 characters.");
  confirm("Password will contain capital and lowercase letters.");
  confirm("Password will contain special letters");
} else {
  alert("Invalid");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);