// contact.js
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');
    if (!name || !email || !message) {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.style.color = 'red';
        return false;
    }
    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.style.color = 'red';
        return false;
    }
    formMessage.textContent = 'Thank you for your message!';
    formMessage.style.color = 'green';
    return false; // Prevent actual submission for demo
}
