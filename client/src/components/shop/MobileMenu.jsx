import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import MainMenu from './MainMenu';

const MobileMenu = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='lg:hidden'>
            <Menu className='w-6 h-6' />
            <span className='sr-only'>Toggle Header Menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side='left' className='w-full max-w-xs'>
          <SheetHeader className='hidden'>
            <SheetTitle className='hidden'></SheetTitle>
            <SheetDescription className='hidden'></SheetDescription>
          </SheetHeader>

          <MainMenu />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMenu;
