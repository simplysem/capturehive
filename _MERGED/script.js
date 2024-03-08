document.addEventListener("DOMContentLoaded", function() {
    const nav = document.getElementById("nav");

    function loadNav() {
        const isLoggedIn = sessionStorage.getItem("isLoggedIn");

        if (isLoggedIn === "true") {
            // Show logged-in variant
            nav.innerHTML = `
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html#browse">Gallery</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="logedInUserProfile.html">Profile</a></li>
                <li><a href="#" id="logout">Logout</a></li>
            `;
        } else {
            // Show logged-out variant
            nav.innerHTML = `
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html#browse">Gallery</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="login.html">Login</a></li>
            `;
        }
    }

    // Initial load
    loadNav();

    // event listener for logout
    nav.addEventListener("click", function(event) {
        if (event.target.id === "logout") {
            sessionStorage.setItem("isLoggedIn", "false"); // Set isLoggedIn to false
            window.location.href = "index.html";
        }
    });

    // event listener for closing page
    window.addEventListener("beforeunload", function(event) {
        // check if the user is logged in before closing page
        const isLoggedIn = sessionStorage.getItem("isLoggedIn");
        if (isLoggedIn === "true") {
        }
    });
});
