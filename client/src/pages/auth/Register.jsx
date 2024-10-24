import { Link } from 'react-router-dom';
import CommonForm from '@/components/common/Form';
import { RegisterFormControls } from '@/config/index';

const title = 'Create New Account';

const Register = () => {

  return (
    <div className='mx-auto w-full space-y-6'>
      <div className="text-center">
        <h2 className='text-4xl font-oxanium font-bold tracking-tight text-foreground'>
          {title}
        </h2>

          <p className='mt-2 font-oxanium'>
            Already have an account?
            <Link className='font-bold hover:underline hover:text-primarybg font-playwriteGBS ml-2' to={'/login'}>
              Login
            </Link>
          </p>
      </div>
      {/* <CommonForm formControls={RegisterFormControls} /> */}
    </div>
  )
}

export default Register;