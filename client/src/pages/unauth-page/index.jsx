import { Link } from 'react-router-dom';

import Thumbnail from '@/assets/images/unauthorize/unauthorize.svg';

const UnAuthPage = () => {
  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      <div className="p-4 md:p-8">
        <div className="max-w-96">
          <div className="flex flex-col gap-4">
            <img src={Thumbnail} alt="error-unauthorize-thumbnail" className='w-full' />

            <Link to='/' className='bg-yellow-600 text-white px-5 py-3 text-center font-bold'>
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default UnAuthPage;