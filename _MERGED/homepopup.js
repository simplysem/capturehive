// Check if "hasRead" is null (indicating it hasn't been initialized yet)
if (hasRead === null) {
    // Set "hasRead" to false in session storage
    sessionStorage.setItem("hasRead", false);
}

// Retrieve the value of "hasRead" from session storage
let hasRead = sessionStorage.getItem("hasRead");


// Function to close the popup
// Called out side Domload so that it can be accseed gloably
function closePopup() {
    var blur = document.getElementById('blur');
    var popup = document.getElementById('mypopup');
    popup.style.display = 'none';
    blur.classList.remove('active'); // Remove blur class from body
        
    // Set "hasRead" to true in session storage
    // I am assuming that if you close the pop up you have read it
    sessionStorage.setItem("hasRead", 'true');
}

document.addEventListener("DOMContentLoaded", function() {

    console.log("china");

    function openPopup() {
        var blur = document.getElementById('blur');
        var popup = document.getElementById("mypopup");
        popup.style.display = 'block';
        blur.classList.add('active'); // Add blur class to body
    }

    // Check if "hasRead" is true (assuming you stored boolean values)
    if (hasRead === 'false') {
        console.log("In the place")

        window.onload = function () {
            openPopup();
        }
    }
});