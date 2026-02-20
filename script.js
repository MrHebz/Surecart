document.addEventListener("DOMContentLoaded", function() {

    // --- 1. LOGIN MODAL LOGIC ---
    const loginModal = document.getElementById('login-modal');
    const openLoginBtn = document.querySelector('.btn-account'); 
    const closeLoginBtn = document.getElementById('close-login'); 

    if(openLoginBtn) {
        openLoginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.style.display = 'flex';
        });
    }

    if(closeLoginBtn) {
        closeLoginBtn.addEventListener('click', () => {
            loginModal.style.display = 'none';
        });
    }

    // Close modal if clicking outside the box
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // --- 2. ADD TO CART LOGIC ---
    let cartCounter = 0;
    const cartCountElement = document.querySelector('.cart-count');
    const addButtons = document.querySelectorAll('.add-cart-btn');
    const cartBox = document.querySelector('.cart-box');

    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            cartCounter++;
            if(cartCountElement) {
                cartCountElement.innerText = cartCounter;
            }
        });
    });

    // --- 3. CHECKOUT LOGIC (Click the Cart) ---
    if(cartBox) {
        cartBox.addEventListener('click', function() {
            cartCounter = 0;
            if(cartCountElement) {
                cartCountElement.innerText = cartCounter;
            }

            cartBox.style.backgroundColor = "#2ecc71"; 
            cartBox.style.borderColor = "#2ecc71";
            cartBox.style.color = "white";

            alert("Checkout complete! Your details will be sent to your email.");

            setTimeout(() => {
                cartBox.style.backgroundColor = ""; 
                cartBox.style.borderColor = "";
                cartBox.style.color = "";
            }, 1500);
        });
    }

    // --- 4. SEARCH BAR LOGIC ---
    const searchInput = document.querySelector('.search-container input');
    const searchBtn = document.querySelector('.find-btn');
    const productCards = document.querySelectorAll('.product-card');

    function performSearch() {
        // Get what the user typed and make it lowercase
        const searchTerm = searchInput.value.toLowerCase();

        // Loop through every single product card on the page
        productCards.forEach(card => {
            // Find the <h3> tag inside this card and get the product name
            const productName = card.querySelector('h3').innerText.toLowerCase();
            
            // If the product name includes the letters the user typed...
            if (productName.includes(searchTerm)) {
                card.style.display = "flex"; // Show it (your CSS uses flex for cards)
            } else {
                card.style.display = "none"; // Hide it
            }
        });
    }

    // Trigger the search every time the user types a letter
    if(searchInput) {
        searchInput.addEventListener('input', performSearch);
    }

    // Also trigger the search if they click the "FIND" button
    if(searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }

});
