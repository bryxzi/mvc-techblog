const loginFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/profile');
        } else {
            // If login failed, show an error message
            const errorMessage = document.querySelector('.error-message');
            errorMessage.textContent = 'Invalid email or password.';
            errorMessage.style.display = 'block';
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (email && password && username) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, show success message and redirect to login
        const loginHeading = document.querySelector('#login-heading');
        loginHeading.textContent = 'Login';
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Please sign in with your new account.';
        loginHeading.parentNode.insertBefore(successMessage, loginHeading.nextSibling);
        document.querySelector('.signup-form').style.display = 'none';
        document.querySelector('.login-form').style.display = 'block';
  
        // If successful, redirect the browser to the profile page
        // document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
const signupLinkHandler = (event) => {
    event.preventDefault();
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.signup-form').style.display = 'block';
    document.querySelector('#login-heading').textContent = 'Signup';
};

const loginLinkHandler = (event) => {
    event.preventDefault();
    document.querySelector('.signup-form').style.display = 'none';
    document.querySelector('.login-form').style.display = 'block';
    document.querySelector('#login-heading').textContent = 'Login';
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);

document
    .querySelector('.signup-link')
    .addEventListener('click', signupLinkHandler);

document
    .querySelector('.login-link')
    .addEventListener('click', loginLinkHandler);

document.querySelector('.signup-form').style.display = 'none';
document.querySelector('.error-message').style.display = 'none';
document.querySelector('.success-message').style.display = 'none'