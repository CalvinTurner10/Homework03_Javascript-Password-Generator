// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page



// Assignment Code
var generateBtn = document.querySelector("#generate"); 
const symbolCharacters = "!@#$%^&*()"; //defined the symbols as constants
const generateButton = document.getElementById('generateBtn')

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




//define the password generator button.
function generatePassword() {

 
  var length = 0
  while ((length<8 || length > 128 ) || Number.isInteger(length)=== true){
   var length = prompt("Chose a number between 8 to 128 chararcter"); // The prompts the generate the password
  }

  var lowercase = confirm("Would you like to add a lower case letter?");

  var uppercase = confirm("Would you like to add a uppercase letter?");

  var symbol = confirm("Would you like to add a symbol?");


  var numbers = confirm("Would you like to add numbers?");

  var minCount = 0; // min count for all ther characters

  var minLowercase = "";
  var minUppercase = "";
  var minSymbolCharacters = "";
  var minNumbers = "";

  var functionArray = {
    getLowercase: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));// Math used to get a random number and floor it to be round number.

    },
    getUppercase: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));

    },
    getSymbolCharacters: function () {
      return symbolCharacters[Math.floor(Math.random() * symbolCharacters.length)]

    },
    getNumbers: function () {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));

    }


  };
// condition statements for the passwork match up.
  if (lowercase === true) {
    minLowercase = functionArray.getLowercase();
    minCount++;
  }

  if (uppercase === true) {
    minUppercase = functionArray.getUppercase();
    minCount++;
  }

  if (symbol === true) {
    minSymbolCharacters = functionArray.getSymbolCharacters();
    minCount++;
  }

  if (numbers === true) {
    minNumberscase = functionArray.getNumbers();
    minCount++;
  }

  var randomPasswordGenerated = ""
  console.log;

  for (let i = 0; i < (parseInt(length) - minCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;
  }
  randomPasswordGenerated += minLowercase;
  randomPasswordGenerated += minUppercase;
  randomPasswordGenerated += minSymbolCharacters;
  randomPasswordGenerated += minNumbers;

  return randomPasswordGenerated;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;




