document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('title');
    const nameField = document.getElementById('nameField');
    const loginBtn = document.getElementById('loginBtn');
    const signupLink = document.getElementById('signupLink');

    if (signupLink && loginBtn) {  // Ensure elements are present
        signupLink.addEventListener('click', function(event) {
            event.preventDefault();  // Prevent default link behavior
            title.innerHTML = "Sign Up";
            nameField.style.display = "block";
        });

        loginBtn.addEventListener('click', function() {
            title.innerHTML = "Login";
            nameField.style.display = "none";
        });
    } else {
        console.error('Element(s) not found');
    }
});
