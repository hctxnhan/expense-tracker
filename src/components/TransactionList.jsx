import { useEffect, useState } from 'react';
import { useFilterContext } from '../contexts/FilterContext';
import { useAuthContext } from '../firebase/auth';
import { getTransactions } from '../firebase/firestore';
import Loading from './Loading';
import Transaction from './Transaction';

export default function TransactionList() {
  const [user] = useAuthContext();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const { type, from, to } = useFilterContext();

  useEffect(() => {
    let unsub = () => {};

    async function get() {
      unsub = await getTransactions(user.uid, setTransactions, setLoading, {
        type,
        from,
        to,
      });
    }

    if (user) {
      get();
    }

    return () => unsub();
  }, [user, type, from, to]);

  return (
    <div className='flex flex-col gap-3'>
      {loading ? (
        <Loading />
      ) : transactions.length === 0 ? (
        <p>You don't have any transaction yet!</p>
      ) : (
        transactions.map((item) => <Transaction data={item} key={item.docId} />)
      )}
    </div>
  );
}
