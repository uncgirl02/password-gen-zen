// Assignment Code
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"

//Function used to determine the length of the password
function length(){
  passwordLength = prompt("How many characters long would you like your password to be? Please choose a number between 8 and 128.");
    if (passwordLength<8)   {
    alert("Please choose a password length between 8 and 128.");
      determineLength();
    } else if (passwordLength>128){
      alert("Please choose a password length between 8 and 128.");
      determineLength();
    } else if (passwordLength == null) {
      alert("Please choose a password length between 8 and 128.");
      determineLength();
    return passwordLength;
}

//Function used to determine whether the user wants to include uppercase characters in the password
function uppercase(){
  upperAsk = prompt("Do you want to include uppercase letters in your password? Please type YES or NO.");
    if (upperAsk === null) {
      alert("Please answer Yes or No");
      uppercase();

    } else if (upperAsk === "YES" || upperAsk ==="yes") {
      upperAsk = true;
      return upperASK;

    } else if (upperAsk === "NO" || upperAsk ==="no" ){
      upperAsk = false;
      return upperAsk;
    
    } else {
      alert("Please answer Yes or No");
      uppercase();
    }
    return upperAsk;
}

//Function used to determine whether the user wants to include numbers in the password
function numbers(){
  numberAsk = prompt("Do you want to include numbers in your password? Please type YES or NO.");
    if (numberAsk === null) {
      alert("Please answer Yes or No");
      numbers();

    } else if (numberAsk === "YES" || numberAsk ==="yes") {
      numberAsk = true;
      return numberASK;

    } else if (upperAsk === "NO" || upperAsk ==="no" ){
      upperAsk = false;
      return upperAsk;
    
    } else {
      alert("Please answer Yes or No");
      numbers();
    }
    return upperAsk;
}

//Function used to determine whether the user wants to include special characters in the password
function special(){
  specialAsk = prompt("Do you want to include special characters in your password? Please type YES or NO.");
    if (specialAsk === null) {
      alert("Please answer Yes or No");
      numbers();

    } else if (specialAsk === "YES" || specialAsk ==="yes") {
      specialAsk = true;
      return specialASK;

    } else if (specialAsk === "NO" || specialAsk ==="no" ){
      specialAsk = false;
      return specialAsk;
    
    } else {
      alert("Please answer Yes or No");
      numbers();
    }
    return specialAsk;
}

//Function used to creat password based on input















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
}
