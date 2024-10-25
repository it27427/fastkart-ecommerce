import BrandHeader from './BrandHeader';
import MenuItems from './MenuItems';
import MobileSidebar from './MobileSidebar';

const AdminSidebar = ({ open, setOpen }) => {
  return (
    <>
      {/* MOBILE-&-TABLET-VIEW */}
      <MobileSidebar open={open} setOpen={setOpen} />

      {/* DESKTOP-VIEW */}
      <aside className='hidden w-64 flex-col gap-8 border-r bg-background p-6 pt-0 lg:flex'>
        <BrandHeader />

        <nav>
          <MenuItems />
        </nav>
      </aside>
    </>
  );
};

export default AdminSidebar;
