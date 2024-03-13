document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");

  function isPasswordStrong(password) {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  }

  passwordInput.addEventListener("input", function () {
    if (!isPasswordStrong(passwordInput.value)) {
      passwordInput.setCustomValidity(
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
    } else {
      passwordInput.setCustomValidity("");
    }
  });

  confirmPasswordInput.addEventListener("input", function () {
    if (passwordInput.value !== confirmPasswordInput.value) {
      confirmPasswordInput.setCustomValidity("Passwords do not match.");
    } else {
      confirmPasswordInput.setCustomValidity("");
    }
  });

  document.querySelector("form").addEventListener("submit", function (event) {
    if (!isPasswordStrong(passwordInput.value)) {
      event.preventDefault();
      alert("Please ensure your password meets the requirements.");
    }
  });
});
