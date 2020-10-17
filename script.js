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


// Various Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


//Generate password
function generatePassword(){
  var length = promptForNumber();
  var confirmLower;
  var confirmUpper;
  var confirmChar;
  var confirmNumber;



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

//Defining parameters of password
  var confirmLower = confirm("Do you want to include lower case characters?");
  var confirmUpper = confirm("Do you want to include upper case characters?");
  var confirmNumber = confirm("Do you want to include number characters?");
  var confirmChar = confirm("Do you want to include special characters?");
  

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