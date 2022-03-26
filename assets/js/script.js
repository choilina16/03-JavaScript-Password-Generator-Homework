
var generateBtn = document.querySelector("#generate");

// creating variables for the password generator
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split('');
var upperCase = "ABCEDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var numbers = "0123456789".split('');
var special = "~!@#$%^&*()".split('');

// function for the window prompts given to user for password options
function generatePassword() {

  userChoice = [];

  var passwordLength = window.prompt("How many characters would you like your password to have? Values from 8-128 only.");

  // if user does not put in a number value, if password length is less than 8, is password length is greater than 128, the function ends immediately
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Values only from 8-128 are valid");
    return '';
  } 

  if (confirm("Click OK to confirm including lowercase characters.")) {
    userChoice = userChoice += lowerCase;
  }

  if (confirm("Click OK to confirm including uppercase characters.")) {
    userChoice = userChoice += upperCase;
  }

  if (confirm("Click OK to confirm including numeric characters.")) {
    userChoice = userChoice += numbers;
  }

  if (confirm("Click OK to confirm including special characters.")) {
    userChoice = userChoice += special;
  }

  for (var i = 0; i < passwordLength; i++) {
    var randomPassword = Math.floor(Math.random() * userChoice.length);
    password = password + userChoice[randomPassword];
  }

  return password;
}


// Write password to the #password input
function writePassword() {

  generatePassword();  

  if(generatePassword) {
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");
  
    // displays the password on the screen
    passwordText.value = newPassword;
  }
}

// When user clicks the generate button, it calls on the writePassword function.
generateBtn.addEventListener("click", writePassword);