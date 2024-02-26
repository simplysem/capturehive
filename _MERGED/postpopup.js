function openpost() {
    var blur = document.getElementById('blur');
    var popup = document.getElementById('post1');
    popup.style.display = 'block';
    blur.classList.add('active'); // Add blur class to body
}

function closepost() {
    var blur = document.getElementById('blur');
    var popup = document.getElementById('post1');
    popup.style.display = 'none';
    blur.classList.remove('active'); // Remove blur class from body
}