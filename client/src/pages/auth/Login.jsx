import { useState } from 'react';
import { Link } from 'react-router-dom';
import CommonForm from '@/components/common/Form';
import { LoginFormControls } from '@/config/index';

const title = 'Login To Your Account';

const initialState = {
  email: '',
  password: ''
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);

  const onSubmit = () => {

  };

  return (
    <div className='mx-auto w-full space-y-6'>
      <div className="text-center">
        <h2 className='text-4xl font-oxanium font-bold tracking-tight text-foreground'>
          {title}
        </h2>
      </div>

      <CommonForm
        formControls={LoginFormControls}
        buttonText='Sign In'
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />

      <div className="text-center mt-2">
        <p className='font-oxanium'>
            Don't have any account?
            
            <Link to='/register' className='font-bold hover:underline hover:text-primarybg font-playwriteGBS ml-2'>
              Register
            </Link>
          </p>
      </div>
    </div>
  )
}

export default Login;