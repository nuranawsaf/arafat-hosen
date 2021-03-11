import React from 'react';
import './Acrylic.css';
import acrylic1 from "../../../images/acrylic1.jpg";
import acrylic2 from "../../../images/acrylic2.jpg";
import acrylic3 from "../../../images/acrylic3.JPG";
import acrylic4 from "../../../images/acrylic4.JPG";
import acrylic5 from "../../../images/acrylic5.JPG";
import acrylic6 from "../../../images/acrylic6.JPG";
import sketches1 from "../../../images/sketches1.jpg";
import sketches2 from "../../../images/sketches2.jpg";
import sketches3 from "../../../images/sketches3.JPG";
import sketches4 from "../../../images/sketches4.jpg";
import sketches5 from "../../../images/sketches5.jpg";
import sketches6 from "../../../images/sketches6.jpg";
import portraits1 from "../../../images/portraits1.jpg";
import portraits2 from "../../../images/portraits2.jpg";
import portraits3 from "../../../images/portraits3.jpg";
import portraits4 from "../../../images/portraits4.jpg";
import portraits5 from "../../../images/portraits5.JPG";
import portraits6 from "../../../images/portraits6.jpg";
import digital1 from "../../../images/digital1.JPG";
import digital2 from "../../../images/digital2.JPG";
import digital3 from "../../../images/digital3.JPG";
import digital4 from "../../../images/digital4.jpg";
import digital5 from "../../../images/digital5.jpg";
import digital6 from "../../../images/digital6.jpg";
import other1 from "../../../images/other1.jpg";
import other2 from "../../../images/other2.jpg";
import other3 from "../../../images/other3.jpg";
import other4 from "../../../images/other4.jpg";
import other5 from "../../../images/other5.jpg";
import other6 from "../../../images/other6.jpg";

const Acrylic = () => {
    return (
        <div>
            <section>
                <input type="radio" name="photos" id="check1" checked/>
                <input type="radio" name="photos" id="check2"/>
                <input type="radio" name="photos" id="check3"/>
                <input type="radio" name="photos" id="check4"/>
                <input type="radio" name="photos" id="check5"/>
                <input type="radio" name="photos" id="check6"/>
            </section>
            <section>
                <div className="container input-area">
                    <div className="top-content">
                        <h3>Photo Gallery</h3>
                        <label htmlFor="check1">All Paints</label>
                        <label htmlFor="check2">Acrylic Paintings</label>
                        <label htmlFor="check3">Sketches</label>
                        <label htmlFor="check4">Portraits</label>
                        <label htmlFor="check5">Digital Works</label>
                        <label htmlFor="check6">Others</label>
                    </div>

                    <div className="photo-gallery">
                        <div className="pic acrylic">
                            <img src={acrylic1} alt=""/>
                        </div>
                        <div className="pic sketches">
                            <img src={sketches1} alt=""/>
                        </div>
                        <div className="pic portraits">
                            <img src={portraits1} alt=""/>
                        </div>
                        <div className="pic digital">
                            <img src={digital1} alt=""/>
                        </div>
                        <div className="pic others">
                            <img src={other1} alt=""/>
                        </div>
                        <div className="pic acrylic">
                            <img src={acrylic2} alt=""/>
                        </div>
                        <div className="pic sketches">
                            <img src={sketches2} alt=""/>
                        </div>
                        <div className="pic portraits">
                            <img src={portraits2} alt=""/>
                        </div>
                        <div className="pic digital">
                            <img src={digital2} alt=""/>
                        </div>
                        <div className="pic others">
                            <img src={other2} alt=""/>
                        </div>
                        <div className="pic acrylic">
                            <img src={acrylic3} alt=""/>
                        </div>
                        <div className="pic sketches">
                            <img src={sketches3} alt=""/>
                        </div>
                        <div className="pic portraits">
                            <img src={portraits3} alt=""/>
                        </div>
                        <div className="pic digital">
                            <img src={digital3} alt=""/>
                        </div>
                        <div className="pic others">
                            <img src={other3} alt=""/>
                        </div>
                        <div className="pic acrylic">
                            <img src={acrylic4} alt=""/>
                        </div>
                        <div className="pic sketches">
                            <img src={sketches4} alt=""/>
                        </div>
                        <div className="pic portraits">
                            <img src={portraits4} alt=""/>
                        </div>
                        <div className="pic digital">
                            <img src={digital4} alt=""/>
                        </div>
                        <div className="pic others">
                            <img src={other4} alt=""/>
                        </div>
                        <div className="pic acrylic">
                            <img src={acrylic5} alt=""/>
                        </div>
                        <div className="pic sketches">
                            <img src={sketches5} alt=""/>
                        </div>
                        <div className="pic portraits">
                            <img src={portraits5} alt=""/>
                        </div>
                        <div className="pic digital">
                            <img src={digital5} alt=""/>
                        </div>
                        <div className="pic others">
                            <img src={other5} alt=""/>
                        </div>
                        <div className="pic acrylic">
                            <img src={acrylic6} alt=""/>
                        </div>
                        <div className="pic sketches">
                            <img src={sketches6} alt=""/>
                        </div>
                        <div className="pic portraits">
                            <img src={portraits6} alt=""/>
                        </div>
                        <div className="pic digital">
                            <img src={digital6} alt=""/>
                        </div>
                        <div className="pic others">
                            <img src={other6} alt=""/>
                        </div>
                    </div>    

                </div>
            </section>
        </div>
    );
};

export default Acrylic;
