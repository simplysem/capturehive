// Retrieve the value of isLoggedIn from sessionStorage
var isLoggedIn = sessionStorage.getItem("isLoggedIn");

// Check if isLoggedIn is false
if (isLoggedIn === 'false') {
    // Get the buttons by class name
    var likeButton = document.querySelector('.like-button');
    var favoriteButton = document.querySelector('.favorite-button');
    
    // Attach event listeners to show popup on button click
    likeButton.addEventListener('click', function() {
        showPopup();
    });
    
    favoriteButton.addEventListener('click', function() {
        showPopup();
    });
} else {
    // Like button functionality
    document.querySelector('.like-button').addEventListener('click', function() {
        var likeButton = this;
        if (likeButton.textContent === 'Like') {
            likeButton.textContent = 'Unlike';
        } else {
            likeButton.textContent = 'Like';
        }
    });
    
    // Favorite button functionality
    document.querySelector('.favorite-button').addEventListener('click', function() {
        var favoriteButton = this;
        if (favoriteButton.textContent === 'Favorite') {
            favoriteButton.textContent = 'Unfavorite';
        } else {
            favoriteButton.textContent = 'Favorite';
        }
    });
}

// Function to create and show the popup
function showPopup() {
  console.log("showPopup() function is called");
  
  var popupOverlay = document.createElement('div');
  popupOverlay.classList.add('popup-overlay');
  
  var popupFrame = document.createElement('iframe');
  popupFrame.src = 'popup.html';
  popupFrame.classList.add('popup-frame');
  
  popupOverlay.appendChild(popupFrame);
  document.body.appendChild(popupOverlay);
  
  // Close popup on click anywhere on the screen except the popup
  document.addEventListener('click', closePopupOutside);
  
  // Prevent propagation of click events from the popup
  popupOverlay.addEventListener('click', function(event) {
      event.stopPropagation();
  });
  
  // Add close button inside the popup
  var closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.classList.add('popup-close-button');
  closeButton.addEventListener('click', closePopup);
  popupOverlay.appendChild(closeButton);
}

// Function to close the popup when clicked outside
function closePopupOutside(event) {
  var popupOverlay = document.querySelector('.popup-overlay');
  if (popupOverlay && !popupOverlay.contains(event.target)) {
      popupOverlay.remove();
      document.removeEventListener('click', closePopupOutside);
  }
}

// Function to close the popup
function closePopup() {
  var popupOverlay = document.querySelector('.popup-overlay');
  if (popupOverlay) {
      popupOverlay.remove();
      document.removeEventListener('click', closePopupOutside);
  }
}
