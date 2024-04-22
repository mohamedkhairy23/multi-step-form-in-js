const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];
let currentStep = formSteps.findIndex((step) => {
  return step.classList.contains("active");
});

let lastNext = document.getElementById("last-next");

if (currentStep < 0) {
  currentStep = 0;
  showCurrentStep();
}

multiStepForm.addEventListener("click", (e) => {
  let incrementor;
  if (e.target.matches("[data-next]")) {
    incrementor = 1;
  } else if (e.target.matches("[data-previous]")) {
    incrementor = -1;
  }

  if (incrementor == null) return;

  const inputs = [...formSteps[currentStep].querySelectorAll("input")];
  const selects = [...formSteps[currentStep].querySelectorAll("select")];

  const allInputsValid = inputs.every((input) => input.reportValidity());
  const allSelectsValid = selects.every((select) => select.reportValidity());

  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");

  if (
    allInputsValid &&
    allSelectsValid &&
    passwordInput.value === confirmPasswordInput.value &&
    e.target.matches("[data-next]")
  ) {
    currentStep += incrementor;
    showCurrentStep();
  } else if (
    e.target.matches("[data-previous]") &&
    passwordInput.value === confirmPasswordInput.value
  ) {
    currentStep += incrementor;
    showCurrentStep();
  }

  const numOfPiecesInput = document.getElementById("num-of-pieces");
  const serialNumOfPieceInput = document.getElementById(
    "serial-number-of-piece"
  );
  const modelTypeSelectValue =
    document.getElementById("model-type-select").value;

  if (modelTypeSelectValue === "individual") {
    numOfPiecesInput.setAttribute("min", 1);
    serialNumOfPieceInput.removeAttribute("required", "true");
  } else if (modelTypeSelectValue === "company") {
    numOfPiecesInput.setAttribute("min", 10);
    serialNumOfPieceInput.setAttribute("required", "true");
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    document.getElementById("password-error-message").style.display = "block";
  } else if (passwordInput.value === confirmPasswordInput.value) {
    document.getElementById("password-error-message").style.display = "none";
  }
});

formSteps.forEach((step) => {
  step.addEventListener("animationend", (e) => {
    formSteps[currentStep].classList.remove("hide");
    e.target.classList.toggle("hide", !e.target.classList.contains("active"));
  });
});

function showCurrentStep() {
  formSteps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
  });
}

lastNext.addEventListener("click", (e) => {
  e.preventDefault();
  let modelTypeSelect = document.getElementById("model-type-select");
  let carVendorSelect = document.getElementById("car-vendor-select");
  let carModelSelect = document.getElementById("car-model-select");
  let carYearSelect = document.getElementById("car-year-select");
  let nameOfPiece = document.getElementById("name-of-piece");
  let numOfPieces = document.getElementById("num-of-pieces");
  let serialNumOfPiece = document.getElementById("serial-number-of-piece");
  let pieceDescription = document.getElementById("piece-description");
  let pieceImage = document.getElementById("piece-image");
  let clientFullName = document.getElementById("client-full-name");
  let clientEmail = document.getElementById("client-email");
  let clientPhoneNumber = document.getElementById("phone");
  let typeOfCharging = document.getElementById("type-of-charging");
  let fullNameInArabic = document.getElementById("full-name-in-arabic");
  let fullNameInEnglish = document.getElementById("full-name-in-english");
  let selectCountry = document.getElementById("select-country");
  let cityName = document.getElementById("city-name");
  let streetName = document.getElementById("street-name");
  let zipCode = document.getElementById("zip-code");
  let addressDescription = document.getElementById("address-description");
  let phoneForCharging = document.getElementById("phone-for-charging");

  var result = document.createElement("div");
  var content = "";
  content +=
    `<p>Model type select is ` +
    modelTypeSelect.value +
    `</p><hr /><p>Car vendor select is ` +
    carVendorSelect.value +
    `</p><hr /><p>Car year select is ` +
    carYearSelect.value +
    `</p><hr /><p>Car model select is ` +
    carModelSelect.value +
    `</p><hr /><p>Name of piece is ` +
    nameOfPiece.value +
    `</p><hr /><p>Number of pieces is ` +
    numOfPieces.value +
    `</p><hr /><p>Serial num of piece is ` +
    serialNumOfPiece?.value +
    `</p><hr /><p>Piece description is ` +
    pieceDescription?.value +
    `</p><hr /><p>Client full name is ` +
    clientFullName.value +
    `</p><hr /><p>Client email is ` +
    clientEmail.value +
    `</p><hr /><p>Client phone number is ` +
    clientPhoneNumber.value +
    `</p><hr /><p>Type of charging is ` +
    typeOfCharging.value +
    `</p><hr /><p>Full name in Arabic is ` +
    fullNameInArabic.value +
    `</p><hr /><p>Full name in English is ` +
    fullNameInEnglish.value +
    `</p><hr /><p>Selected country is ` +
    selectCountry.value +
    `</p><hr /><p>City name is ` +
    cityName.value +
    `</p><hr /><p>Street name is ` +
    streetName.value +
    `</p><hr /><p>Zip code is ` +
    zipCode.value +
    `</p><hr /><p>Address description is ` +
    addressDescription.value +
    `</p><hr /><p>Phone for charging is ` +
    phoneForCharging.value +
    `</p>`;
  result.innerHTML = content;
  document.getElementById("last-card").appendChild(result);
});

multiStepForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let modelTypeSelect = document.getElementById("model-type-select");
  let carVendorSelect = document.getElementById("car-vendor-select");
  let carModelSelect = document.getElementById("car-model-select");
  let carYearSelect = document.getElementById("car-year-select");
  let nameOfPiece = document.getElementById("name-of-piece");
  let numOfPieces = document.getElementById("num-of-pieces");
  let serialNumOfPiece = document.getElementById("serial-number-of-piece");
  let pieceDescription = document.getElementById("piece-description");
  let pieceImage = document.getElementById("piece-image");
  let clientFullName = document.getElementById("client-full-name");
  let clientEmail = document.getElementById("client-email");
  let clientPhoneNumber = document.getElementById("phone");
  let typeOfCharging = document.getElementById("type-of-charging");
  let fullNameInArabic = document.getElementById("full-name-in-arabic");
  let fullNameInEnglish = document.getElementById("full-name-in-english");
  let selectCountry = document.getElementById("select-country");
  let cityName = document.getElementById("city-name");
  let streetName = document.getElementById("street-name");
  let zipCode = document.getElementById("zip-code");
  let addressDescription = document.getElementById("address-description");
  let phoneForCharging = document.getElementById("phone-for-charging");

  multiStepForm.style.display = "none";

  var result1 = document.createElement("div");
  var content1 =
    "<h1 style='color:green'>Order has been sent successfully</h1>";
  content1 +=
    `<p>Model type select is ` +
    modelTypeSelect.value +
    `</p><hr /><p>Car vendor select is ` +
    carVendorSelect.value +
    `</p><hr /><p>Car year select is ` +
    carYearSelect.value +
    `</p><hr /><p>Car model select is ` +
    carModelSelect.value +
    `</p><hr /><p>Name of piece is ` +
    nameOfPiece.value +
    `</p><hr /><p>Number of pieces is ` +
    numOfPieces.value +
    `</p><hr /><p>Serial num of piece is ` +
    serialNumOfPiece?.value +
    `</p><hr /><p>Piece description is ` +
    pieceDescription?.value +
    `</p><hr /><p>Client full name is ` +
    clientFullName.value +
    `</p><hr /><p>Client email is ` +
    clientEmail.value +
    `</p><hr /><p>Client phone number is ` +
    clientPhoneNumber.value +
    `</p><hr /><p>Type of charging is ` +
    typeOfCharging.value +
    `</p><hr /><p>Full name in Arabic is ` +
    fullNameInArabic.value +
    `</p><hr /><p>Full name in English is ` +
    fullNameInEnglish.value +
    `</p><hr /><p>Selected country is ` +
    selectCountry.value +
    `</p><hr /><p>City name is ` +
    cityName.value +
    `</p><hr /><p>Street name is ` +
    streetName.value +
    `</p><hr /><p>Zip code is ` +
    zipCode.value +
    `</p><hr /><p>Address description is ` +
    addressDescription.value +
    `</p><hr /><p>Phone for charging is ` +
    phoneForCharging.value +
    `</p><button  onclick='window.location.reload()'>reset</button>`;
  result1.innerHTML = content1;
  document.getElementById("container")?.appendChild(result1);
  globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});
