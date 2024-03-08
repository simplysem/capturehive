// Function to close the popup
// Called out side Domload so that it can be accseed gloably
function closePopup() {
    var blur = document.getElementById('blur');
    var popup = document.getElementById('mypopup');
    popup.style.display = 'none';
    blur.classList.remove('active'); // remove blur class from body
            
    //set hasRead to true in session storage
    // I am assuming that if you close the pop up you have read it
    sessionStorage.setItem("hasRead", 'true');
}

document.addEventListener("DOMContentLoaded", function() {

    // VAriable set here because it would never be initalized
    // Retrieve the value of hasRead from session storage
    let hasRead = sessionStorage.getItem("hasRead");

    // Check if hasRead is null (indicating it hasn't been initialized yet)
    if (hasRead === null) {
        // Set hasRead to false in session storage
        sessionStorage.setItem("hasRead", false);
    }

    function openPopup() {
        var blur = document.getElementById('blur');
        var popup = document.getElementById("mypopup");
        popup.style.display = 'block';
        blur.classList.add('active'); // Add blur class to body
    }

    // If has read if false or null open it
    if (hasRead === null || hasRead === 'false') {
        window.onload = function () {
            openPopup();
        }
    }
});