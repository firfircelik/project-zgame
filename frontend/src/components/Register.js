import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/userActions';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [relationshipInfo, setRelationshipInfo] = useState('');
    const dispatch = useDispatch();
    const { error } = useSelector(state => state.user);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser({ email, password, relationshipInfo }));
    };

    return (
        <main>
            <h2>Kayıt Ol</h2>
            {error && <p className="error-message">{error.message}</p>}
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Şifre" required />
                <textarea name="relationshipInfo" value={relationshipInfo} onChange={(e) => setRelationshipInfo(e.target.value)} placeholder="İlişki Bilgileri" required></textarea>
                <button type="submit">Kayıt Ol</button>
            </form>
        </main>
    );
};

export default Register;
