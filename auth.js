// Handle token storage
const setToken = (token) => {
    localStorage.setItem('token', token);
};

const getToken = () => {
    return localStorage.getItem('token');
};

// Check if user is logged in
const isAuthenticated = () => {
    const token = getToken();
    return !!token;
};

// Handle login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        try {
            const response = await fetch('https://modify-backend-podomoro-cmell05.replit.app/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                setToken(data.token);
                window.location.href = 'index.html';
            } else {
                alert('Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed');
        }
    });
}
// Handle signup
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        try {
            console.log('Attempting signup with:', { name, email, password });
            const response = await fetch('https://modify-backend-podomoro-cmell05.replit.app/api/signup', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            });

            console.log('Signup response status:', response.status);
            const data = await response.json();
            console.log('Signup response data:', data);
            if (response.ok) {
                setToken(data.token);
                window.location.href = 'index.html';
            } else {
                alert(data.message || 'Signup failed. Please check your email and password.');
            }
        } catch (error) {
            console.error('Signup error:', error);
            const errorMessage = error.message || 'Server connection failed. Please try again.';
            alert(errorMessage);
        }
    });
}

