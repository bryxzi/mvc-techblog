const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log('click');

    // Collect values from the login form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/');
        } else {
            // If login failed, show an error message
            const errorMessage = document.querySelector('.error-message');
            errorMessage.textContent = 'Invalid username or password.';
            errorMessage.style.display = 'block';
        }
    }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

// document.querySelector('.signup-form').style.display = 'none';
// document.querySelector('.error-message').style.display = 'none';
// document.querySelector('.success-message').style.display = 'none';
