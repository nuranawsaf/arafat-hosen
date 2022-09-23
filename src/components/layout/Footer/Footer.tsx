import Link from 'next/link'
import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
        <div  className='footer-bg'>
            <div className="px-[2rem] md:container text-white grid md:grid-cols-3 lg:grid-cols-3  gap-x-12 ">
                <div className='foot1    '>
                    <div className='  flex md:justify-start'>
                        <img className='h-[10%] md:h-[80%] ' src="/assests/images/white-logo.png" alt="" />
                    </div>
                    <div className='grid grid-cols-4 mt-40 gf'>
                        <Link href="https://www.linkedin.com/in/arafat-hosen-32851b1b9/">
                            <a className='text-[37px] ' href="https://www.linkedin.com/in/arafat-hosen-32851b1b9/"><FaLinkedinIn className='bg-white rounded-xl p-3 text-black'/></a>
                        </Link>
                        <Link href="https://www.facebook.com/arafathosen2">
                            <img  src="/assests/icons/fb.png" alt="" />
                        </Link>
                        <Link href="https://www.artstation.com/artistarafat">
                            <img   src="/assests/icons/art.png" alt="" />
                        </Link>
                        
                    </div>
                </div>

                <div className='foot2 grid grid-cols-1   lg:ml-36  md:text-center '>
                    <h5 className='text-[18px]'>Link</h5>
                    <a className='mt-8 lg:mt-0 mb-8 lg:mb-0'  href="/"><span className='text-[13px]'>Home</span></a>
                    <a className='mt-8 lg:mt-0 mb-8 lg:mb-0' href="/about"><span className='text-[13px]'>About</span></a>
                    <a className='mt-8 lg:mt-0 mb-8 lg:mb-0' href="gallery"><span className='text-[13px]'>Gallery</span></a>
                    <a className='mt-8 lg:mt-0 ' href="shop"><span className='text-[13px]'>Shop</span></a>
                </div>

                <div className=' lg:foot3 grid grid-cols-1  gap-y-20 md:gap-y-1  lg:gap-y-0  md:mt-12 lg:mt-1 lg:ml-60'>
                    <h5 className='text-[18px] md:text-[16px]   md:text-center  lg:text-left'>Get in Touch With Us</h5>
                    <div className='grid grid-cols-2  mb-8'>
                        <img className='w-8 ' src="/assests/icons/location-pin.png" alt="" />
                        <p className='text-white text-[13px]  absolute ml-16 mt-[-14px]'>Sector no 18, Uttara, Dhaka,<br /> Bangladesh</p>
                    </div>
                    <div className='grid grid-cols-2'>
                        <img className='w-8 mb-8' src="/assests/icons/phone.png" alt="01918750031" />
                        <p className='text-white text-[13px]  absolute ml-16 mt-[-10px]'>+8801712739209</p>
                    </div>
                    
                    <div className='grid grid-cols-2 mt-[-25px] '>
                        <img className='w-8' src="/assests/icons/mail.png" alt="01918750031" />
                        <p className='text-white text-[13px]   absolute ml-16 mt-[-8px]'>arafatgdm@gmail.com</p>
                    </div>
                </div>
                
            </div>
        </div>

        <div className='footer-bg2  pt-8 pb-8 text-center'>
            <p className=' text-xl text-gray-500'>Arafat Hosen© 2020 All Rights Reserved</p>
        </div>
    </>
  )
}

export default Footer
