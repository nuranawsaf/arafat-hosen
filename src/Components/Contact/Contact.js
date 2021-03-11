import React from 'react';
import './Contact.css';
import logo from '../../images/logo.png';

const Contact = () => {
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
            <div className="container form-area1">
            
            <form className="form-bg1" action="https://formspree.io/f/xzbkobwo" method="POST">

                <div className="form-group1">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName"/>
                </div>

                <div className="form-group1">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" />
                </div>

                <div className="form-group1">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" />
                </div>

                <div className="form-group1">
                    <label htmlFor="massage">Massage</label>
                    <textarea name="massage" id="massage" cols="30" rows="10"></textarea>
                </div>

                <button type="submit">Submit</button>
            </form>
        <div id="status"></div>
      </div>
        </div>
    );
};

export default Contact;