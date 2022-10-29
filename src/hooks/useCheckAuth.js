import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../firebase/auth';

export default function useCheckAuth() {
  const [user] = useAuthContext();
  const navigator = useNavigate();

  useEffect(() => {
    if (!user) {
      navigator('/login');
    }
  }, [user, navigator]);
}
