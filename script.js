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

}


//finding out how many characters the user wants in the password
function promptForNumber(){
  var length = prompt("Enter a number between 8-128");
  if (length >= 8 && length <= 128){
    alert("Perfect!");
    return;
  } else if (isNaN(length)){
    alert("That's not a number. Please enter a number from 8-128.");
    promptForNumber();
  } else {
    alert("Your number is not in range.");
    promptForNumber();

  };
  }





