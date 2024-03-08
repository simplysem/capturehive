function openpost() {
    var blur = document.getElementById('blur');
    var popup = document.getElementById('post1');
    popup.style.display = 'block';
    blur.classList.add('active'); // Add blur 
}

function closepost() {
    var blur = document.getElementById('blur');
    var popup = document.getElementById('post1');
    popup.style.display = 'none';
    blur.classList.remove('active'); // Remove blur 
}