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
