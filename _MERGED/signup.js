document.addEventListener("DOMContentLoaded", function() {

    let loacalUsername = sessionStorage.getItem("hasRead");

    // Check if "loacalUsername" is null (indicating it hasn't been initialized yet)
    if (loacalUsername === null) {
        // Set "loacalUsername" to false in session storage
        sessionStorage.setItem("loacalUsername", "");
    }

    function signup() {
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        var usernameError = document.getElementById("usernameError");
        var emailError = document.getElementById("emailError");
        var passwordError = document.getElementById("passwordError");

        var isValid = true;

        // Clear previous error messages
        usernameError.innerHTML = "";
        emailError.innerHTML = "";
        passwordError.innerHTML = "";

        // Check username
        if (username.trim() === "") {
            usernameError.innerHTML = "Please enter a username";
            isValid = false;
        }

        // Check email
        if (email.trim() === "") {
            emailError.innerHTML = "Please enter an email";
            isValid = false;
        }

        // Check password
        if (password.trim() === "") {
            passwordError.innerHTML = "Please enter a password";
            isValid = false;
        }

        if (isValid = true) {
            sessionStorage.setItem("loacalUsername", username);
        }

        return isValid;
    }
});