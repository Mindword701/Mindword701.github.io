document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // กำหนด username และ password ที่ถูกต้องไว้ในโค้ด
    const correctUsername = 'admin';
    const correctPassword = '1234';

    if (username === correctUsername && password === correctPassword) {
        alert('Login Successful');
        // สามารถ redirect ไปหน้าอื่นได้ เช่น window.location.href = 'dashboard.html';
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});
