import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Notification from './components/Notification';
import Portal from './components/Portal';
import { FilterProvider } from './contexts/FilterContext';
import { NotificationProvider } from './contexts/NotificationContext';
import { TransactionProvider } from './contexts/TransactionContext';
import { FirebaseAuthProvider } from './firebase/auth';
import Home from './pages/Home';
import Login from './pages/Login';

export default function App() {
  return (
    <BrowserRouter>
      <FirebaseAuthProvider>
        <NotificationProvider>
          <TransactionProvider>
            <FilterProvider>
              <div className='bg-violet-50 min-h-screen'>
                <Portal wrapperId='notification'>
                  <Notification />
                </Portal>

                <Header />
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/login' element={<Login />} />
                </Routes>
              </div>
            </FilterProvider>
          </TransactionProvider>
        </NotificationProvider>
      </FirebaseAuthProvider>
    </BrowserRouter>
  );
}
