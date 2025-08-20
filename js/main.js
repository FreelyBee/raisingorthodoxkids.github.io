document.addEventListener('DOMContentLoaded', function() {
    // Search toggle functionality
    const searchToggle = document.querySelector('.search-toggle');
    if (searchToggle) {
        searchToggle.addEventListener('click', function() {
            // Add search overlay functionality here
        });
    }

    // Product image gallery
    const productImages = document.querySelectorAll('.product-gallery img');
    const mainImage = document.querySelector('.product-main-image img');
    
    if (productImages && mainImage) {
        productImages.forEach(img => {
            img.addEventListener('click', function() {
                mainImage.src = this.src;
            });
        });
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add newsletter subscription functionality here
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.site-header');
    let lastScroll = 0;
    let scrollThreshold = 100; // Minimum scroll before header hides
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        // Add shadow when page is scrolled
        if (currentScroll > 0) {
            header.classList.add('shadow');
        } else {
            header.classList.remove('shadow');
        }
        
        // Only start hiding header after scrolling past threshold
        if (currentScroll > scrollThreshold) {
            // Scrolling down
            if (currentScroll > lastScroll) {
                header.classList.add('header-hidden');
            } 
            // Scrolling up
            else {
                header.classList.remove('header-hidden');
            }
        }
        
        lastScroll = currentScroll;
    }, { passive: true }); // Performance optimization
});