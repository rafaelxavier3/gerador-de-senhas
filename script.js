const inputElement = document.querySelector("#password");
const upperCaseCheckElement = document.querySelector("#uppercase-check");
const numberCheckElement = document.querySelector("#number-check");
const symbolCheckElement = document.querySelector("#symbol-check");

let passwordLength = 14;

function generatePassword() {
  let chars = "abcdefghjklmpqrstuvxyz";
  const upperCaseChars = "ABCDEFGHJKLMNPQRSTUVXYZ";
  const numberChars = "123456789";
  const symbolChars = "?!&*%";

  if (upperCaseCheckElement.checked) {
    chars += upperCaseChars;
  }
  if (numberCheckElement.checked) {
    chars += numberChars;
  }
  if (symbolCheckElement.checked) {
    chars += symbolChars;
  }

  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  inputElement.value = password;
}

function copy() {
  navigator.clipboard.writeText(inputElement.value);
}

const passwordLengthElement = document.querySelector("#password-length");
passwordLengthElement.addEventListener("input", function () {
  passwordLength = passwordLengthElement.value;
  document.querySelector("#password-length-text").innerText = passwordLength;
  generatePassword();
});
upperCaseCheckElement.addEventListener("click", generatePassword);
numberCheckElement.addEventListener("click", generatePassword);
symbolCheckElement.addEventListener("click", generatePassword);

document.querySelector("#copy-1").addEventListener("click", copy);
document.querySelector("#copy-2").addEventListener("click", copy);

document.querySelector("#renew").addEventListener("click", generatePassword);

generatePassword();
