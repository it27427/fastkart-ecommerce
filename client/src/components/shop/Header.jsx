import React from 'react';
import HeaderNav from './HeaderNav';

const ShopHeader = () => {
  return (
    <header className='sticky top-0 flex items-center w-full border-b bg-background'>
      <HeaderNav />
    </header>
  );
};

export default ShopHeader;
