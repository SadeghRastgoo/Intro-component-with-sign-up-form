"use strict";

const submitBtn = document.getElementById("inp-submit");
const firstNameInp = document.getElementById("inp-fname");
const lastNameInp = document.getElementById("inp-lname");
const emailInp = document.getElementById("inp-email");
const passwordInp = document.getElementById("inp-password");

submitBtn.addEventListener("click", function () {
  // Check if Empty or not
  if ([...firstNameInp.value].length === 0) {
    const parentClass = firstNameInp.parentElement;
    parentClass.classList.add("invalid");
    document
      .querySelector(`.${parentClass.classList[0]} + p`)
      .classList.add("message");
    document.querySelector(`.${parentClass.classList[0]} + p`).textContent =
      "First Name cannot be empty";
  } else {
    const parentClass = firstNameInp.parentElement;
    parentClass.classList.remove("invalid");
    document
      .querySelector(`.${parentClass.classList[0]} + p`)
      .classList.remove("message");
  }
  if ([...lastNameInp.value].length === 0) {
    const parentClass = lastNameInp.parentElement;
    parentClass.classList.add("invalid");
    document
      .querySelector(`.${parentClass.classList[0]} + p`)
      .classList.add("message");
    document.querySelector(`.${parentClass.classList[0]} + p`).textContent =
      "Last Name cannot be empty";
  } else {
    const parentClass = lastNameInp.parentElement;
    parentClass.classList.remove("invalid");
    document
      .querySelector(`.${parentClass.classList[0]} + p`)
      .classList.remove("message");
  }
  if ([...emailInp.value].length === 0) {
    const parentClass = emailInp.parentElement;
    parentClass.classList.add("invalid");
    document
      .querySelector(`.${parentClass.classList[0]} + p`)
      .classList.add("message");
    document.querySelector(`.${parentClass.classList[0]} + p`).textContent =
      "Email cannot be empty";
  } else {
    const parentClass = emailInp.parentElement;
    parentClass.classList.remove("invalid");
    document
      .querySelector(`.${parentClass.classList[0]} + p`)
      .classList.remove("message");
  }
  if ([...passwordInp.value].length === 0) {
    const parentClass = passwordInp.parentElement;
    parentClass.classList.add("invalid");
    document
      .querySelector(`.${parentClass.classList[0]} + p`)
      .classList.add("message");
    document.querySelector(`.${parentClass.classList[0]} + p`).textContent =
      "Password cannot be empty";
  } else {
    const parentClass = passwordInp.parentElement;
    parentClass.classList.remove("invalid");
    document
      .querySelector(`.${parentClass.classList[0]} + p`)
      .classList.remove("message");
  }

  // Check if inputs correct ot not
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  if ([...emailInp.value].length >= 1) {
    if (!validateEmail(emailInp.value)) {
      const parentClass = emailInp.parentElement;
      parentClass.classList.add("invalid");
      document
        .querySelector(`.${parentClass.classList[0]} + p`)
        .classList.add("message");
      document.querySelector(`.${parentClass.classList[0]} + p`).textContent =
        "Looks like this is not an email";
    } else {
      const parentClass = emailInp.parentElement;
      parentClass.classList.remove("invalid");
      document
        .querySelector(`.${parentClass.classList[0]} + p`)
        .classList.remove("message");
    }
  }
  if ([...passwordInp.value].length >= 1) {
    if ([...passwordInp.value].length <= 8) {
      const parentClass = passwordInp.parentElement;
      parentClass.classList.add("invalid");
      document
        .querySelector(`.${parentClass.classList[0]} + p`)
        .classList.add("message");
      document.querySelector(`.${parentClass.classList[0]} + p`).textContent =
        "Your password is weak";
    } else {
      const parentClass = passwordInp.parentElement;
      parentClass.classList.remove("invalid");
      document
        .querySelector(`.${parentClass.classList[0]} + p`)
        .classList.remove("message");
    }
  }
});
