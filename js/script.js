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

var length;  // number of password characters

function getPasswordOptions() {
  
  do {
    length=prompt(`Set a length for your password between 8 to 128 characters`);
    length=parseInt(length);              //convert length(string) to integer
      if (length>=8 && length<=128) {     //check user input is between 8-128
        confirm(`Your password will be generated as ${length} characters`);
        break;                            // exit the loop when condition happen 
    } else {
        alert(`!!!You must enter a valid input between 8 and 128!!!`);
    }     
  } while (true);                          //ask user untill valid input

  do{
      alert(`What type of characters do you want in your password:`)  
      var Lowercase=confirm(`lovercase characters?`);     //boolean values 
      var Uppercase=confirm(`Uppercase characters?`);
      var Numeric=confirm(`Numeric characters?`);
      var Special=confirm(`Special characters?`);
        if(Lowercase==true || Uppercase==true || Numeric==true|| Special==true){  //checking at least one character type is choosen
        break;                                                                    //if condition happen exit from the loop
        }
        else{
        alert(`!!!You must choose at least one(1) character type!!!`);
        }  
  }while(true);

  console.log(Lowercase, Uppercase , Numeric , Special);   // checking values in the console
return [                                                   //function returns an array
 Lowercase, 
 Uppercase,
 Numeric,
 Special];
} ;

// var getPasswordOptions=[getPasswordOptions()];           //code failed when call the function here, the page starts without button

// Function for getting a random element from an array

function getRandom(arr) {
  var randomIndex=(Math.floor(Math.random()*arr.length));     
  return arr[randomIndex];                                   //returns random element of the arr
}

// Function to generate password with user input

function generatePassword() {
    var getPasswordOption=getPasswordOptions(); // asking and taking user password options 
    var passwordArray=[                         // creating(combining) a new array consists of user choose
    ...(getPasswordOption[0] ? lowerCasedCharacters : [] ), 
    ...(getPasswordOption[1] ? upperCasedCharacters :[]),
    ...(getPasswordOption[2] ? numericCharacters : []),
    ...(getPasswordOption[3] ? specialCharacters : [])];  
    console.log(passwordArray);   //log the new array according to user inputs
    var password=[];
    for(var i=0;i<length;i++){   // looping inside the new array to choose array element randomly
        var passwordElement=getRandom(passwordArray);
        password.push(passwordElement); //push methood is used to add random elements to the password array
    }
    console.log(password); // the password is going to be generated
  
  return password;
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