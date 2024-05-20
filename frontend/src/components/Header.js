import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <h1>Quest of Hearts</h1>
            <nav>
                <Link to="/">Ana Sayfa</Link>
                <Link to="/register">Kayıt Ol</Link>
                <Link to="/login">Giriş Yap</Link>
                <Link to="/upload-questions">Bilmece Yükle</Link>
                <Link to="/gameplay">Oyna</Link>
                <Link to="/payment">Ödeme</Link>
                <Link to="/feedback">Geri Bildirim</Link>
                <Link to="/help">Yardım</Link>
            </nav>
        </header>
    );
};

export default Header;
