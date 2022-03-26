// loops 2 times....and then doesn't return random items :O


var generateBtn = document.querySelector("#generate");

// creating variables for the password generator. Split makes it so that we don't have to put each letter in "".
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split('');
var upperCase = "ABCEDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var numbers = "0123456789".split('');
var special = "~!@#$%^&*()".split('');


// function for the window prompts given to user for password options
function generatePassword() {

  // window prompt will show asking user to to input a number between 8-128
  var passwordLength = window.prompt("How many characters would you like your password to have? Values from 8-128 only.");

  // if user does not put in a number value, if password length is less than 8, is password length is greater than 128, the function ends immediately.
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Values only from 8-128 are valid");
    return '';
  } 

  var userChoices =[];

  // if you click OK to lowercases, then it's added to the userChoice.
  // += adds the userChoice to the right
  var lowerCaseChoice = confirm("Click OK to confirm including lowercase characters.");
    if (lowerCaseChoice) {
      userChoices = userChoices += lowerCaseChoice;
  }

  // if you click OK to uppercases, then it's added to the userChoice.
  var upperCaseChoice = confirm("Click OK to confirm including uppercase characters.");
    if (upperCaseChoice) {
      userChoices = userChoices += upperCaseChoice;
    }

  // if you click OK to numerics, then it's added to the userChoice.
  var numberChoice = confirm("Click OK to confirm including numeric characters.");
    if (numberChoice) {
      userChoices = userChoices += numberChoice;
  }

  // if you click OK to special characters, then it's added to the userChoice.
  var specialChoice = confirm("Click OK to confirm including special characters.");
    if (specialChoice) {
      userChoices = userChoices += specialChoice;
  }

  // for loop to randomize everyhthing
  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var newPassword = Math.floor(Math.random() * userChoices.length);
    password = password + userChoices[newPassword];
  }
  return password;
}


// Write password to the #password input
function writePassword() {

  generatePassword();  

  if(generatePassword) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    // displays the password on the screen
    passwordText.value = password;
  }
}

// When user clicks the generate button, it calls on the writePassword function.
generateBtn.addEventListener("click", writePassword);