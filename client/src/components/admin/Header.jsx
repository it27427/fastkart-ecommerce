import React from 'react';
import { AlignJustify, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AdminHeader = ({ setOpen }) => {
  return (
    <header className='fixed top-0 w-full h-16 lg:w-[calc(100%-16rem)] lg:right-0 flex items-center justify-between px-4 py-3 bg-background border-b'>
      <Button
        onClick={() => setOpen(true)}
        className='bg-primarybg hover:bg-green-500 flex lg:hidden'
      >
        <AlignJustify />
        <span className='sr-only'>Toggle Menu</span>
      </Button>

      <div className='flex flex-1 justify-end'>
        <Button className='inline-flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium font-oxanium shadow'>
          <LogOut /> LogOut
        </Button>
      </div>
    </header>
  );
};

export default AdminHeader;
