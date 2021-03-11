import React from 'react';
import './Navbar.css';
import logo from '../../../images/logo.png';

const Navbar = () => {
    return (
        <div class="container">
            <div className="row">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/home"><img src={logo} class="logo-area" alt=""/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end nav-area" id="navbarNavAltMarkup">
                <div class="navbar-nav ">
                    <a class="nav-link active nav-area" aria-current="page" href="/home">HOME</a>
                    <a class="nav-link active nav-area" href="/about">ABOUT</a>
                    <a class="nav-link active nav-area" href="/gallery">GALLERY</a>
                    <a class="nav-link active nav-area" href="/shop">SHOP</a>
                    <a class="nav-link active nav-area" href="/blog">BLOG</a>
                    <a class="nav-link active nav-area" href="/contact">CONTACT</a>
                    
                </div>
                </div>
            </div>
            </nav>
            </div>
        </div>
    );
};

export default Navbar;