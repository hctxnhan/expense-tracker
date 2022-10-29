import { useState } from 'react';
import Input from './Input';
import { signInUserWithEmailAndPassword } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import Button from './Button';
export default function SignInForm({ handleClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigator = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    signInUserWithEmailAndPassword(email, password).then(() => {
      navigator('/');
    });
  };
  return (
    <div className='fixed top-1/2 left-1/2 rounded-md p-10 transform -translate-x-1/2 -translate-y-1/2 shadow-lg bg-white'>
      <button onClick={() => handleClose()} className='absolute right-4 top-4'>
        <GrClose />
      </button>
      <h1 className='text-3xl font-semibold mb-2'>Welcome back</h1>
      <p className='text-gray-500 mb-4'>
        Welcome back! Please enter your details.
      </p>
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
        <Button type='submit'>Sign In</Button>
      </form>
    </div>
  );
}
