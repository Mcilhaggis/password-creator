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
  var pwLength;
  var confirmLower;
  var confirmUpper;
  var confirmSpecial
  var confirmNumber;
  


//finding out how many characters the user wants in the password


  var pwLength = parseInt(prompt("Enter a number between 8-128"));
  while(pwLength < 8 || length > 128 || pwLength == NaN || pwLength === null){
    alert("That's not a number. Please enter a number from 8-128.");
    pwLength = prompt("Enter a number between 8-128");
  };



//Defining variables
  var confirmLower = confirm("Do you want to include lower case characters?");
  var confirmUpper = confirm("Do you want to include upper case characters?");
  var confirmNumber = confirm("Do you want to include number characters?");
  var confirmSpecial = confirm("Do you want to include special characters?");
  
//If all answers are false, looping back through to get atleast one true response.
while (confirmLower === false && confirmUpper === false && confirmNumber === false && confirmSpecial === false){
  alert("You need to select one type of character");
  var confirmLower = confirm("Do you want to include lower case characters?");
  var confirmUpper = confirm("Do you want to include upper case characters?");
  var confirmNumber = confirm("Do you want to include number characters?");
  var confirmSpecial = confirm("Do you want to include special characters?");
  }


// Various Arrays
var lowerCaseChar=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseChar=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericChar=["1","2","3","4","5","6","7","8","9","0"];
var specialChar=["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];
var passwordPool = [];


//loop through chosen options to create a password
function generateChar(){
  

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



//create an array thats a pool for all selected values from char arrays
generateChar();
console.log(passwordPool);


//create a final for loop that math.random.floors the array . the length of pwLength

var randomPassword = [];

function pushChar (){


for (var i = 0; i < pwLength; i++){
  var item = passwordPool[Math.floor(Math.random()*passwordPool.length)];
  randomPassword.push(item);
  }
  return randomPassword;
}



pushChar();
console.log(randomPassword);

//at the end validate that all of the conditions were met. 

}

