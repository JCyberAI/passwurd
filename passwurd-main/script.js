// Assignment Code
var generateBtn = document.querySelector("#generate");
//Declared password criteia in variables
var capitalLetters = ["A", "B", "C", "D", "E", "F,", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters =["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//Declared random index selection for each password criteria array in variables
var randomCL = Math.floor(Math.random() * capitalLetters.length);
var randomLL = Math.floor(Math.random() * lowercaseLetters.length);
var randomSC = Math.floor(Math.random() * specialCharacters.length);
var randomNumber = Math.floor(Math.random() * numbers.length);
//Delcared index selection and password criteria variables in arrays
var choices = [capitalLetters, lowercaseLetters, specialCharacters, numbers]
var randomChoices = [randomCL, randomLL, randomSC, randomNumber]


/*Tried to create a function to grab random Captial Letters, Lowercase letters, Special Characters
and numbers using the above index selection arrays the return*/
function generatePassword() {
  switch(choices) {
    case randomChoices:
      return (8);
}

/*Tried to create for-loops to grab random Captial Letters, Lowercase letters, Special Characters
and numbers from the above variables */
for (let i = 0; i < capitalLetters.length; i++) {
  console.log(capitalLetters[index]);
}

for (let i = 0; i < lowercaseLetters.length; i++) {
 console.log(lowercaseLetters[index]);
}

for (let i = 0; i < specialCharacters.length; i++) {
  console.log(specialCharacters[index]);
}

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[index]);
}


/* Wanted to use if statements to show confirms when the generate button was clicked
not when the page was loaded*/
if (generateBtn) {
  confirm("Password will be 8-128 characters.");
  confirm("Password will contain capital and lowercase letters.");
  confirm("Password will contain special letters");
} else {
  alert("Invalid");
}
console.log(generateBtn);

// Write password to the #password input

function writePassword() {
 // Tried to link generatePassword to the above function
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);}