import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, ShoppingCart, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { logOutUser } from '@/store/auth';

const AuthMenu = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  return (
    <div className='flex flex-col gap-4 lg:flex-row items-center'>
      <Button variant='outline' size='icon'>
        <ShoppingCart className='w-6 h-6' />
        <span className='sr-only'>Shopping Cart</span>
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className='bg-black cursor-pointer'>
            <AvatarFallback className='bg-black text-white font-extrabold text-sm uppercase'>
              {user.userName[0]}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent side='right' className='w-56'>
          <DropdownMenuLabel>Logged In as {user?.userName}</DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            onClick={() => navigate('/account')}
            className='cursor-pointer'
          >
            <User className='mr-1 w-4 h-4' />
            <span>Profile</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={handleLogOut} className='cursor-pointer'>
            <LogOut className='mr-1 w-4 h-4' />
            <span>LogOut</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AuthMenu;
