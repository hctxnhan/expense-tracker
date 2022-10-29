import { useEffect, useState } from 'react';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import Portal from '../components/Portal';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../firebase/auth';
import Loading from '../components/Loading';

export default function Login() {
  const navigator = useNavigate();
  const [user, isLoading] = useAuthContext();
  const [isOpenSignUp, setOpenSignUp] = useState(false);
  const [isOpenSignIn, setOpenSignIn] = useState(false);

  useEffect(() => {
    if (user) {
      navigator('/');
      console.log('Redirect to home page');
    }
  }, [user, navigator]);

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <h1 className='text-5xl mb-2'>Expense Tracker</h1>
          <p className='mb-4'>
            A simple app for you to track you financial expense!
          </p>
          <div className='flex gap-2'>
            <button
              className='font-bold hover:text-violet-600'
              onClick={() => setOpenSignIn(true && !isOpenSignUp)}
            >
              Login
            </button>
            <button
              className='font-bold hover:text-violet-600'
              onClick={() => setOpenSignUp(true && !isOpenSignIn)}
            >
              Sign up
            </button>
          </div>

          {isOpenSignIn && (
            <Portal>
              <SignInForm handleClose={() => setOpenSignIn(false)} />
            </Portal>
          )}

          {isOpenSignUp && (
            <Portal>
              <SignUpForm handleClose={() => setOpenSignUp(false)} />
            </Portal>
          )}
        </div>
      )}
    </div>
  );
}
