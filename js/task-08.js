const loginForm = document.querySelector(".login-form");
const emailInput = loginForm.elements[0];
const passwordInput = loginForm.elements[1];
const button = loginForm.elements[2];

const handleSubmit = (event) => {
  // event.preventDefault();

  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Please fill in all of the fields!");
  } else {
    const userInfo = {
      email: emailInput.value,
      password: passwordInput.value
    };

    console.log(userInfo.email);
    console.log(userInfo.password);
    loginForm.reset();
  }
};
button.addEventListener("click", (e) => {
  e.preventDefault();
  handleSubmit(e);
});

// loginForm.addEventListener("submit", handleSubmit);