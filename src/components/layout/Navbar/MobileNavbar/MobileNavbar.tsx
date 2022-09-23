import Link from 'next/link';
import React from 'react';
import { expandMenuReducer } from '../../../../redux/slices/navbarSlice';
import { useAppDispatch, useAppSelector } from '../../../../redux/store/store';
import MenuDrawer from './MenuDrawer';

const MobileNavbar: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <nav className='block lg:hidden  py-4 relative'>
      <div className='px-[2rem]  flex items-center justify-between'>
        <div>
          <Link href='/'>
            <img className='w-[80%]' src='/assests/images/main-logo.png' alt='Brand Logo' />
          </Link>
        </div>

        <div>
          <button
            onClick={() => dispatch(expandMenuReducer())}
            className='bg-transparent shadow-none p-0'
          >
            <img className='w-[35px]' src='/assests/icons/menu.svg' alt='Menu Icon' />
          </button>
        </div>
      </div>

      <MenuDrawer />
    </nav>
  );
};

export default MobileNavbar;