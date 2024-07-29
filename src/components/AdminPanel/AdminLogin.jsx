// components/Login/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'; // Ensure this file exists for styling

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); // Prevents the default form submission
        const correctUsername = 'admin'; // Replace with your desired username
        const correctPassword = 'admin'; // Replace with your desired password

        if (username.trim() === correctUsername && password.trim() === correctPassword) {
            localStorage.setItem('authenticated', 'true');
            navigate('/admin');
        } else {
            alert('Incorrect username or password');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin}> {/* Ensure form tags are used correctly */}
                <h2>Admin Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                <a href="/">Home</a>
            </form>
        </div>
    );
};

export default Login;
