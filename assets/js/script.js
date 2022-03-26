// code keeps looping the prompts...and I don't know why =_=

var generateBtn = document.querySelector("#generate");

// creating variables for the password generator. Split makes it so that we don't have to put each letter in "".
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split('');
var upperCase = "ABCEDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var numbers = "0123456789".split('');
var special = "~!@#$%^&*()".split('');


// function for the window prompts given to user for password options
function generatePassword() {

  var userChoices =[];

  // window prompt will show asking user to to input a number between 8-128
  var passwordLength = window.prompt("How many characters would you like your password to have? Values from 8-128 only.");

  // if user does not put in a number value, if password length is less than 8, is password length is greater than 128, the function ends immediately.
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Values only from 8-128 are valid");
    return '';
  } 

  // if you click OK to lowercases, then it's added to the userChoice.
  // += adds the userChoice to the right
  if (confirm("Click OK to confirm including lowercase characters.")) {
    userChoices = userChoices += lowerCase;
  }

  // if you click OK to uppercases, then it's added to the userChoice.
  if (confirm("Click OK to confirm including uppercase characters.")) {
    userChoices = userChoices += upperCase;
  }

  // if you click OK to numerics, then it's added to the userChoice.
  if (confirm("Click OK to confirm including numeric characters.")) {
    userChoices = userChoices += numbers;
  }

  // if you click OK to special characters, then it's added to the userChoice.
  if (confirm("Click OK to confirm including special characters.")) {
    userChoices = userChoices += special;
  }

  // for loop to randomize everyhthing
  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomPassword = Math.floor(Math.random() * userChoice.length);
    password = password += userChoices[randomPassword];
  }
  return password;
}


// Write password to the #password input
function writePassword() {

  generatePassword();  

  if(generatePassword) {
    var Password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    // displays the password on the screen
    passwordText.value = Password;
  }
}

// When user clicks the generate button, it calls on the writePassword function.
generateBtn.addEventListener("click", writePassword);