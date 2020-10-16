// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generate password
function generatePassword(){
  var length = promptForNumber();
  var confirmLower = lowercasePrompt();
  var confirmUpper = uppercasePrompt();
  var confirmChar = specialCharPrompt();
  var confirmNumber= numberPrompt();
}


//finding out how many characters the user wants in the password
function promptForNumber(){
  var length = prompt("Enter a number between 8-128");
  if (length >= 8 && length <= 128){
    alert("Perfect! Your password will have " + length + " characters.");
    return;
  } else if (isNaN(length)){
    alert("That's not a number. Please enter a number from 8-128.");
    promptForNumber();
  } else {
    alert("Your number is not in range.");
    promptForNumber();

  };
  }

//Defining parameers 
function lowercasePrompt() {//shouldn't need to be function but how do i stop them running immediately 
  var confirmLower = confirm("Do you want to include lower case characters?");
    console.log(confirmLower);
}

function uppercasePrompt() {
  var confirmUpper = confirm("Do you want to include upper case characters?");
    console.log(confirmUpper);
  } 

function numberPrompt() {
  var confirmNumber = confirm("Do you want to include number characters?");
    console.log(confirmNumber);
  } 

function specialCharPrompt() {
  var confirmChar = confirm("Do you want to include special characters?");
    console.log(confirmChar);
  } 


//generating values 
function getRandomUpperCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
 };

 function getRandomLowerCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
};

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
};

function getRandomSymbol(){
  var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
  return symbol[Math.floor(Math.random()*symbol.length)];
};