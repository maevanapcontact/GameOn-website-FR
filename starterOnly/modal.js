function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* DOM ELEMENTS
-------------------------------------
------------------------------------- */
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll("#close");
const formElt = document.querySelectorAll("#form");
const cityElt = document.querySelectorAll("input[type=radio]");

// Form elements
const firstElt = document.getElementById("first");
const lastElt = document.getElementById("last");
const emailElt = document.getElementById("email");
const quantityElt = document.getElementById("quantity");
const birthdateElt = document.getElementById("birthdate");

/* EVENTS
-------------------------------------
------------------------------------- */
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalBtn.forEach(elt => elt.addEventListener("click", closeModal));

// Validate form
formElt.forEach(elt => elt.addEventListener("submit", validate));

// Add change event on city radio inputs
cityElt.forEach(elt => elt.addEventListener("change", isRadioChecked));


/* FUNCTIONS
-------------------------------------
------------------------------------- */
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Validate form
function validate(e) {
  e.preventDefault();
  const isFirstValid = isLongEnough(firstElt.value.length, 2);
  console.log(isFirstValid);
  const isLastValid = isLongEnough(lastElt.value.length, 2);
  console.log(isLastValid);
  const isEmailValid = isStringMatchEmailFormat(emailElt.value);
  console.log(isEmailValid);
  const isQuantityValid = isFilledWithNumber(quantityElt.value);
  console.log(isQuantityValid);
  const isCityValid = isRadioChecked();
  console.log(isCityValid);
  const isConditionsValid = isCheckboxChecked("checkbox1");
  console.log(isConditionsValid);
}

// check if a string match an email regex format
function isStringMatchEmailFormat(str) {
  const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return mailFormat.test(str);
}

// check if the data is a number / not empty
function isFilledWithNumber(data) {
  return data != "" && !isNaN(data) ? true : false;
}

// check if at least one city radio button is checked
function isRadioChecked() {
  return document.querySelectorAll("input[type=radio]:checked").length > 0;
}

function isCheckboxChecked(id) {
  return document.getElementById(id).checked;
}

// utils: check if the current length is >= to a minimum length
function isLongEnough(currentLength, minimumLength) {
  return currentLength >= minimumLength ? true : false;
}