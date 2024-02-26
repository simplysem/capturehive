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
                <li><a href="profile.html">Profile</a></li>
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

    // Event listener for logout
    nav.addEventListener("click", function(event) {
        if (event.target.id === "logout") {
            // Set isLoggedIn to false
            sessionStorage.setItem("isLoggedIn", "false");
            window.location.href = "index.html";
        }
    });

    // Event listener for page unload (closing page)
    window.addEventListener("beforeunload", function(event) {
        // Check if the user is logged in before unloading the page
        const isLoggedIn = sessionStorage.getItem("isLoggedIn");
        if (isLoggedIn === "true") {
            // No need to update session storage here
            // Session storage will automatically be cleared when the session ends
        }
    });
});
