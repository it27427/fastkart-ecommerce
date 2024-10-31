import BrandHeader from './BrandHeader';
import MenuItems from './MenuItems';
import MobileSidebar from './MobileSidebar';

const AdminSidebar = ({ open, setOpen }) => {
  return (
    <>
      {/* MOBILE-&-TABLET-VIEW */}
      <MobileSidebar open={open} setOpen={setOpen} />

      {/* DESKTOP-VIEW */}
      <aside className='lg:fixed top-0 left-0 min-h-screen w-64 hidden flex-col gap-8 border-r bg-background p-6 pt-0 lg:flex'>
        <BrandHeader />

        <nav>
          <MenuItems />
        </nav>
      </aside>
    </>
  );
};

export default AdminSidebar;
