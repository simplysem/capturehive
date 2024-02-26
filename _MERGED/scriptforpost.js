// Retrieve comments from session storage when the page loads
var comments = JSON.parse(sessionStorage.getItem('comments')) || [];

// Function to add comments to the DOM
function addCommentsToDOM() {
    var commentsList = document.querySelector('.comments-list');
    commentsList.innerHTML = ''; // Clear existing comments

    comments.forEach(function(comment) {
        var newComment = document.createElement('li');
        newComment.classList.add('comment');
        var commentContent = document.createElement('div');
        commentContent.classList.add('comment-content');
        commentContent.textContent = comment;
        newComment.appendChild(commentContent);
        commentsList.appendChild(newComment);
    });
}

// Add existing comments to the DOM when the page loads
addCommentsToDOM();

// Retrieve the value of isLoggedIn from sessionStorage
var isLoggedIn = sessionStorage.getItem("isLoggedIn");

// Check if isLoggedIn is true
if (isLoggedIn === 'true') {
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

    // Comment functionality
    document.getElementById('comment-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get comment input value
        var commentInput = document.getElementById('comment-input').value.trim();
        
        if (commentInput !== '') {
            // Add the comment to the comments array
            comments.push(commentInput);
            // Save comments to session storage
            sessionStorage.setItem('comments', JSON.stringify(comments));
            // Update the comments displayed on the page
            addCommentsToDOM();
            // Clear the comment input
            document.getElementById('comment-input').value = '';
        }
    });
} else {
    // If user is not logged in, disable commenting
    document.getElementById('comment-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
    });
}