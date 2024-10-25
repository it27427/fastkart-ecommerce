import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import UnauthorizeThumbnail from '@/assets/images/unauthorize/unauthorize.svg';

const UnAuthPage = () => {
  return (
    <main className='min-h-screen w-full flex items-center justify-center bg-slate-50'>
      <div className='p-4 md:p-8'>
        <div className='max-w-96'>
          <div className='flex flex-col gap-4'>
            <img
              src={UnauthorizeThumbnail}
              alt='unauthorize-error-thumbnail'
              className='w-full'
            />

            <Link
              to='/'
              className='bg-primarybg hover:bg-green-600 font-medium transition-all text-white rounded py-2 px-6 flex items-center justify-center gap-0'
            >
              <i className='icofont-arrow-left text-lg mt-1'></i>
              <span>Back To Home</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UnAuthPage;
