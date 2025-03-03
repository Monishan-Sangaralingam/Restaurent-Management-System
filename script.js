document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Simple validation
    if (username === 'user' && password === 'password') {
      // Successful login
      alert('Login successful! Redirecting to booking page...');
      window.location.href = 'booking.html'; // Redirect to booking page
    } else {
      // Show error message
      document.getElementById('error-message').textContent = 'Invalid username or password.';
    }
  });