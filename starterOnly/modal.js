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
const successMessageElt = document.querySelectorAll("#success-message");
const formElt = document.querySelectorAll("#form");
const cityElt = document.querySelector("input[type=radio]");

// Form elements
const firstElt = document.getElementById("first");
const lastElt = document.getElementById("last");
const emailElt = document.getElementById("email");
const quantityElt = document.getElementById("quantity");
const birthdateElt = document.getElementById("birthdate");
const checkbox1Elt = document.getElementById("checkbox1");

/* EVENTS
-------------------------------------
------------------------------------- */
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalBtn.forEach(elt => elt.addEventListener("click", closeModal));
successMessageElt.forEach(elt => elt.addEventListener("click", closeModal));

// Validate form
formElt.forEach(elt => elt.addEventListener("submit", validate));


/* FUNCTIONS
-------------------------------------
------------------------------------- */
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  formElt[0].style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  successMessageElt[0].style.display = "none";
}

// Validate form
function validate(e) {
  e.preventDefault();
  let formValid = true;

  let inputFirst = new InputElement(firstElt, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
  isLongEnough(firstElt.value.length, 2) ? inputFirst.removeDisplayError() : inputFirst.displayError();

  let inputLast = new InputElement(lastElt, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  isLongEnough(lastElt.value.length, 2) ? inputLast.removeDisplayError() : inputLast.displayError();

  let inputEmail = new InputElement(emailElt, "Veuillez entrer un format d'email valide.");
  isStringMatchEmailFormat(emailElt.value) ? inputEmail.removeDisplayError() : inputEmail.displayError();

  let inputQuantity = new InputElement(quantityElt, "Veuillez entrer un nombre.");
  isFilledWithNumber(quantityElt.value) ? inputQuantity.removeDisplayError() : inputQuantity.displayError();

  let inputCity = new InputElement(cityElt, "Vous devez choisir une option.");
  isRadioChecked() ? inputCity.removeDisplayError() : inputCity.displayError();

  let inputCondition = new InputElement(checkbox1Elt, "Vous devez vérifier que vous acceptez les termes et conditions.");
  isCheckboxChecked("checkbox1") ? inputCondition.removeDisplayError() : inputCondition.displayError();

  if (formValid) displaySuccess();
}

// display the success message
function displaySuccess() {
  formElt[0].style.display = "none";
  successMessageElt[0].style.display = "block";
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

// Check if a checkbox is checked
function isCheckboxChecked(id) {
  return document.getElementById(id).checked;
}

// utils: check if the current length is >= to a minimum length
function isLongEnough(currentLength, minimumLength) {
  return currentLength >= minimumLength ? true : false;
}