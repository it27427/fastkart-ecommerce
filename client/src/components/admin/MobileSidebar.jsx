import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import BrandHeader from './BrandHeader';
import MenuItems from './MenuItems';

const MobileSidebar = ({ open, setOpen }) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side='left'
        className='w-64 p-0'
        aria-describedby='admin-sidebar-description'
      >
        <div className='flex flex-col gap-8 h-full'>
          <SheetHeader className='h-16 flex items-center justify-center border-b'>
            <BrandHeader setOpen={setOpen} />

            <SheetTitle className='hidden'></SheetTitle>
            <SheetDescription className='hidden'></SheetDescription>
          </SheetHeader>
          <nav className='px-6'>
            <MenuItems setOpen={setOpen} />
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
