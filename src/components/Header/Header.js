import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import UserContext from '../../UserContext';
import './Header.css';
import MenuIcon from '../../img/icon/menu.png';

const Header = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [user] = useContext(UserContext);
    const location = useLocation();
    useEffect(() => setIsMenuVisible(false), [location]);

    return (
        <header className="header">
            <div className="container">
                <div className="navbar">
                    <Link className="navbar__logo" to="/">Urban Riders</Link>
                    <div className={`nav__box ${isMenuVisible ? "visible" : ""}`}>
                        <nav className="navbar__nav">
                            <Link className="navbar__link" to="/">Home</Link>
                            <Link className="navbar__link" to="/destination/bike">Destination</Link>
                            <Link className="navbar__link" to="/blog">Blog</Link>
                            <Link className="navbar__link" to="/contact">Contact</Link>
                            {user.isLoggedIn && <Link className="navbar__link user" to="/profile">{user.name}</Link>}
                            {!user.isLoggedIn && <Link className="btn btn__primary" to="/login">Login</Link>}
                        </nav>
                    </div>
                    <button className="nav__menu--icon" onClick={() => setIsMenuVisible(!isMenuVisible)}>
                        <img src={MenuIcon} alt="Mobile Menu" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;