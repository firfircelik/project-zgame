import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userActions';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { error } = useSelector(state => state.user);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
    };

    return (
        <main>
            <h2>Giriş Yap</h2>
            {error && <p className="error-message">{error.message}</p>}
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Şifre" required />
                <button type="submit">Giriş Yap</button>
            </form>
        </main>
    );
};

export default Login;
