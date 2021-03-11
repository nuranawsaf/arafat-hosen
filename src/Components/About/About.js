import React from 'react';
import './About.css';
import logo from '../../images/logo.png';
import banner from '../../images/top-banner.PNG';
import slide from '../../images/slide.PNG';
import profile from '../../images/profile.PNG';
import gallery1 from '../../images/gallery1.jpeg';
import gallery2 from '../../images/gallery2.jpeg';
import gallery3 from '../../images/gallery3.jpeg';
import gallery4 from '../../images/gallery4.jpeg';
import {  FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';


const About = () => {
    return (
        <div className="container">
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

            <div className="row">
                    <img src={banner} alt=""/>
                </div>
                <div className="row">
                    <h1 class='about-area'>  <b>ABOUT ME</b> </h1>


                </div>
                <div className="row blog-area">
                    <div className="col-md-5 pro-pic">
                    <img class="profile" src={profile} alt=""/>
                    </div>

                    <div className="col-md-7 p-area">
                    <p>Growing up in Kishoreganj, North of Dhaka, Bangladesh, within a simple lifestyle among honest village folk; blessed by the abundant gifts of Mother Nature; with the green and golden rice and the vibrant yellow of the mustard; and surrounded by tributaries of the mighty Brahmaputra and Meghna rivers crisscrossing the land; looking back, it is not surprising that, from an early age, I was drawn to the pencils and brushes of an artist. Painting and drawing became my passion. <br/> <br/> After completing my matriculation, in 2003 I joined Shanto Mariam University of Creative Technology, where I studied and absorbed wonderful creativity which year by year translated into, firstly portraits, then street scenes, still life; rural life on river and water; and, more recently, graphic and modular design. My media has been varied using water colour, acrylic, oils, pastels, graphite pencils, charcoal and digital art on the computer. <br/> <br/> Having completed my four years Bachelor’s degree, I rejoined the University as a lecturer and have been teaching and mentoring students since 2009. I love being in the classroom and working with younger minds, helping to mold their creative abilities to enhance natural talent combined with an inner discipline and curiosity and finally to see the results of all that hard work and the joy in their faces. Teaching is an amazing privilege; it is another one of my passions.</p>
                    </div>
                </div>  

                <div className="row  blog-area2">
                   
                    <div className="col-md-6">
                        <p>I have traveled around Asia, looking, learning and creating. I have held many exhibitions both in Bangladesh as well as in Bhutan. I have my work hanging in several galleries. <br/> <br/> My subjects frequently reflect the unique beauty and composition of rural and urban Bangladesh and its people. My current focus has been using watercolors. For me it has proven to be a liberating, while at the same time, a demanding media. The disciplines of water colours seem to better reflect my style as an artist. I understand that, one of the amazing characteristics of being an artist, is the growth, adaptation, transformation and adventure that this profession and gift offers. I can look back and wonder at the many different experiences that have moulded me into the person I am today.</p>
                    </div>
                    <div className="col-md-4">
                        <img class="img-fluid gallery1" src={gallery1} alt=""/>
                    </div>
                    <div className="col-md-2">
                        <img class="img-fluid gallery2" src={gallery2} alt=""/>
                    </div>
                    
                        <div className="col-md-6">
                            <p>I believe art is more than just paint on canvas or simply a visual communication. I see art as a universal language; interpreted and felt by all. The emotions and stories that are expressed on canvas can be experienced and understood by people of all cultures and races. Art is a language; not of words and grammar, but of common themes, colours, textures and love. Art
                            speaks to the minds and hearts of people, perhaps, even more so than the written word.</p>
                        </div>
                        
                        <div className="col-md-2">
                        <img class="img-fluid gallery3" src={gallery3} alt=""/>
                    </div>
                    <div className="col-md-4">
                        <img class="img-fluid gallery4" src={gallery4} alt=""/>
                    </div>
                    
                   
                    
                </div>

                <div className="row p-area">
                    <p>For me, art has been a vehicle for a wonderful journey. A journey that has included an attempt to master a wide range of media; a journey that has challenged me to absorb and express life around me; a journey that has required both patience and curiosity above and beyond anything I have ever experienced. My art has brought me much closer to my inner self. It has helped me to explore my mind and feelings. It has taught me a deep appreciation of my environment both physical and human. It has taught me tolerance and a love for people; their abilities, their feelings and their hopes and dreams. <br/><br/> In one sense, my journey has only just begun. Where it leads, I do not know and, in fact, it is probably best that I allow it to lead me day by day; living life at its fullest and within my own boundaries and capacities. Perhaps the richest blessing that art has given me are the people whom I have met and interacted with along its journey and that is something that continues to motivate and drive me to ever expanding new horizons.</p>
                </div>
                <div className="row">
                    <img class="gallery4" src={gallery4} alt=""/>
                </div>

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
            
  
        </div>
    );
};

export default About;