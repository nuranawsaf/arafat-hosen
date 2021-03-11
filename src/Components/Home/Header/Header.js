import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div class='container'>
                <div className="row">
                    <div class='header-area'>
                        <div class='header'>
                            <h6>WELCOME</h6>
                            <h1>Artist Arafat Hosen</h1>
                            <h3>The World Through Eyes</h3>
                            <br/>
                            <a class='about-btn' href="/about">About Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;