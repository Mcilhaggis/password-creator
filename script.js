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
function generatePassword() {

  //finding out how many characters the user wants in the password with a set range of 8-128
 
  var pwLength = parseInt(prompt("Enter a number between 8-128"));
   do { alert("That's not a valid number. Please enter a number from 8-128.");
    pwLength = prompt("Enter a number between 8-128");}
    while (pwLength < 8 || pwLength > 128 || isNaN(pwLength) || pwLength === null);

  //Defining variables
  var confirmLower = confirm("Do you want to include lower case characters?");
  var confirmUpper = confirm("Do you want to include upper case characters?");
  var confirmNumber = confirm("Do you want to include number characters?");
  var confirmSpecial = confirm("Do you want to include special characters?");

  //If all answers are false, looping back through to get atleast one true response.
  while (confirmLower === false && confirmUpper === false && confirmNumber === false && confirmSpecial === false) {
    alert("You need to select one type of character");
    var confirmLower = confirm("Do you want to include lower case characters?");
    var confirmUpper = confirm("Do you want to include upper case characters?");
    var confirmNumber = confirm("Do you want to include number characters?");
    var confirmSpecial = confirm("Do you want to include special characters?");
  }

  // Various Character Arrays
  var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "[", "]", ";", "'", ":", "<", ">", "?", "/"];
  
  //Array created based on the answers to prompts by the user
  var passwordPool = [];

  //Craeting new array containing the options(arrays) the user chose to include in the password
  function generateChar() {


    if (confirmLower) {
      passwordPool.push(...lowerCaseChar);
    }
    if (confirmUpper) {
      passwordPool.push(...upperCaseChar);
    }
    if (confirmNumber) {
      passwordPool.push(...numericChar);
    }
    if (confirmSpecial) {
      passwordPool.push(...specialChar);
    }
  }

  generateChar();
  console.log(passwordPool);

  //Creates final array out of random characters from the pool that was created by the users option inputs.
  function pushChar() {
  var randomPassword = [];
    for (var i = 0; i < pwLength; i++) {
      var item = passwordPool[Math.floor(Math.random() * passwordPool.length)];
      randomPassword.push(item);
      }
      return randomPassword;
    }
  
    var password = pushChar();
 
    //validate that all of the conditions were met. 


    /*function validatePassword(password) {
      var valid = false
      for (let i = 0; i < upperCaseChar.length; i++) {
        const char = upperCaseChar[i];
        if (password.includes(char)){
          valid = true
          continue
        }
        
      }
      password.includes(upperCaseChar) === confirmUpper &&
      password.includes(lowerCaseChar) === confirmLower &&
      password.includes(specialChar) === confirmSpecial &&
      password.includes(numericChar) === confirmNumber
      ;
    }*/

//var validPassword = validatePassword(password);
//console.log(validPassword);


//Presents randomly generated password to the user as a string. 
return password.join("");







  }