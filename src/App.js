import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { FilterProvider } from './contexts/FilterContext';
import { FirebaseAuthProvider } from './firebase/auth';
import Home from './pages/Home';
import Login from './pages/Login';

export default function App() {
  return (
    <BrowserRouter>
      <FirebaseAuthProvider>
        <FilterProvider>
          <div className='bg-violet-50 min-h-screen'>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </div>
        </FilterProvider>
      </FirebaseAuthProvider>
    </BrowserRouter>
  );
}
