document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme toggle first - this is needed on all pages
    initThemeToggle();

    // Only initialize product-related elements if we're on the main page
    if (document.querySelector('.product-card')) {
        const modal = document.getElementById('product-modal');
        const closeModal = document.querySelector('.close');
        const buyWhatsApp = document.getElementById('buy-whatsapp');
        const buyEmail = document.getElementById('buy-email');
        const viewProductButtons = document.querySelectorAll('.view-product');

        // View product functionality
        viewProductButtons.forEach(button => {
            button.addEventListener('click', () => {
                const productCard = button.closest('.product-card');
                const productId = productCard.dataset.productId;
                const productTitle = productCard.querySelector('h3').textContent;
                const productImage = productCard.querySelector('img').src;
                const productPrice = productCard.querySelector('p').textContent;

                document.getElementById('modal-product-title').textContent = productTitle;
                document.getElementById('modal-product-image').src = productImage;
                document.getElementById('modal-product-price').textContent = productPrice;
                document.getElementById('modal-product-description').textContent = `This is a placeholder description for ${productTitle}. Replace this with actual product details.`;

                modal.style.display = 'block';
            });
        });

        // Close modal
        if (closeModal) {
            closeModal.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }

        // Close modal when clicking outside
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Buy via WhatsApp
        if (buyWhatsApp) {
            buyWhatsApp.addEventListener('click', () => {
                const productTitle = document.getElementById('modal-product-title').textContent;
                const productPrice = document.getElementById('modal-product-price').textContent;
                const message = `Hi, I'm interested in buying ${productTitle} for ${productPrice}`;
                const whatsappUrl = `https://wa.me/03333737391?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
            });
        }

        // Buy via Email
        if (buyEmail) {
            buyEmail.addEventListener('click', () => {
                const productTitle = document.getElementById('modal-product-title').textContent;
                const productPrice = document.getElementById('modal-product-price').textContent;
                const subject = `Inquiry about ${productTitle}`;
                const body = `Hi, I'm interested in buying ${productTitle} for ${productPrice}`;
                const mailtoUrl = `mailto:animalized6@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                window.location.href = mailtoUrl;
            });
        }
    }

    // Initialize common functionality
    initCommonFunctionality();
});

function initThemeToggle() {
    const toggleSwitch = document.querySelector('#theme-toggle');
    const themeWrapper = document.querySelector('.theme-switch-wrapper');
    
    if (!toggleSwitch || !themeWrapper) {
        console.log('Theme toggle elements not found');
        return;
    }

    // Check for saved theme preference or system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', savedTheme);
    toggleSwitch.checked = savedTheme === 'dark';

    // Remove any existing click listeners
    themeWrapper.replaceWith(themeWrapper.cloneNode(true));
    
    // Get the fresh element after replacing
    const freshWrapper = document.querySelector('.theme-switch-wrapper');
    const freshToggle = document.querySelector('#theme-toggle');

    // Add click event listener
    freshWrapper.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get current theme and switch to opposite
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Update checkbox state
        freshToggle.checked = newTheme === 'dark';
        
        // Update theme
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        console.log('Theme changed to:', newTheme);
        updateGoogleFormTheme(newTheme === 'dark');
    });
}

function initCommonFunctionality() {
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                alert(`Searching for: ${searchInput.value}`);
                searchInput.value = '';
            }
        });
    }

    // Dropdown menu functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    if (dropdowns.length > 0) {
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('mouseenter', () => {
                dropdown.querySelector('.dropdown-content').style.display = 'block';
            });
            dropdown.addEventListener('mouseleave', () => {
                dropdown.querySelector('.dropdown-content').style.display = 'none';
            });
        });
    }
}

function updateGoogleFormTheme(isDark) {
    const googleForm = document.getElementById('google-form');
    if (googleForm) {
        const baseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfWmAE6ngZBavPQeClKcbJdpWtT3mATttWPuolzZNrXj6cGJg/viewform?embedded=true';
        const darkTheme = '&themeId=1';
        googleForm.src = isDark ? baseUrl + darkTheme : baseUrl;
    }
}

window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const isDarkMode = savedTheme === 'dark';
    updateGoogleFormTheme(isDarkMode);
});
