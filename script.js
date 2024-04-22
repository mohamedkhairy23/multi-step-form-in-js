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
  // let email = document.getElementById("email");
  // let password = document.getElementById("password");
  // let address = document.getElementById("address");
  // let city = document.getElementById("city");
  // let zipcode = document.getElementById("zipcode");
  // let firstName = document.getElementById("firstName");
  // let lastName = document.getElementById("lastName");

  // var result = document.createElement("div");
  // var content = "";
  // content +=
  //   `<p>Email is ` +
  //   email.value +
  //   `</p><p>Address is ` +
  //   address.value +
  //   `</p><p>City is ` +
  //   city.value +
  //   `</p><p>ZipCode is ` +
  //   zipcode.value +
  //   `</p><p>First Name is ` +
  //   firstName.value +
  //   `</p><p>Last Name is ` +
  //   lastName.value +
  //   `</p>`;
  // result.innerHTML = content;
  // document.getElementById("last-card").appendChild(result);
});

multiStepForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // let email = document.getElementById("email");
  // let password = document.getElementById("password");
  // let address = document.getElementById("address");
  // let city = document.getElementById("city");
  // let zipcode = document.getElementById("zipcode");
  // let firstName = document.getElementById("firstName");
  // let lastName = document.getElementById("lastName");
  // alert("successfully");
  // window.location.reload();
  // formSteps.findIndex((step) => {
  //   return step.classList.contains("active");
  // });
  // console.log(email.value, city.value);
});
