const signupFormHandler = async (event) => {
    event.preventDefault();
    console.log('click');
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (password && username) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log('success');
            // If successful, show success message and redirect to login
            window.location.replace('/login');
            // const signupBox = document.querySelector('.signup-box');
            // const successMessage = document.createElement('div');
            // successMessage.className = 'success-message';
            // successMessage.textContent = 'Please sign in with your new account.';
            // signupBox.insertBefore(successMessage, signupBox.firstChild);
            // document.querySelector('.signup-form').style.display = 'none';
            // document.querySelector('.login-form').style.display = 'block';
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
// document.querySelector('.signup-form').style.display = 'none';
// document.querySelector('.error-message').style.display = 'none';
// document.querySelector('.success-message').style.display = 'none';
