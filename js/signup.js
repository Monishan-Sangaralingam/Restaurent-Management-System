// signup.js

document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');
    const errorMessage = document.getElementById('error-message');

    signupForm.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();

        // Clear previous error messages
        errorMessage.textContent = '';

        // Validate inputs
        if (!fullName || !email || !password || !confirmPassword) {
            errorMessage.textContent = 'Please fill in all fields.';
            return;
        }

        if (password !== confirmPassword) {
            errorMessage.textContent = 'Passwords do not match.';
            return;
        }

        // Simulate a signup request (replace with real API call)
        try {
            const response = await simulateSignup(fullName, email, password);

            if (response.success) {
                // Successful signup
                alert('Signup successful! Redirecting to the login page...');
                window.location.href = 'login.html'; // Redirect to login page
            } else {
                // Error during signup
                errorMessage.textContent = response.message || 'An error occurred during signup.';
            }
        } catch (error) {
            // Handle network or server errors
            errorMessage.textContent = 'An error occurred. Please try again later.';
            console.error('Signup error:', error);
        }
    });

    // Simulate a signup request (replace with real API call)
    function simulateSignup(fullName, email, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Mock response
                resolve({
                    success: true,
                    message: 'Signup successful!',
                });
            }, 1000); // Simulate a 1-second delay
        });
    }
});