import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const Login = ({ setLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            setLoggedIn(true);
            navigate('/admin');
        } else {
            setError('INVALID CREDENTIALS!');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Admin Login</h2>
                {error && <p className="login-error">{error}</p>}
                <div className="login-field">
                    <label>
                        Username:
                        <input
                            type="text"
                            className="login-input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                </div>
                <div className="login-field">
                    <label>
                        Password:
                        <input
                            type="password"
                            className="login-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>
                <div className="login-button-container">
                    <button className="login-button" onClick={handleLogin}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
