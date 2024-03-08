document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.querySelector("form");

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const usernameInput = document.getElementById("username");
        const username = usernameInput.value.trim();

        if (username === "example") {
            alert("This username is already taken.");
        } else {
            sessionStorage.setItem("localUser", username);
            sessionStorage.setItem("isLoggedIn", "true");
            // takes the user back to the home page
            window.location.href = "index.html";
        }
    });
});
