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

}); 
