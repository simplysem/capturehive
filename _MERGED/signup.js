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
            // Redirect to another page if needed
            window.location.href = "index.html";
        }
    });
});
