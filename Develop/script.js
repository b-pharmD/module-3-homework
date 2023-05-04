// Assignment Code
var generateBtn = document.querySelector("#generate");
var caps = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var special = [" ","!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","^","_","`","{","|","}","~"];
var capsSelect = window.confirm("Select 'OK' if you would like to include capital letters.");
var lowerSelect = window.confirm("Select 'OK' if you would like to include lowercase letters.");
var numberSelect = window.confirm("Select 'OK' if you would like to include numbers.");
var specialSelect = window.confirm("Select 'OK' if you would like to include special characters.");
var passlength = Number(window.prompt("Select length of password (from 8 to 128 characters)."));
var characterSelection = [];

console.log(characterSelection);

//
if (capsSelect && lowerSelect && numberSelect && specialSelect){
  var characterSelection = caps.concat(lower, numbers, special)
} 

else if (capsSelect && lowerSelect && numberSelect) {
  var characterSelection = caps.concat(lower, numbers)
}

else if (capsSelect && lowerSelect && specialSelect) {
  var characterSelection = caps.concat(lower, special)
}

else if (capsSelect && numberSelect && specialSelect) {
  var characterSelection = caps.concat(numbers, special)
}

else if (lowerSelect && numberSelect && specialSelect) {
  var characterSelection = lower.concat(numbers, special)
}

else if (capsSelect && lowerSelect){
  var characterSelection = caps.concat(lower)
}

else if (capsSelect && numberSelect){
  var characterSelection = caps.concat(numbers)
}

else if (capsSelect && specialSelect){
  var characterSelection = caps.concat(special)
}

else if (lowerSelect && numberSelect){
  var characterSelection = lower.concat(numbers)
}

else if (lowerSelect && specialSelect){
  var characterSelection = lower.concat(special)
}

else if (numberSelect && specialSelect){
  var characterSelection = number.concat(special)
}

else if (capsSelect){
  var characterSelection = caps
}

else if (lowerSelect){
  var characterSelection = lower
}

else if (numberSelect){
  var characterSelection = numbers
}

else if (specialSelect){
  var characterSelection = special
}

else if (!capsSelect && !lowerSelect && !numberSelect && !specialSelect){
  window.alert("Must make at least one selection!")
}

if (passlength < 8 || passlength > 128){
  window.alert("Must be between 8 and 128 characters in length!")
}

console.log(characterSelection);
console.log(passlength);

function getRandomItem(arr) {

  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {
  
  var passSelection = "";

for (var i = 0; i < passlength; i++) {
  var randomCharacter = getRandomItem(characterSelection)
  passSelection = passSelection + randomCharacter
}   

console.log(passSelection)
console.log(passSelection.length)
console.log(typeof passlength);

  
  return passSelection
}