// Assignment Code

var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacters = "0123456789";
var specialCharacters = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"

var generateBtn = document.querySelector("#generate");

var passwordLength
var upperAsk
var numberAsk
var specialAsk
var password


//Function used to determine the length of the password
function length(){
  passwordLength = prompt("How many characters long would you like your password to be? Please choose a number between 8 and 128.");
    if (passwordLength<8)   {
    alert("Please choose a password length between 8 and 128.");
      length();
    } else if (passwordLength>128){
      alert("Please choose a password length between 8 and 128.");
      length();
    } else if (passwordLength == null) {
      alert("Please choose a password length between 8 and 128.");
      length();
    } 
    return passwordLength;
}

//Function used to determine whether to include uppercase characters in the password
function uppercase(){
  upperAsk = prompt("Do you want to include uppercase letters in your password? Please type YES or NO.");
    if (upperAsk === null) {
      alert("Please answer Yes or No");
      uppercase();

    } else if (upperAsk === "YES" || upperAsk ==="yes") {
      upperAsk = true;
      return upperAsk;

    } else if (upperAsk === "NO" || upperAsk ==="no" ){
      upperAsk = false;
      return upperAsk;
    
    } else {
      alert("Please answer Yes or No");
      uppercase();
    }
    return upperAsk;
}

//Function used to determine whether to include numbers in the password
function numbers(){
  numberAsk = prompt("Do you want to include numbers in your password? Please type YES or NO.");
    if (numberAsk === null) {
      alert("Please answer Yes or No");
      numbers();

    } else if (numberAsk === "YES" || numberAsk ==="yes") {
      numberAsk = true;
      return numberAsk;

    } else if (numberAsk === "NO" || numberAsk ==="no" ){
      numberAsk = false;
      return numberAsk;
    
    } else {
      alert("Please answer Yes or No");
      numbers();
    }
    return numberAsk;
}

//Function used to determine whether to include special characters in the password
function special(){
  specialAsk = prompt("Do you want to include special characters in your password? Please type YES or NO.");
    if (specialAsk === null) {
      alert("Please answer Yes or No");
      special();

    } else if (specialAsk === "YES" || specialAsk ==="yes") {
      specialAsk = true;
      return specialAsk;

    } else if (specialAsk === "NO" || specialAsk ==="no" ){
      specialAsk = false;
      return specialAsk;
    
    } else {
      alert("Please answer Yes or No");
      special();
    }
    return specialAsk;
}

//Function used to create password based on input

function generatePassword(){
  length();
  uppercase();
  numbers();
  special();
 
  if (uppercaseAsk && numberAsk && specialAsk) {
     var password = lowerCharacters + upperCharacters + numberCharacters + specialCharacters;

  } else if (upperAsk && numberAsk) {
    var password = lowerCharacters + upperCharacters + numberCharacters;

  } else if (numberAsk && specialAsk) {
    var password = lowerCharacters + numberCharacters + specialCharacters;

  } else if (upperAsk && specialAsk) {
    var password = lowerCharacters + upperCharacters + specialCharacters;

  } else if (upperAsk) {
    var password = lowerCharacters + upperCharacters;

  } else if(numberAsk) {
    var password = lowerCharacters + numberCharacters;

  } else if (specialAsk) {
    var password = lowerCharacters + specialCharacters;

  } else {
    var password = lowerCharacters;
  }
  return password;
  }

// Write password to the #password input
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

function resetText(){
   document.getElementById("password").value = "Your Secure Password";
 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
