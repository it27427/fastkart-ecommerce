import React from 'react'
import CommonForm from '@/components/common/Form';
import { RegisterFormControls } from '@/config/index';

const Register = () => {
  return (
    <div>
      <h2>Register</h2>

      <CommonForm formControls={RegisterFormControls} />
    </div>
  )
}

export default Register;