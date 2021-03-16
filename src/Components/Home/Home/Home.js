import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import pic1 from '../../../images/pic1.jpg';
import pic2 from '../../../images/pic2.jpg';
import other5 from '../../../images/other5.jpg';
import art1 from '../../../images/art1.jpg';
import art2 from '../../../images/art2.jpg';
import art3 from '../../../images/art3.jpg';
import art4 from '../../../images/art4.jpg';
import last from '../../../images/last.jpg';
import logo from '../../../images/logo.png';
import Logo from '../../../images/Logo-Footer.png';
import {  FaFacebookSquare, FaArtstation } from 'react-icons/fa';
import {  ImBehance2 } from 'react-icons/im';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>

            <div className="container">
                <div className="row">
                    <div class="featured-area col-sm-12">
                            <h3><b>Featured Works</b></h3>
                            <p>Technology and art combine to deliver a very contemporary <br/> visual story telling approach in the world of art.</p>
                            <div class="image-area">
                                <img class="pic1" src={pic1} alt=""/>
                                <img  src={pic2} alt=""/>
                                <img class="pic2" src={other5} alt=""/>
                            </div>
                    </div>

                    <div>
                        <div class="category-area">
                            <h3 class="text"><b>My Category</b></h3>
                            <p class="text1">Discover The World Through Original Paintings For Sale</p>
                        </div>
                    </div>

                    <div className="row category-full">
                    <section class="gellery-pic gel-pic"> 
                        <div class="image-area1">
                            <img src={art1} alt=""/>
                            <h6 class="card-title">Watercolor Paintings</h6>
                        </div>

                        <div class="image-area1">
                            <img src={art2} alt=""/>
                            <h6 class="card-title">Acrylic Paintings</h6>
                        </div>

                        <div class="image-area1">
                            <img src={last} class="last-pic" alt=""/>
                            <h6 class="card-title">Portraits</h6>
                        </div>

                        

                    </section>

                    <section class="gellery-pic gel-pic"> 
                        <div class="image-area2">
                            <img src={art3} alt=""/>
                            <h6 class="card-title">Sketches</h6>
                        </div>

                        <div class="image-area2">
                            <img src={art4} alt=""/>
                            <h6 class="card-title">Digital Atrs</h6>
                        </div>

                        

                    </section>
                    </div>

                    <div>
                        <div className="row footer-area">
                            <div className="col-md-4 footer-margin">
                                <img src={Logo} class="logo-area color-logo" alt=""/>
                                <div class='icon-area'>
                                <a target="_blank" class='icon-style' href="https://www.behance.net/arafat_hosen"><ImBehance2 /></a>
                                <a target="_blank" class='icon-style ' href="https://www.facebook.com/arafathosen2"><FaFacebookSquare/></a>
                                <a target="_blank" class='icon-style' href="https://www.artstation.com/artistarafat"><FaArtstation/></a>
                                        
                                    </div>
                            </div>
                            <div className="col-md-4 footer-margin">
                                    <h4>LINK</h4>
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
                    </div>


                </div>
            </div>
            
        </div>
    );
};

export default Home;