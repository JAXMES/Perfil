// REGISTRATION

let discountInput = document.getElementById("discountCode").value;
var registrationType = document.getElementsByName("registration-type");
var participantType = "";
var discountCode = "Lehman College";
var totalPrice = 0;

function checkForm() {
  const name = document.getElementById('fullName');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const passwordConfirm = document.getElementById('passwordConfirm');
  const phone = document.getElementById('phone');
  const organization = document.getElementById('organization');
  const country = document.getElementById('country');
  const error = document.getElementById('formErrors');

  let errorsFound = false;

  if (!name.value) {
    errorsFound = true;
    name.style = "border: 2px solid red;";
    error.style = "display: block";
    const nameErr = document.createElement("li");
    nameErr.textContent = "Missing full name.";
    error.appendChild(nameErr);
  }

  if (!email.value || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/.test(email.value)) {
    errorsFound = true;
    email.style = "border: 2px solid red;";
    error.style = "display: block";
    const emailErr = document.createElement("li");
    emailErr.textContent = "Invalid or missing email address.";
    error.appendChild(emailErr);
  }
  if (password.value.length < 10 || password.value.length > 20) {
    errorsFound = true;
    password.style = "border: 2px solid red;";
    error.style = "display: block";
    const passErr1 = document.createElement("li");
    passErr1.textContent = "Password must be between 10 and 20 characters.";
    error.appendChild(passErr1);

  }
  if (!password.value || !/[a-z]/.test(password.value)) {
    errorsFound = true;
    password.style = "border: 2px solid red;";
    error.style = "display: block";
    const passErr2 = document.createElement("li");
    passErr2.textContent = "Password must contain at least one lowercase character.";
    error.appendChild(passErr2);
  }
  if (!password.value || !/[A-Z]/.test(password.value)) {
    errorsFound = true;
    password.style = "border: 2px solid red;";
    error.style = "display: block";
    const passErr3 = document.createElement("li");
    passErr3.textContent = "Password must contain at least one uppercase character.";
    error.appendChild(passErr3);
  }
  if (!password.value || !/[0-9]/.test(password.value)) {
    errorsFound = true;
    password.style = "border: 2px solid red;";
    error.style = "display: block";
    const passErr4 = document.createElement("li");
    passErr4.textContent = "Password must contain at least one digit.";
    error.appendChild(passErr4);
  }
  if (passwordConfirm && password.value !== passwordConfirm.value) {
    errorsFound = true;
    password.style = "border: 2px solid red;";
    passwordConfirm.style = "border: 2px solid red;";
    error.style = "display: block";
    const passErr5 = document.createElement("li");
    passErr5.textContent = "Password and confirmation password don't match.";
    error.appendChild(passErr5);
  }

  if (phone.value.length < 1 || !/^[0-9]{3}-[0-9]{3}-[0-9]{4}/.test(phone)) {
    errorsFound = true;
    phone.style = "border: 2px solid red;";
    error.style = "display: block";
    const phoneErr = document.createElement("li");
    phoneErr.textContent = "Check phone input again, please.";
    error.appendChild(phoneErr);
  }


  if (organization.value.length <= 0) {
    errorsFound = true;
    organization.style = "border: 2px solid red;";
    error.style = "display: block";
    const organizationErr = document.createElement("li");
    organizationErr.textContent = "Check organization input again, please.";
    error.appendChild(organizationErr);
  }


  if (country.value.length <= 0) {
    errorsFound = true;
    country.style = "border: 2px solid red;";
    error.style = "display: block";
    const countryErr = document.createElement("li");
    countryErr.textContent = "Check country input again, please.";
    error.appendChild(countryErr);
  }


  if (errorsFound === false) {
    error.style = "display: none";
    name.style = "border: 1px solid #aaa;";
    email.style = "border: 1px solid #aaa;";
    password.style = "border: 1px solid #aaa;";
    passwordConfirm.style = "border: 1px solid #aaa;";
  }
}

// RADIO

radioButtons();


//DISCOUNT
if (discountInput == discountCode) {
  switch (participantType) {
    case "Author":
      totalPrice = 400 - (400 * 0.50);
      break;
    case "Participant":
      totalPrice = 300 - (300 * 0.50);
      break;
    case "Student":
      totalPrice = 100 - (100 * 0.50);
      break;
  }

  document.getElementById("price").innerHTML = "Total: $" + totalPrice;

} else {
  switch (participantType) {
    case "Author":
      totalPrice = 400;
      break;
    case "Participant":
      totalPrice = 300;
      break;
    case "Student":
      totalPrice = 100;
      break;
  }
  document.getElementById("price").innerHTML = "Total: $" + totalPrice;
}

console.log(fullName + "\n" + email + "\n" + organization + "\n" + country + "\n" + phone);


function radioButtons() {

  for (i = 0; i < registrationType.length; i++) {
    if (registrationType[i].checked) {
      participantType = registrationType[i].value;
      console.log("type: " + participantType);
    }
  }
}

function handleRadio(regRadio) {
  let regularPrice;
  let regType = regRadio.value;

  switch (regType) {
    case "Author":
      regularPrice = 400;
      break;
    case "Participant":
      regularPrice = 300;
      break;
    case "Student":
      regularPrice = 100;
      break;
  }
  document.getElementById("price").innerHTML = "Total: $" + regularPrice;
}

document.getElementById("submit").addEventListener("click", function(event) {
  checkForm();


  event.preventDefault();
});
