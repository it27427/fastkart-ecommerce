import React from 'react';
import { ShoppingCart } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const AuthMenu = () => {
  return (
    <div className='flex flex-col gap-4 lg:flex-row items-center'>
      <Button variant='outline' size='icon'>
        <ShoppingCart className='w-6 h-6' />
        <span className='sr-only'>Shopping Cart</span>
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className='bg-black'>
            <AvatarFallback className='bg-black text-white font-extrabold text-sm uppercase'>
              IT
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent side='right' className='w-56'>
          <DropdownMenuLabel></DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AuthMenu;
