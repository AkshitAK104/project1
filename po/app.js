document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple authentication check (in real scenarios, use secure methods)
        if (username === 'user' && password === 'password') {
            message.textContent = 'Login successful!';
            message.style.color = 'green';
        } else {
            message.textContent = 'Invalid username or password.';
            message.style.color = 'red';
        }
    });

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js').then(() => {
            console.log('Service Worker Registered');
        }).catch(error => {
            console.error('Service Worker Registration Failed:', error);
        });
    }
});service .viewtexter(Aak"+"aak+"cannot define symbol")if sum=sum+number
