document.addEventListener("DOMContentLoaded", function() {
    const nav = document.getElementById("nav");

    function loadNav() {
        const isLoggedIn = localStorage.getItem("isLoggedIn");

        if (isLoggedIn === "true") {
            // Show logged-in variant
            nav.innerHTML = `
                <li><a href="profile.html">Profile</a></li>
                <li><a href="#" id="logout">Logout</a></li>
            `;
        } else {
            // Show logged-out variant
            nav.innerHTML = `
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
            localStorage.setItem("isLoggedIn", "false");
            window.location.href = "index.html";
        }
    });

    // Event listener for page unload (closing page)
    window.addEventListener("beforeunload", function(event) {
        // Check if the user is logged in before unloading the page
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn === "true") {
            // Set isLoggedIn to false when the page is closed
            localStorage.setItem("isLoggedIn", "false");
        }
    });
});
