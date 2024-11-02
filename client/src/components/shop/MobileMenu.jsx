import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
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

        <SheetContent size='left' className='w-full max-w-xs'>
          <MainMenu />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMenu;
