import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import NotFoundThumbnail from '@/assets/images/notfound/not-found.svg';

const NotFoundEl = () => {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-red-100">
      <div className="p-4 md:p-8">
        <div className="max-w-96">
          <div className="flex flex-col gap-4">
            <img src={NotFoundThumbnail} alt="notfound-error-thumbnail" className='w-full' />

            <Button variant="destructive" asChild>
              <Link to='/' className='flex items-center gap-0'>
                <i className="icofont-arrow-left text-lg mt-1"></i>
                <span>Back To Home</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NotFoundEl;