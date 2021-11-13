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
// var generateBtn = document.querySelector("#generate");
const symbolCharacters = "!#$%&'()*+,-./:;<=>?@{^_`{|}~";
const generateButton = document.getElementById('generateBtn')
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




//define the password generator button.
function generatePassword() {

  var length = prompt("Enter a number from 8 to 128 for the password length"); // The prompts the generate the password

  var lowercase = confirm("Would you like to add a lower case letter?");

  var uppercase = confirm("Would you like to add a uppercase letter?");

  var symbol = confirm("Would you like to add a symbol?");


  var numbers = confirm("Would you like to add numbers?");

  var minCount = 0; // min count for all ther characters

  var minLowercase = "";
  var minUppercase = "";
  var minSymbolcharacters = "";
  var minNumbers = "";

  var functionArray = {
    getLowercase: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));

    },
    getUppercase: function(){
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));

    },
    getSymbolCharacters: function (){
    return symbolCharacters[Math.floor(Math.random() * symbolCharacters.length)]

    },
    getNumbers: function (){
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));

    },
  

};

if (lowercase === true){
  minLowercase = functionArray.getLowercase();
  minCount++;
}

if (Uppercase === true){
  minUppercase = functionArray.getLUppercase();
  minCount++;
}

if (symbol === true){
  minSymbolcharacters = functionArray.getSymbolCharacters();
  minCount++;
}

if (Numberscase === true){
  minNumberscase = functionArray.getNumberdcase();
  minCount++;
}

var randomPasswordGenerated = "";

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

}


