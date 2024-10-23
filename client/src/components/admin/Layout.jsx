import { Outlet } from 'react-router-dom';
import AdminSidebar from './Sidebar';
import AdminHeader from './Header';

const AdminLayout = () => {
  return (
    <div className='flex flex-1 min-h-screen w-full'>
      {/* ADMIN-SIDEBAR */}
      <AdminSidebar />

      <div className="flex flex-col flex-1">
        {/* ADMIN-HEADER */}
        <AdminHeader />

        <main className='flex flex-1 bg-muted/40 p-4 md:p-6'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout;