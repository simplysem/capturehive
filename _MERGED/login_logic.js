function login(event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve the username and password values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Get the username and password input elements
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    // Reset previous styling
    usernameInput.style.borderColor = "#ccc";
    passwordInput.style.borderColor = "#ccc";

    // Check if username and password are both missing
    if (username.trim() === "" && password.trim() === "") {
        usernameInput.style.borderColor = "red";
        passwordInput.style.borderColor = "red";
        return false; // Prevent form submission
    }

    // Check if only username is missing
    if (username.trim() === "") {
        usernameInput.style.borderColor = "red";
        return false; // Prevent form submission
    }

    // Check if only password is missing
    if (password.trim() === "") {
        passwordInput.style.borderColor = "red";
        return false; // Prevent form submission
    }

    // Check if login credentials are valid (dummy validation)
    if (username === "example" && password === "password") {
        sessionStorage.setItem("isLoggedIn", "true"); // Store isLoggedIn in sessionStorage
        window.location.href = "index.html"; // Redirect to home page
        return false; // Prevent form submission
    } else {
        // Clear password field
        document.getElementById("password").value = "";

        // Highlight the password field
        passwordInput.style.borderColor = "red";
        return false; // Prevent form submission
    }
}
