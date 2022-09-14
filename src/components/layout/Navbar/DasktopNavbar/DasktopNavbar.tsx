import Link from 'next/link';
import React from 'react';
import { navdata as data, navdata } from '../navdata';

const DasktopNavbar = () => {
  return (
    <div>
        <nav className='bg-white py-4 hidden lg:block'>
      <div className='container  flex items-center justify-between'>
        <div>
          <Link href='/'>
            <img src='/assests/images/main-logo.png' alt='Brand Logo' />
          </Link>
        </div>

        <div className='flex items-center gap-28  '>
          {data.map((item, index) => {
            return item.type === 'link' ? (
              <Link  key={index} href={item.href}>
                {item.title}
              </Link>
            ) : (
              <button> {item.title}</button>
            );
          })}
        </div>
      </div>
    </nav>
    </div>
  )
}

export default DasktopNavbar