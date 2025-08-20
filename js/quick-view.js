function openQuickView(event, button) {
    // Prevent the click from bubbling up to parent elements
    event.preventDefault();
    event.stopPropagation();
    
    const modal = document.getElementById('quickViewModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalDescription = document.getElementById('modalDescription');
    
    // Get data from button attributes
    const data = button.dataset;
    
    // Update modal content
    modalImage.src = data.image;
    modalImage.alt = data.title;
    modalTitle.textContent = data.title;
    console.log(data);
    if (data.priceRange) {
        modalPrice.textContent = `$${data.priceRange}`;
    } else {
        modalPrice.textContent = `$${data.price}`;
    }
    modalDescription.textContent = data.description;
    
    // Show modal
    modal.style.display = 'block';
    document.body.classList.add('modal-open');
}

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('quickViewModal');
    
    // Close button
    const closeBtn = document.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        });
    }
    
    // Click outside to close
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });
});