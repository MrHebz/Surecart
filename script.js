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