import React, { useState } from 'react';
import outData from  './outdoordata';

const Outdoor = () => {

    const [urls, setUrl] = useState(outData)

    
    
    return (
        <section>
            <div className='outdoor-bg h-[240px] md:h-[400px] lg:h-[809px]'>
                <h1></h1>
            </div>
            <div className='container'>
                <div className='mt-28 mb-20'>
                    <p className='text-justify text-lg'>I love to do the outdoor painting for many reasons. One of the most common reasons is doing outdoor activities and being connected with nature, along with the fact that when painting outdoors. It helps me
                    to take fast decisions about using color &amp; composition. As well as working quickly allows me to keeps at
                    the moment and let me get the essence of the sensor onto the canvas before the light and other factors
                    change. Sometimes I also do a final brush-up on my work after I back to my studio from the reference
                    picture- as we know there is no wrong way to create artwork!
                    <br />
                    <br />
                    Bangladesh is a very diverse country in its magnificent natural beauty and celebration of the vibrant festivals around the year, it is also known as the land of rivers and six seasons that bring fast changes in nature especially crops fields and river scenarios. I have always been fascinated to express those subjects through my paintings.
                    <br />
                    <br />
                    My recent intuition on doing Plein air paintings from different locations of Bangladesh has been explored through my painting process for my YouTube channel “journey with art”, where my fan/followers, students, and common viewers can see and enjoy the outdoor painting process and an artist’s view.
                    </p>
                </div>

                <div className='grid justify-center'>
                    <img  src="https://res.cloudinary.com/ddtyi1hm8/image/upload/v1661710755/outdoor/Rectangle_32_yibokt.png" alt="" />
                    <p className='text-2xl font-semibold mt-4 mb-4' >watercolor at nursery, Diabari, Uttara</p>
                </div>
                <div className='grid grid-cols-2 gap-x-20 gap-y-16 mt-20' >
                    {outData.map((value,index) => {
                        return (
                            <div key={index} className='grid justify-center'>
                                <img src={value.url} alt="" />
                                <p className='text-2xl font-semibold mt-4 mb-4'>{value.info}</p>
                            </div>
                        )
                    })}
                </div>
                <p className='text-2xl font-normal mt-8 mb-24'>Few beautiful locations in Bangladesh from where I did some best outdoor paintings.</p>

                <div>
                    <h2 className='text-7xl'>Rangamati</h2>
                    <p className='text-justify text-2xl font-normal mt-8 mb-20'>Rangamati is a Beautiful location in Bangladesh, where mountains and the lack of water have touched the blue horizon! As one of my native students invite me to visit there for painting, I couldn’t refuse his
                    proposal and I still have remembered that I was able to paint on some magnificent subjects, Specially the tribal village, tribal Bazar and painting from the top of the boat, from were the most memorable and beautiful landscape I captured through my brush.</p>

                    <div className=' grid justify-center'>
                    <img src="https://res.cloudinary.com/ddtyi1hm8/image/upload/v1661710804/outdoor/Rectangle_1_um7eei.png" alt="" />
                    </div>

                    <div className=' grid grid-cols-2 gap-x-16 mt-16 mb-16'>
                        <div className=' grid justify-center'>
                            <img src="https://res.cloudinary.com/ddtyi1hm8/image/upload/v1661710754/outdoor/Rectangle_2_xp6nya.png" alt="" />
                        </div>
                        <div className=' grid justify-center'>
                            <img src="https://res.cloudinary.com/ddtyi1hm8/image/upload/v1661710770/outdoor/Rectangle_3_ycwd7y.png" alt="" />
                        </div>
                        
                    </div>
                </div>

                

                <div> </div>


            </div>

            <div className='bg-gray-200 pt-1 pb-2 mb-16'>
                    <div className="mt-40  container">
                        <h2 className='text-7xl'>Old Dhaka</h2>
                        <p className='text-justify text-2xl font-normal mt-8 mb-20'>Few beautiful locations in Bangladesh from where I did some best outdoor paintings.</p>
                        <div className='grid grid-cols-2 gap-x-16 mt-16 mb-16'>
                            <img src="https://res.cloudinary.com/ddtyi1hm8/image/upload/v1661710753/outdoor/Rectangle_27_hbgdzz.png" alt="" />
                            <img src="https://res.cloudinary.com/ddtyi1hm8/image/upload/v1661710772/outdoor/Rectangle_28_tn1lvq.png" alt="" />
                        </div>
                    </div>
            </div>

            <div className='container mt-32'>
                <h2 className='text-7xl'>Birulia</h2>
                <p className='text-justify text-2xl font-normal mt-8 mb-20'>Birulia has located a very close distance from my living space, which is glorious for old forbidden buildings, trees, and simple village people and often I visit that place during my leisure time especially when I feel tired to travel a long distance that moment I visit that place for painting and the native people never forgot to wish me with welcoming mood.</p>

                <img src="https://res.cloudinary.com/ddtyi1hm8/image/upload/v1661710757/outdoor/Rectangle_31_eie9px.png" alt="" />
                <div className='grid grid-cols-2 gap-x-16 mt-16 mb-16'>
                    <img src="https://res.cloudinary.com/ddtyi1hm8/image/upload/v1661710754/outdoor/Rectangle_29_vtfmgc.png" alt="" />
                    <img src="https://res.cloudinary.com/ddtyi1hm8/image/upload/v1661710754/outdoor/Rectangle_30_vlecpb.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Outdoor;