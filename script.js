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
    
    // The main cart box in the navbar
    const cartBox = document.querySelector('.cart-box');

    // Logic for clicking the "Add to Cart" buttons
    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Increase the number
            cartCounter++;
            if(cartCountElement) {
                cartCountElement.innerText = cartCounter;
            }
        });
    });

    // --- 3. CHECKOUT LOGIC (Click the Cart) ---
    if(cartBox) {
        cartBox.addEventListener('click', function() {
            // 1. Reset the math back to 0
            cartCounter = 0;
            if(cartCountElement) {
                cartCountElement.innerText = cartCounter;
            }

            // 2. Make the Cart box turn Green
            cartBox.style.backgroundColor = "green"; // Green color
            cartBox.style.borderColor = "green";
            cartBox.style.color = "white";

            // Optional: Give the user an alert to show it "worked"
            alert("Checkout complete! Your details will be sent to your email.");

            // 3. Wait 1.5 seconds, then change the colors back to normal
            setTimeout(() => {
                cartBox.style.backgroundColor = ""; 
                cartBox.style.borderColor = "";
                cartBox.style.color = "";
            }, 1500);
        });
    }

});
