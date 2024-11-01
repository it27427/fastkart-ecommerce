import React from 'react';
import { Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Sheet } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const ShopHeader = () => {
  return (
    <header className='sticky top-0 flex items-center w-full border-b bg-background'>
      <div className='flex h-16 items-center justify-between px-6'>
        <Link to='/shop' className='flex items-center gap-1'>
          <Store className='w-5 h-5' />
          <span className='font-bold mt-1 uppercase'>Shop</span>
        </Link>

        <Sheet asChild>
          <Button variant='outline' size='icon' className='lg:hidden'>
            <span className='sr-only'>Toggle Header Menu</span>
          </Button>
        </Sheet>
      </div>
    </header>
  );
};

export default ShopHeader;
