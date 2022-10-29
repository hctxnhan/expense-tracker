import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import Button from '../components/Button';
import Filter from '../components/Filter';
import NewTransaction from '../components/NewTransaction';
import Portal from '../components/Portal';
import TransactionList from '../components/TransactionList';
import useCheckAuth from '../hooks/useCheckAuth';

export default function Home() {
  useCheckAuth();
  const [isOpen, setOpen] = useState();

  return (
    <div className='grid grid-cols-12 gap-4 p-8 py-4'>
      <div className='col-start-1 col-end-4 lg:col-end-7 xs:col-span-full'>
        <Filter />
      </div>
      <div className='col-span-6 lg:row-start-2 lg:col-span-full xs:row-start-3'>
        <TransactionList />
      </div>
      <div className='col-start-10 col-end-13 lg:col-start-7 xs:hidden'>
        <NewTransaction />
      </div>
      <Button
        className='hidden xs:block col-span-full row-start-2'
        buttonType='primary'
        onClick={() => {
          setOpen(true);
        }}
      >
        Add Transaction
      </Button>
      {isOpen && (
        <Portal>
          <div className='fixed inset-0 hidden xs:block'>
            <button
              className='absolute right-2 top-2'
              onClick={() => setOpen(false)}
            >
              <GrClose />
            </button>
            <NewTransaction />
          </div>
        </Portal>
      )}
    </div>
  );
}
