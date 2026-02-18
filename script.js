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

    // --- 2. ADD TO CART LOGIC (CLEAN VERSION) ---
    let cartCounter = 0;
    const cartCountElement = document.querySelector('.cart-count');
    const addButtons = document.querySelectorAll('.add-cart-btn');

    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            // 1. Increase the math
            cartCounter++;
            
            // 2. Update the number on the screen
            if(cartCountElement) {
                cartCountElement.innerText = cartCounter;
            }
            
            // Removed the Green Color and "Added!" text logic
        });
    });

});
