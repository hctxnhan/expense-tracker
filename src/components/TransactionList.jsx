import { useEffect, useState } from 'react';
import { useFilterContext } from '../contexts/FilterContext';
import { useTransactionContext } from '../contexts/TransactionContext';
import { useAuthContext } from '../firebase/auth';
import { getTransactions } from '../firebase/firestore';
import Loading from './Loading';
import Transaction from './Transaction';

export default function TransactionList() {
  const [user] = useAuthContext();

  const { transactions, loading, setLoading, setTransactions } =
    useTransactionContext();

  const { type, from, to } = useFilterContext();

  const filteredTransactions = transactions.filter((transaction) => {
    if (transaction.date >= from && transaction.date <= to) {
      if (type === 'all') return true;
      return transaction.transactionType === type;
    }
  });

  useEffect(() => {
    let unsub = () => {};
    async function get() {
      unsub = await getTransactions(user.uid, setTransactions, setLoading);
    }

    if (user) {
      get();
    }

    return () => unsub();
  }, [user, setTransactions, setLoading]);

  return (
    <div className='flex flex-col gap-3'>
      {loading ? (
        <div className='text-center'>
          <Loading />
        </div>
      ) : transactions.length === 0 ? (
        <p className='text-2xl text-center'>
          You don't have any transaction yet!
        </p>
      ) : (
        filteredTransactions.map((item) => (
          <Transaction data={item} key={item.docId} />
        ))
      )}
    </div>
  );
}
