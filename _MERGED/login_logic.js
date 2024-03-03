function login(event) {
    event.preventDefault(); // Prevent form submission

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Resetting previous error styles
    usernameInput.classList.remove("error");
    passwordInput.classList.remove("error");

    // Check if username or password is empty
    if (username === "" || password === "") {
        // Display error by turning input boxes red
        if (username === "") {
            usernameInput.classList.add("error");
        }
        if (password === "") {
            passwordInput.classList.add("error");
        }
        return false; // Prevent form submission
    }

    // Check if username and password match the credentials
    console.log("Username:", username);
    console.log("Password:", password);
    if (username === "example" && password === "password") {
        // Set session storage variables
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("localUser", "example");

        // Redirect to the home page
        window.location.href = "index.html";
    } else {
        // Display error by turning input boxes red
        usernameInput.classList.add("error");
        passwordInput.classList.add("error");
    }

    return false; // Prevent form submission
}
