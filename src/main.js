window.addEventListener('DOMContentLoaded', () => {
    const loginModal = document.getElementById('loginModal');
    const loginForm = document.getElementById('loginForm');

    loginModal.classList.remove('hidden');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === 'password') {
            alert('Login successful!');
            loginModal.classList.add('hidden');
        } else {
            alert('Invalid username or password');
        }
    });
});
