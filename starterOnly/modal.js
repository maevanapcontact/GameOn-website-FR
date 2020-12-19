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

// Form elements
const firstElt = document.getElementById("first");
const lastElt = document.getElementById("last");
const quantityElt = document.getElementById("quantity");

/* EVENTS
-------------------------------------
------------------------------------- */
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalBtn.forEach(elt => elt.addEventListener("click", closeModal));

// Validate form
formElt.forEach(elt => elt.addEventListener("submit", validate));


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
  const isFirstValid = isLongEnough(firstElt.value.length, 2) ? true : false;
  console.log(isFirstValid);
  const isLastValid = isLongEnough(lastElt.value.length, 2) ? true : false;
  console.log(isLastValid);
}

// utils: check the length of a value
function isLongEnough(currentLength, minimumLength) {
  return currentLength >= minimumLength ? true : false;
}