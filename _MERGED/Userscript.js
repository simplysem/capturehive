document.addEventListener("DOMContentLoaded", function() {
    // Retrieve username from session storage
    var username = sessionStorage.getItem("localUser");
  
    // Display username in the profile
    var usernameElement = document.getElementById("username");
    if (username) {
      usernameElement.innerText = "Username: " + username;
    }
  });
  