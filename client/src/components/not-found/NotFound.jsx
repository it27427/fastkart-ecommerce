import { Link } from 'react-router-dom';

import NotFoundThumbnail from '@/assets/images/notfound/not-found.svg';

const NotFoundEl = () => {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-red-100">
      <div className="p-4 md:p-8">
        <div className="max-w-96">
          <div className="flex flex-col gap-4">
            <img src={NotFoundThumbnail} alt="notfound-error-thumbnail" className='w-full' />

            <Link to='/' className='bg-neutral-600 text-white px-5 py-3 text-center font-bold'>
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NotFoundEl;