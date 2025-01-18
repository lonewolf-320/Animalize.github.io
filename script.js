document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.querySelector('.cart-count');
    const viewProductButtons = document.querySelectorAll('.view-product');
    const searchInput = document.querySelector('.search-input');
    const modal = document.getElementById('product-modal');
    const closeModal = document.querySelector('.close');
    const buyWhatsApp = document.getElementById('buy-whatsapp');
    const buyEmail = document.getElementById('buy-email');

    let itemsInCart = 0;

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
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Buy via WhatsApp
    buyWhatsApp.addEventListener('click', () => {
        const productTitle = document.getElementById('modal-product-title').textContent;
        const productPrice = document.getElementById('modal-product-price').textContent;
        const message = `Hi, I'm interested in buying ${productTitle} for ${productPrice}`;
        const whatsappUrl = `https://wa.me/03333737391?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });

    // Buy via Email
    buyEmail.addEventListener('click', () => {
        const productTitle = document.getElementById('modal-product-title').textContent;
        const productPrice = document.getElementById('modal-product-price').textContent;
        const subject = `Inquiry about ${productTitle}`;
        const body = `Hi, I'm interested in buying ${productTitle} for ${productPrice}`;
        const mailtoUrl = `mailto:animalized6@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
    });

    // Search functionality
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            alert(`Searching for: ${searchInput.value}`);
            searchInput.value = '';
        }
    });

    // Dropdown menu functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            dropdown.querySelector('.dropdown-content').style.display = 'block';
        });
        dropdown.addEventListener('mouseleave', () => {
            dropdown.querySelector('.dropdown-content').style.display = 'none';
        });
    });
});
