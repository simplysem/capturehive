function login(event) {
    event.preventDefault(); // Prevent submission

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // remove error class
    usernameInput.classList.remove("error");
    passwordInput.classList.remove("error");

    // check if username or password is empty
    if (username === "" || password === "") {
        // display error by turning input boxes red
        if (username === "") {
            usernameInput.classList.add("error");
        }
        if (password === "") {
            passwordInput.classList.add("error");
        }
        return false; // prevent submission
    }

    // check if username and password are correct
    console.log("Username:", username);
    console.log("Password:", password);
    if (username === "example" && password === "password") {
        // det session storage variables
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("localUser", "example");

        // redirect to the home page
        window.location.href = "index.html";
    } else {
        alert("Wrong Username or password.");
    }

    return false; // prevent submission
}
