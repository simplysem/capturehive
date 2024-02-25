document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('tag').addEventListener('change', filterGallery);
    document.getElementById('sorting').addEventListener('change', sortGallery);

    function filterGallery() {
        const tagValue = document.getElementById('tag').value;
        const gallery = document.getElementById('gallery');
        const items = Array.from(gallery.children);

        items.forEach(item => {
            if (tagValue === 'all' || item.dataset.tag === tagValue) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    }

    function sortGallery() {
        const sortingValue = document.getElementById('sorting').value;
        const gallery = document.getElementById('gallery');
        const items = Array.from(gallery.children);

        items.sort((a, b) => {
            const aValue = parseInt(a.dataset[sortingValue]);
            const bValue = parseInt(b.dataset[sortingValue]);
            return bValue - aValue;
        });

        gallery.innerHTML = '';
        items.forEach(item => {
            gallery.appendChild(item);
        });
    }

    // Initial filtering and sorting
    filterGallery();
    sortGallery();
});