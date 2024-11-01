import { AlignJustify } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AdminLogout from './AdminLogout';

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

      {/* LOG-OUT */}
      <div className='flex flex-1 justify-end'>
        <AdminLogout />
      </div>
    </header>
  );
};

export default AdminHeader;
