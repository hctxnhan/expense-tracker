import userEvent from '@testing-library/user-event';
import { useAuthContext } from '../firebase/auth';
import { signOutUser } from '../firebase/firebase';
import Button from './Button';

export default function Header() {
  const [user] = useAuthContext();
  return (
    <>
      {user ? (
        <div className='flex gap-4 items-center justify-end px-8 py-4'>
          <p> {user.email}</p>
          <Button buttonType='secondary' onClick={() => signOutUser()}>
            Sign out
          </Button>
        </div>
      ) : null}
    </>
  );
}
