import { registerUser } from "./login-apk.js";

document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.querySelector("#signup-form");
  const firstInput = document.querySelector("#signup-first");
  const lastInput = document.querySelector("#signup-last");
  const emailInput = document.querySelector("#signup-email");
  const numInput = document.querySelector("#signup-number");
  const passwordInput = document.querySelector("#signup-password");
  const errorElement = document.querySelector("#signup-error");

  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const namefirst = firstInput.value;
    const namelast = lastInput.value;
    const email = emailInput.value;
    const number = numInput.value;
    const password = passwordInput.value;

    try {
      await registerUser({ namefirst, namelast, number, email, password });
      firstInput.value = "";
      lastInput.value = "";
      emailInput.value = "";
      numInput.value = "";
      passwordInput.value = "";

      alert("User registered successfully!");
    } catch (error) {
      errorElement.textContent = error.message;
    }
  });
});
