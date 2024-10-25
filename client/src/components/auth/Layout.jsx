import { Link, Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <main className='flex h-screen w-full overflow-hidden'>
      <div className='hidden lg:flex items-center justify-center bg-black w-1/2 px-12'>
        <div className='max-w-md space-y-6 text-center text-primary-foreground'>
          <h1 className='text-4xl font-playwriteGBS font-semibold tracking-tight'>
            <span className='font-raleway'>W</span>elcome to{' '}
            <span className='text-primarybg'>Fast</span>Kart
          </h1>
        </div>
      </div>

      <div className='flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8 lg:min-h-screen lg:overflow-y-scroll'>
        <Outlet />
      </div>
    </main>
  );
};

export default AuthLayout;
