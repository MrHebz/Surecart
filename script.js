document.addEventListener("DOMContentLoaded", function() {

    // 1. Get the elements
    const loginModal = document.getElementById('login-modal');
    const openLoginBtn = document.querySelector('.btn-account'); // Create Account button
    const closeLoginBtn = document.getElementById('close-login'); // X button

    // 2. Open Modal
    if(openLoginBtn) {
        openLoginBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Stop the link from jumping
            loginModal.style.display = 'flex';
        });
    }

    // 3. Close Modal (Click X)
    if(closeLoginBtn) {
        closeLoginBtn.addEventListener('click', () => {
            loginModal.style.display = 'none';
        });
    }

    // 4. Close Modal (Click Outside)
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

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

   

