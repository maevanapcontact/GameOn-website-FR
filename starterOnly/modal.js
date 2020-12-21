/** VARIABLES
 * ---------------------------------------
 * ---------------------------------------
 */
/** DOM elements */
const modalElt = document.querySelector(".bground");
const modalBtnElt = document.querySelectorAll(".modal-btn");
const formDataElt = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll("#close");
const successMessageElt = document.querySelectorAll("#success-message");
const formElt = document.querySelectorAll("#form");
const successCloseBtnElt = document.querySelectorAll("#success-close-btn");

/** Form elements */
const firstElt = document.getElementById("first");
const lastElt = document.getElementById("last");
const emailElt = document.getElementById("email");
const birthdateElt = document.getElementById("birthdate");
const quantityElt = document.getElementById("quantity");
const cityElt = document.querySelector("input[type=radio]");
const conditionsElt = document.getElementById("checkbox1");

/** Regex Formats */
const birthdateFormat = /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/;
const mailFormat = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const positiveIntegerFormat = /^\+?(0|[1-9]\d*)$/;

/** EVENTS
 * ---------------------------------------
 * ---------------------------------------
 */
/** launch modal event: CLICK */
modalBtnElt.forEach((btn) => btn.addEventListener("click", launchModal));

/** close modal events: CLICK */
closeModalBtn.forEach(elt => elt.addEventListener("click", closeModal));
successCloseBtnElt.forEach(elt => elt.addEventListener("click", closeModal));

/** Validate form event: SUBMIT */
formElt.forEach(elt => elt.addEventListener("submit", validate));


/** FUNCTIONS
 * ---------------------------------------
 * ---------------------------------------
 */
/** Manage nav button on responsive */
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/** launch modal form */
function launchModal() {
  modalElt.style.display = "block";
  formElt[0].style.display = "block";
}

/** close modal form */
function closeModal() {
  modalElt.style.display = "none";
  successMessageElt[0].style.display = "none";
}

/** Display the success message on the modal */
function displaySuccessMessage() {
  let currentHeight = formElt[0].offsetHeight;

  formElt[0].style.display = "none";
  successMessageElt[0].style.display = "flex";
  successMessageElt[0].style.height = currentHeight + "px";
}

/** check if firstname input is valid and gives feedback
 * @returns {boolean}
 */
function isFirstValid() {
  let inputFirst = new InputElement(firstElt, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
  let isValid = isLongEnough(firstElt.value.length, 2);
  removeOrDisplayError(inputFirst, isValid);

  return isValid;
}

/** check if lastname input is valid and gives feedback
 * @returns {boolean}
 */
function isLastValid() {
  let inputLast = new InputElement(lastElt, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  let isValid = isLongEnough(lastElt.value.length, 2);
  removeOrDisplayError(inputLast, isValid);

  return isValid;
}

/** check if email input is valid and gives feedback
 * @returns {boolean}
 */
function isEmailValid() {
  let inputEmail = new InputElement(emailElt, "Veuillez entrer un format d'email valide.");
  let isValid = isStringMatchRegexFormat(emailElt.value, mailFormat);
  removeOrDisplayError(inputEmail, isValid);

  return isValid;
}

/** check if birthdate input is valid and gives feedback
 * @returns {boolean}
 */
function isBirthdateValid() {
  let inputBirthdate = new InputElement(birthdateElt, "Veuillez saisir une date de naissance valide.");
  let isValid = isStringMatchRegexFormat(birthdateElt.value, birthdateFormat);
  removeOrDisplayError(inputBirthdate, isValid);

  return isValid;
}

/** check if quantity input is valid and gives feedback
 * @returns {boolean}
 */
function isQuantityValid() {
  let inputQuantity = new InputElement(quantityElt, "Veuillez entrer un nombre.");
  let isValid = isStringMatchRegexFormat(quantityElt.value, positiveIntegerFormat);
  removeOrDisplayError(inputQuantity, isValid);

  return isValid;
}

/** check if city radio buttons are valid and gives feedback
 * @returns {boolean}
 */
function isCityValid() {
  let inputCity = new InputElement(cityElt, "Vous devez choisir une option.");
  let isValid = isRadioChecked();
  removeOrDisplayError(inputCity, isValid);

  return isValid;
}

/** check if conditions checkbox is valid and gives feedback
 * @returns {boolean}
 */
function isConditionsValid() {
  let inputConditions = new InputElement(conditionsElt, "Vous devez vérifier que vous acceptez les termes et conditions.");
  let isValid = isCheckboxChecked("checkbox1");
  removeOrDisplayError(inputConditions, isValid);

  return isValid;
}

/** remove or display error message under inputs
 * @param {object} elt input element
 * @param {boolean} isValid state of the element check
 */
function removeOrDisplayError(elt, isValid) {
  isValid ? elt.removeDisplayError() : elt.displayError();
}

/** Check the validity of the whole form
 * @param e submit event result
 */
function validate(e) {
  e.preventDefault();

  let first = isFirstValid();
  let last = isLastValid();
  let email = isEmailValid();
  let birthdate = isBirthdateValid();
  let quantity = isQuantityValid();
  let city = isCityValid();
  let conditions = isConditionsValid();

  let isFormValid = first && last && email && birthdate && quantity && city && conditions;

  if (isFormValid) displaySuccessMessage();
}

/** UTILS
 * ---------------------------------------
 * ---------------------------------------
 */
/** check if a string matches an email regex format
 * @param {string} str string to check
 * @param {string} strFormat Regex format
 * @returns {boolean}
*/
function isStringMatchRegexFormat(str, strFormat) {
  return strFormat.test(str);
}

/** check if at least one radio button is checked
 * @returns {boolean}
*/
function isRadioChecked() {
  return document.querySelectorAll("input[type=radio]:checked").length > 0;
}

/** Check if a checkbox is checked
 * @param {string} id the id of the checkbox element
 * @returns {boolean}
*/
function isCheckboxChecked(id) {
  return document.getElementById(id).checked;
}

/** check if the current length is >= to a minimum length
 * @param {number} currentLength the length to check
 * @param {number} minimumLength the minimum length
 * @returns {boolean}
*/
function isLongEnough(currentLength, minimumLength) {
  return currentLength >= minimumLength;
}