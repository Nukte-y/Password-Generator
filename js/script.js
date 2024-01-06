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

// Function to prompt user for password options
function getPasswordOptions() {
  

  

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  do {
      var length=prompt(`Set a length for your password between 8 to 128 characters`);
      length=parseInt(length);
        if (length>=8 && length<=128) {
          confirm(`Your password will be generated as ${length} characters`);
          break;
      } else {
          alert(`!!!You must enter a valid input between 8 and 128!!!`);
      }     
  } while (true);
  do{
      alert(`What type of characters do you want in your password:`)
      var Lowercase=confirm(`lovercase characters?`);
      var Uppercase=confirm(`Uppercase characters?`);
      var Numeric=confirm(`Numeric characters?`);
      var Special=confirm(`Special characters?`);
        if(Lowercase==true || Uppercase==true || Numeric==true|| Special==true){
        break;  
        }
        else{
        alert(`!!!You must choose at least one(1) character type!!!`);
        }  
  }while(true);  
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