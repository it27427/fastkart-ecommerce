import React from 'react';
import { Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Sheet } from '@/components/ui/sheet';

const ShopHeader = () => {
  return (
    <header className='sticky top-0 flex items-center w-full border-b bg-background'>
      <div className='flex h-16 items-center justify-between px-6'>
        <Link to='/shop' className='flex items-center gap-1'>
          <Store className='w-6 h-6' />
          <span className='font-bold text-xl'>Shop</span>
        </Link>

        <Sheet></Sheet>
      </div>
    </header>
  );
};

export default ShopHeader;
