import React from 'react';
import './Blog.css';
import id from '../../images/id.PNG';
import logo from '../../images/logo.png';
import Logo from '../../images/Logo-Footer.png';
import art2 from '../../images/art2.jpg';
import {  FaFacebookSquare, FaArtstation } from 'react-icons/fa';
import {  ImBehance2 } from 'react-icons/im';
const Blog = () => {
    return (
        <div class="container">
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
                <img src={id} alt=""/>
            </div>
            <div className="row">
                <div className=" blog-area">
                    <img src={art2} alt=""/>
                </div>
                {/* <div class="comments-area row col-md-12">
                    
                    <h3 ><BiMessageRounded/> <span class="font-size"> 0  Comments</span></h3>
                    <h3 class="cmnt"> <BsPersonFill/> <span class="font-size">Arafat Hosen</span></h3>
                </div> */}
                <div class="p-arena ">
                    <p>একটি কাঁচের গ্লাস বা জগ একই উপাদানে তৈরি হলেও প্রতিটির ব্যবহার আলাদা, যেমন, জগে পানি মজুদ করা হয়, অন্যদিকে গ্লাস দিয়ে পানি সরাসরি পান করা হয়, তেমনি ভাবে দুটো বস্তুই অভিন্ন উপাদানে তৈরি হলেও শুধুমাত্র ব্যবহারিক ভিন্নতার কারণেই ভিন্ন পরিচয় তৈরি হয়, যেমন জগ, গ্লাস, গাছপালা ইত্যাদি । প্রকৃতিতে প্রত্যেকটি মানুষও একই উপাদানে তৈরি এবং মানুষের নতুন পরিচয় তৈরি হয় তার বুদ্ধিবৃত্তিক গুণাবলী (intellectual ability) ও তার প্রয়োগের উপর ভিত্তি করে। যদিও এটি তার মূল পরিচয় (actual identity) নয়, বরং নকল পরিচয় (fake identity)। বিশ্লেষণ করলে দেখা যায় যে , মানুষ তার পরিচয় বিনির্মাণে বড্ড অসহায়। কারণ , মানুষের বুদ্ধিবৃত্তিক ক্রমবিকাশ এবং ধারাবাহিকতার একটি সুনির্দিষ্ট পরিকাঠামো ( framework) রয়েছে , সেখানে জৈবিক (biological) এবং সংস্কৃতিক বিষয়গুলো (cultural factors) প্রচন্ডভাবে প্রভাব বিস্তার করে। যেমন, কারো পূর্বপুরুষ হয়তোবা একজন সুদক্ষ কর্মকার ছিলেন, তো দেখা গেল যে একজনের মধ্যে তার পূর্বপুরুষের সেই শৈল্পিক গুণাবলী বিদ্যমান রয়েছে, সে নিজের অজান্তেই হয়তোবা ছবি আঁকতে বা ডিজাইন করতে পছন্দ করেন এবং তার সেই নান্দনিক গুণাবলিকে আমরা জেনেটিক প্রভাব ( genetic influence) বলতে পারি। এ প্রক্রিয়াটি মানব বিবর্তনের অভ্যন্তরীণ কাঠামোগত রূপরেখার (structural framework) বিন্যাস ঘটিয়ে আসছে এবং একে অবজ্ঞা করার অবকাশ আমাদের কারো নেই।</p>
                </div>
                <div class="p-arena">
                    <p class="p-arena1">আমাদের নাম-ধাম, ধন-সম্পদ এবং পৈতৃক পরিচয় এমনকি সামাজিক যোগাযোগ মাধ্যমও (facebook Id)<br/>  আমাদের প্রকৃত পরিচয় বহন করেনা বরং আমাদের প্রকৃত পরিচয় জানতে হলে আত্মোপলব্ধির জায়গাটিকে 
                    <br/> 
                    প্রতিনিয়ত শাণিত করতে হবে। </p>
                </div>
                <div className="p-arena ">
                    <p>এ তো গেল বায়োলজিক্যাল প্রভাব ( biological influence) এর বর্ণনা। এবার আসা যাক সাংস্কৃতিক বিকাশ (cultural influences) এর বিষয়টি নিয়ে। সাংস্কৃতিক বিষয়টি অনেকটা সামগ্রিক (communal)। যেহেতু মানুষ সামাজিক জীব তাই তার খাদ্যভ্যাস আচার আচরণ, চিন্তা বা আদর্শের একটি সামগ্রিক বাস্তবতা আছে। এটিকে আমরা কালচারাল ফ্যাক্টর ( cultural factor) বলি, যা আমাদের আচার-আচরণ ও রুচিবোধ গঠনে অন্যতম সহায়ক ভূমিকা পালন করে। যেমন বর্তমানকালে ইন্টারনেট মধ্যমে বৈশ্বিক সংস্কৃতির প্রভাব প্রচন্ডভাবে আমাদের প্রভাবিত করছে তা অস্বীকার করার যেমন উপায় নেই, ঠিক তেমনি ভাবে এ বাস্তবতা থেকে উত্তরণেরও আপাতত কোন পথও খোলা নেই । যাই হোক পূর্বের আলোচনা সাপেক্ষ বলা যায় যে আমরা আমাদের জৈবিক (biological) এবং সংস্কৃতিক ( cultural influence) প্রভাবের মধ্যে থেকে আমাদের প্রকৃত সত্তাকে ( real identity) কতটুকু বিনির্মাণ করতে পারছি তার উপলব্ধি বা বিশ্লেষণের প্রয়োজন রয়েছে। যেমন, ইন্টারনেট ক্রমশই পৃথিবী থেকে বৈচিত্র্যপূর্ণ সাংস্কৃতিক কর্মকাণ্ডের বিলুপ্তি ঘটাচ্ছে। নতুন দুনিয়ায় নতুন সাংস্কৃতিক চর্চার ( global connectivity) ভালো মন্দ দুটি দিকই আছে। একদিকে আমরা তথ্য আহরণ এবং বিতরণের সহজপথ পেয়ে গেছি, অন্যদিকে অতিরিক্ত ইন্টারনেট ব্যবহারের মাত্রা সমষ্টিগত পাগলামো তে ( communal insanity) রূপ নিয়েছে। এবং যেহেতু আমাদের শারীরিক এবং মনস্তাত্ত্বিক বিষয়গুলো একই সূত্রে গাঁথা তাই এই দুটি দিকেরই সযত্নে পরিচর্যার প্রয়োজন রয়েছে। পরিশেষে বলা যায়। আমাদের নাম-ধাম, ধন-সম্পদ এবং পৈতৃক পরিচয় এমনকি সামাজিক যোগাযোগ মাধ্যমও (facebook Id) আমাদের প্রকৃত পরিচয় বহন করেনা বরং আমাদের প্রকৃত পরিচয় জানতে হলে আত্মোপলব্ধির জায়গাটিকে প্রতিনিয়ত শাণিত করতে হবে। </p>
                </div>

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


            </div>
        </div>
    );
};

export default Blog;