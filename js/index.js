// call the element from html
var password=document.getElementById("password");
// identify the characters which will take from it
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// identify the length of password
var passwordLength = 12;
//create part where we will put the password as cache
var password = ""; 
function generate() {
  password = ""; 

// creating for loop to generate the password
for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }

   //to put the password in the input tag as value
   document.getElementById("password").value = password;
  }
   //activate the copy button
   function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy"); 
    alert("password copied"); 
  }
