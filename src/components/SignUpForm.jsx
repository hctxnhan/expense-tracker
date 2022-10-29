import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { signUpUserWithEmailAndPassword } from '../firebase/firebase';
import Button from './Button';
import Input from './Input';

export default function SignUpForm({ handleClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    signUpUserWithEmailAndPassword(email, password);
  };
  return (
    <div className='fixed top-1/2 left-1/2 rounded-md p-10 transform -translate-x-1/2 -translate-y-1/2 shadow-lg bg-white'>
      <button onClick={() => handleClose()} className='absolute right-4 top-4'>
        <GrClose />
      </button>
      <h1 className='text-3xl font-semibold mb-2'>Create your account</h1>
      <p className='text-gray-500 mb-4'>Welcome! Please enter your details.</p>
      <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
        <Input
          label='Email'
          type='text'
          inputId='email'
          value={email}
          setValue={setEmail}
        />
        <Input
          label='Password'
          type='password'
          inputId='password'
          value={password}
          setValue={setPassword}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
}
