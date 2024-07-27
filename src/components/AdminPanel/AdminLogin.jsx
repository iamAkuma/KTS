// components/Login/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'; // Create a CSS file for styling if needed

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const correctUsername = 'admin'; // Replace with your desired username
        const correctPassword = 'admin'; // Replace with your desired password

        if (username === correctUsername && password === correctPassword) {
            localStorage.setItem('authenticated', true);
            navigate('/admin');
        } else {
            alert('Incorrect username or password');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
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
                <button type="submit">Admin Login</button>
            </form>
        </div>
    );
};

export default Login;
