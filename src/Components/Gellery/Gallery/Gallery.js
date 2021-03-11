import React from 'react';
import './Gallery.css';
import gallery from '../../../images/gallery-banner.PNG';
import logo from '../../../images/logo.png';
import Acrylic from '../Acrylic/Acrylic';
import {  FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';

const Gallery = () => {
    return (
        <div>

            <section className="nav-area">
                <div class="container">
                    <div className="row">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><b>Arafat Hosen</b></a>
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
                        <img src={logo} class="logo-area color-logo" alt=""/>
                        <div class='icon-area'>
                            <a class='icon-style' href=""><FaFacebookF /></a>
                            <a class='icon-style' href=""><AiFillYoutube /></a>
                            <a class='icon-style' href=""><FaTwitter/></a>
                            <a class='icon-style' href=""><GrLinkedinOption/></a>
                            <a class='icon-style' href=""><FaInstagram/></a>
                        </div>
                        
                    </div>
                    <div className="col-md-4">
                        <h4>LINKS</h4>
                        <br/>
                        <p>Home</p>
                        <p>About</p>
                        <p>Gallery</p>
                        <p>Shop</p>
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