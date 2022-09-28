import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <header>
            <nav className="navbar bg-light">
                <div className="container d-lg-block d-md-block d-flex justify-content-center">
                    <a className="navbar-brand" href='./home'>
                        <img src={logo} alt="Logo" className="d-inline-block align-text-top" />
                        <span>SPORTS-VIEW</span>
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;