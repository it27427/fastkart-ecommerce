import { useState } from 'react';
import { Link } from 'react-router-dom';
import CommonForm from '@/components/common/Form';
import { RegisterFormControls } from '@/config/index';

const title = 'Create New Account';

const initialState = {
  userName: '',
  email: '',
  phone: '',
  password: ''
};

const Register = () => {
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
        formControls={RegisterFormControls}
        buttonText='Sign Up'
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />

      <div className="mt-2 text-center">
        <p className='font-oxanium'>
          Already have an account?
          
          <Link to='/login' className='font-bold hover:underline hover:text-primarybg font-playwriteGBS ml-2'>
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register;