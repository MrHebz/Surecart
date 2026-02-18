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
    // Start count at 0
    let cartCounter = 0;
    
    // Select the number in the navbar
    const cartCountElement = document.querySelector('.cart-count');
    
    // Select ALL "Add to Cart" buttons
    const addButtons = document.querySelectorAll('.add-cart-btn');

    // Loop through each button to add the click event
    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            // 1. Increase the math
            cartCounter = cartCounter + 1;
            
            // 2. Update the number on the screen
            if(cartCountElement) {
                cartCountElement.innerText = cartCounter;
            }

            // 3. Visual Feedback (Make button Green)
            const originalText = button.innerText;
            const originalColor = button.style.backgroundColor;
            const originalTextColor = button.style.color;

            // Change style to Green/Added
            button.innerText = "Added!";
            button.style.backgroundColor = "#2ecc71"; // Nice Green color
            button.style.color = "white";

            // Wait 1 second, then change it back
            setTimeout(() => {
                button.innerText = originalText;
                button.style.backgroundColor = ""; // Revert to CSS default
                button.style.color = ""; // Revert to CSS default
            }, 1000);

        });
    });

});
