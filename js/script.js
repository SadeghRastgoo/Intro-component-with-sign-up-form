"use strict";

const submitBtn = document.getElementById("inp-submit");
const firstNameInp = document.getElementById("inp-fname");
const lastNameInp = document.getElementById("inp-lname");
const emailInp = document.getElementById("inp-email");
const passwordInp = document.getElementById("inp-password");
const alert = document.querySelector(".alert");
const alertCloseBtn = document.querySelector(".alert-close");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const alertFunctionality = function (showStatus, alertTxt, messageTxt) {
  document.querySelector(".alert-heading").textContent = alertTxt;
  document.querySelector(".alert-message").textContent = messageTxt;
  if (showStatus) {
    alert.classList.remove("error-alert");
    alert.classList.add("success-alert");
  } else {
    alert.classList.remove("success-alert");
    alert.classList.add("error-alert");
  }
};

let status = 0;
const invalidInput = function (message, parentClass) {
  parentClass.classList.add("invalid");
  document
    .querySelector(`.${parentClass.classList[0]} + p`)
    .classList.add("message");
  document.querySelector(`.${parentClass.classList[0]} + p`).textContent =
    message;
  status -= 1;
};
const validInput = function (parentClass) {
  parentClass.classList.remove("invalid");
  parentClass.classList.add("valid");
  document
    .querySelector(`.${parentClass.classList[0]} + p`)
    .classList.remove("message");
  status += 1;
};

submitBtn.addEventListener("click", function () {
  // Check if inputs are empty or not
  [...firstNameInp.value].length === 0
    ? invalidInput("First Name cannot be empty", firstNameInp.parentElement)
    : validInput(firstNameInp.parentElement);
  [...lastNameInp.value].length === 0
    ? invalidInput("Last Name cannot be empty", lastNameInp.parentElement)
    : validInput(lastNameInp.parentElement);
  [...emailInp.value].length === 0
    ? invalidInput("Email cannot be empty", emailInp.parentElement)
    : validInput(emailInp.parentElement);
  [...passwordInp.value].length === 0
    ? invalidInput("Password cannot be empty", passwordInp.parentElement)
    : validInput(passwordInp.parentElement);

  // Check if password and email inputs are correct or not
  if ([...emailInp.value].length >= 1) {
    !validateEmail(emailInp.value)
      ? invalidInput("Looks like this is not an email", emailInp.parentElement)
      : validInput(emailInp.parentElement);
  }
  if ([...passwordInp.value].length >= 1) {
    [...passwordInp.value].length <= 8
      ? invalidInput("Your password is weak", passwordInp.parentElement)
      : validInput(passwordInp.parentElement);
  }

  if (!document.querySelector(".message")) {
    alertFunctionality(true, "Success", "Your account has been saved");
  } else {
    alertFunctionality(false, "Error", "Make sure all inputs are correct");
  }
});

alertCloseBtn.addEventListener("click", function () {
  alert.classList.remove("success-alert", "error-alert");
});
