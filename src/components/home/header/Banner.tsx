import React from 'react'
import Link from 'next/link'

const Banner = () => {
  return (
    <header className='banner-bg bg-style h-[298px] md:h-[459px] lg:h-[806px] flex items-center justify-left relative'>
      <div className='text-white mt-[50px] lg:mt-[8rem] mx-[50px] lg:mx-[160px]'>
        <h3 className='text-[07px] md:text-[9px] lg:text-2xl my-4 font-bold capitalize'>
          W E L C O M E
        </h3>
        <h1 className='text-4xl md:text-6xl lg:text-8xl my-5 font-bold capitalize'>
          Artist Arafat Hosen
        </h1>
        <h3 className='text-[10px] md:text-[20px] lg:text-[41px]  font-bold capitalize'>
            The World Through My Eyes
        </h3>
        <Link href="/about">
          <button className='my-6 text-black'>About Me</button>
        </Link>
      </div>
    </header>
  )
}

export default Banner