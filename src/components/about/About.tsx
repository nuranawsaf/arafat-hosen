import React from 'react'


const About = () => {
  return (
    <section>
        <div  className='about-bg h-[188px] md:h-[449px] lg:h-[826px]'>
            <h1></h1>
        </div>

        <div className='mx-[2rem] md:container mt-14 md:mt-28 '>

            <div >
                <img className='w-[68%] md:w-[38%]' src="/assests/images/Group60-min.png" alt="" />
            </div>
        </div>

        <div className='mx-[2rem] md:container mt-32 grid lg:grid-cols-2 gap-x-20'>
            <div>
                <img src="/assests/images/profile-min.jpg" alt="" />
            </div>
            <div>
                <p className='text-justify mt-16 lg:mt-0 text-[14px] leading-loose'>Growing up in Kishoreganj, North of Dhaka, Bangladesh, within a simple lifestyle among honest village folk; blessed by the abundant gifts of Mother Nature; with the green and golden rice and the vibrant yellow of the mustard; and surrounded by tributaries of the mighty Brahmaputra and Meghna rivers crisscrossing the land; looking back, it is not surprising that, from an early age, I was drawn to the pencils and brushes of an artist. Painting and drawing became my passion.<br/>

                <br/>After completing my matriculation, in 2003 I joined Shanto Mariam University of Creative Technology, where I studied and absorbed wonderful creativity which year by year translated into, firstly portraits, then street scenes, still life; rural life on river and water; and, more recently, graphic and modular design. My media has been varied using water colour, acrylic, oils, pastels, graphite pencils, charcoal and digital art on the computer.<br/>

                <br/>Having completed my four years Bachelor’s degree, I rejoined the University as a lecturer and have been teaching and mentoring students since 2009. I love being in the classroom and working with younger minds, helping to mold their creative abilities to enhance natural talent combined with an inner discipline and curiosity and finally to see the results of all that hard work and the joy in their faces. Teaching is an amazing privilege; it is another one of my passions.
                </p>
            </div>
        </div>

        <div className='mt-16 bg-about pt-24 pb-24 mb-16'>
            <div className='container mt-32 grid lg:grid-cols-2 mb-20 gap-x-20'>
                <div>
                    <p className='text-justify  mt-16 lg:mt-0 text-[14px] leading-loose'>I have traveled around Asia, looking, learning and creating. I have held many exhibitions both in Bangladesh as well as in Bhutan. I have my work hanging in several galleries.<br/>

                    <br/>My subjects frequently reflect the unique beauty and composition of rural and urban Bangladesh and its people. My current focus has been using watercolors. For me it has proven to be a liberating, while at the same time, a demanding media. The disciplines of water colours seem to better reflect my style as an artist. I understand that, one of the amazing characteristics of being an artist, is the growth, adaptation, transformation and adventure that this profession and gift offers. I can look back and wonder at the many different experiences that have moulded me into the person I am today.<br/>

                    <br/>I believe art is more than just paint on canvas or simply a visual communication. I see art as a universal language; interpreted and felt by all. The emotions and stories that are expressed on canvas can be experienced and understood by people of all cultures and races. Art is a language; not of words and grammar, but of common themes, colours, textures and love. Art
                    speaks to the minds and hearts of people, perhaps, even more so than the written word.

                    </p>
                </div>
                <div>
                    <img src="/assests/images/Group-min.png" alt="" />
                </div>
            </div>
        </div>

        <div className='container mb-24 mt-20'>
            <p className='text-justify  text-[14px] leading-loose '>
                For me, art has been a vehicle for a wonderful journey. A journey that has included an attempt to master a wide range of media; a journey that has challenged me to absorb and express life around me; a journey that has required both patience and curiosity above and beyond anything I have ever experienced. My art has brought me much closer to my inner self. It has helped me to explore my mind and feelings. It has taught me a deep appreciation of my environment both physical and human. It has taught me tolerance and a love for people; their abilities, their feelings and their hopes and dreams. 

                In one sense, my journey has only just begun. Where it leads, I do not know and, in fact, it is probably best that I allow it to lead me day by day; living life at its fullest and within my own boundaries and capacities. Perhaps the richest blessing that art has given me are the people whom I have met and interacted with along its journey and that is something that continues to motivate and drive me to ever expanding new horizons.
            </p>
        </div>

        <div className='container flex justify-center '>
            <iframe className=' w-[900px] h-[500px] mb-32' src="https://www.youtube.com/embed/B_GYEk6rwOo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

    </section>
  )
}

export default About
