// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var symbols = "`~!@#$%^&*()_[{]}\|;:'<,>.?/";
var lengthInput = "";
var includeUpper = true;
var includeLower = true;
var includeSmbls = true;
var includeNmbrs = true;

var characterLength = lowerCase.length;
var upperLength = upperCase.length;
var numberLength = numbers.length;
var symbolLength = symbols.length;
var numLength = numbers.length;
var output = "";




// Write password to the #password input
function writePassword() {

  //Get input from User through prompts & confirms
  var responseLength = prompt ("How many characters (up to 128) do you want in the password?")
  if (responseLength <= 128 ) {
    responseLength = lengthInput
  }

  var responseUpper = confirm ("Do you want to include UpperCase?")
  if (responseUpper == false) {
    includeUpper = false
  }

  var responseSymbls = confirm ("Do you want to include Symbols?")
  if (responseSymbls == false) {
    includeSmbls = false
  }

  var responseNmbrs = confirm ("Do you want to include Numbers?")
  if (responseNmbrs == false) {
    includeNmbrs = false
  }

  //Create the ransomizer function for each element

  function randomLetter(){
    output += lowerCase.charAt(Math.floor(Math.random() * characterLength))
  }

  console.log(output)

  //Create array with the randomizer functions



  //Call randomized selection of the array up to the number of length of "lengthInput"







  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
