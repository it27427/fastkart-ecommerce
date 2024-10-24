import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import UnauthorizeThumbnail from '@/assets/images/unauthorize/unauthorize.svg';

const UnAuthPage = () => {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-yellow-50">
      <div className="p-4 md:p-8">
        <div className="max-w-96">
          <div className="flex flex-col gap-4">
            <img src={UnauthorizeThumbnail} alt="unauthorize-error-thumbnail" className='w-full' />

            <Button variant="ghost" asChild>
              <Link to='/' className='btn-ghost flex items-center gap-0'>
                Back To Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default UnAuthPage;