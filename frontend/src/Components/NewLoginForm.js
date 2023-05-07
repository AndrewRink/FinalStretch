import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewLoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const credentials = {
          email_address: email,
          password: password
        };
        const response = await fetch(`http://localhost:5000/authentication`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        });
      
        const data = await response.json();
      
        if (response.status === 200) {
            console.log(data.token);
            localStorage.setItem('token', data.token);
            setUserName(data.user.first_name);
            navigate(`/`, { state: { userName: data.user.first_name } });
          } else {
            setErrorMessage(data.message);
          }
      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Log In</button>
            </form>
            {errorMessage && <div>{errorMessage}</div>}
            {userName && <div>Welcome, {userName}!</div>}
        </div>
    );
};

export default NewLoginForm;