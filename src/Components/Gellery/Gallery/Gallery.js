import React from 'react';
import './Gallery.css';
import gallery from '../../../images/gallery-banner.PNG';
import logo from '../../../images/logo.png';
import Logo from '../../../images/Logo-Footer.png';
import Acrylic from '../Acrylic/Acrylic';
import {  FaFacebookSquare, FaArtstation } from 'react-icons/fa';
import {  ImBehance2 } from 'react-icons/im';

const Gallery = () => {
    return (
        <div>

            <section className="nav-area">
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
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <img class='img-fluid' src={gallery} alt=""/>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row acrylic-area">
                        <Acrylic></Acrylic>
                    </div>
                </div>
            </section>
            <section class="container">
                <div className="row footer-area">
                    <div className="col-md-4 footer-margin">
                        <img src={Logo} class="logo-area color-logo" alt=""/>
                        <div class='icon-area'>
                                <a target="_blank" class='icon-style' href="https://www.behance.net/arafat_hosen"><ImBehance2 /></a>
                                <a target="_blank" class='icon-style ' href="https://www.facebook.com/arafathosen2"><FaFacebookSquare/></a>
                                <a target="_blank" class='icon-style' href="https://www.artstation.com/artistarafat"><FaArtstation/></a>
                            
                        </div>
                        
                    </div>
                    <div className="col-md-4">
                        <h4>LINKS</h4>
                        <br/>
                        <p><a class="footer-link" href="/home">Home</a></p>
                        <p><a class="footer-link" href="/about">About</a></p>
                        <p><a class="footer-link" href="/gallery">Gallery</a></p>
                        <p><a class="footer-link" href="/shop">Shop</a></p>
                    </div>
                    <div className="col-md-4">
                        <h4>GET IN TOUCH WITH US</h4>
                        <br/>
                          <p>832 Thompson Drive, San Fransisco CA 94107, United States</p>
                        <p>+123 345123 556</p>
                        <p>support@bookland.id</p>
                    </div>
                </div>
                <div className="row last">
                    <footer>Arafat Hosen© 2020 All Rights Reserved</footer>
                </div>
                
            </section>

        </div>
    );
};

export default Gallery;