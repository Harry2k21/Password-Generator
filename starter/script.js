// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//button Variable
const btn = document.getElementById('generate');

//Checking array length
console.log(specialCharacters.length)// 23
console.log(numericCharacters.length) // 10 
console.log(lowerCasedCharacters.length) // 26
console.log(upperCasedCharacters.length)// 26


// Function to prompt user for password options
function getPasswordOptions() {
const length = prompt("Please Type in Length of Password:");
{console.log(length)}
const special = prompt("Please Type in Amount of Special Characters:");
{console.log(special)}
const numeric = prompt("Please Type in Amount of numeric Characters:");
{console.log(numeric)}
const lower = prompt("Please Type in Amount of LowerCased Characters:");
{console.log(lower)}
const upper = prompt("Please Type in Amount of UpperCased Characters:");
{console.log(upper)}
}
// btn.onclick
// prompt("Please Type in Length of Password:");
// getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {
  for(var x = 0; x < arr.length ; x++){
    console.log(Math.floor((Math.random()* arr.length)+ 1));
    console.log(arr[x])
  }
}
// console.log(Math.floor((Math.random()* arr.length)+ 1));
getRandom(specialCharacters);
getRandom(upperCasedCharacters);



// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);