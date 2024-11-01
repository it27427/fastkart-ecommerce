import React from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const MobileMenu = () => {
  return (
    <>
      <Sheet asChild>
        <Button variant='outline' size='icon' className='lg:hidden'>
          <Menu className='w-6 h-6' />
          <span className='sr-only'>Toggle Header Menu</span>
        </Button>

        <SheetContent size='left' className='w-full max-w-xs'></SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMenu;
