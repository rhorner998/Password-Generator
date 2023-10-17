function generatePassword() {
  // Define character types based on ASCII character codes
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericChars = '0123456789';
  const specialChars = '!@#$%^&*()-=_+[]{}|;:,.<>?/';

  // Prompt for password criteria
  const length = parseInt(prompt('Enter password length (between 8 and 128 characters):'));
  if (isNaN(length) || length < 8 || length > 128) {
    alert('Invalid password length. Please enter a valid number between 8 and 128.');
    return '';
  }

  const includeLowercase = confirm('Include lowercase characters?');
  const includeUppercase = confirm('Include uppercase characters?');
  const includeNumeric = confirm('Include numeric characters?');
  const includeSpecial = confirm('Include special characters?');

  if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert('At least one character type must be selected.');
    return '';
  }

  // Build the character pool based on selected criteria
  let charPool = '';
  if (includeLowercase) charPool += lowercaseChars;
  if (includeUppercase) charPool += uppercaseChars;
  if (includeNumeric) charPool += numericChars;
  if (includeSpecial) charPool += specialChars;

  // Generate the password
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool[randomIndex];
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);