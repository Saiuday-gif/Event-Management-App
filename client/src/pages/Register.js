import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            // Proxy is set in package.json, so we can use relative path
            await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
            alert("Registration Successful!");
        } catch (error) {
            console.error(error);
            alert("Registration Failed! Please check if your backend server is running on port 5000.");
        }
    };

    return (
        <div style={{ padding: '50px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ padding: '30px', border: '1px solid #ddd', borderRadius: '10px', width: '100%', maxWidth: '400px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                <h2 style={{ textAlign: 'center' }}>Create Account</h2>
                <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <input type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)} required style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    <input type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} required style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    <button type="submit" style={{ padding: '12px', backgroundColor: '#27ae60', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;