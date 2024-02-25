// JavaScript for handling like, favorite, and comment submission

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
  
  // Comment submission functionality
  document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get comment input value
    var commentInput = document.getElementById('comment-input').value.trim();
    
    if (commentInput !== '') {
      // Create new comment element
      var newComment = document.createElement('li');
      newComment.classList.add('comment');
      
      var commentContent = document.createElement('div');
      commentContent.classList.add('comment-content');
      commentContent.textContent = commentInput;
      
      newComment.appendChild(commentContent);
      
      // Append the new comment to the comments list
      document.querySelector('.comments-list').appendChild(newComment);
      
      // Clear the comment input
      document.getElementById('comment-input').value = '';
    }
  });
  