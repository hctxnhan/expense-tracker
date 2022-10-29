import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';

const FirebaseAuthContext = createContext({
  authUser: null,
  isLoading: true,
});

function useFirebaseAuth() {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  async function authStateChangedHandler(user) {
    setLoading(true);
    if (user) {
      setUser({
        uid: user.uid,
        email: user.email,
      });
    } else {
      setUser(null);
    }
    setLoading(false);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChangedHandler);

    return () => {
      unsubscribe();
    };
  }, []);

  return [user, isLoading];
}

export function FirebaseAuthProvider({ children }) {
  const auth = useFirebaseAuth();
  return (
    <FirebaseAuthContext.Provider value={auth}>
      {children}
    </FirebaseAuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(FirebaseAuthContext);
}
