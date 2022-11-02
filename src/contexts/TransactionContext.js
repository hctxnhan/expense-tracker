import { createContext, useContext, useState } from 'react';

const TransactionContext = createContext({
  transactions: [],
  loading: true,
  setTransactions: () => {},
});

function useTransaction() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  return { transactions, loading, setLoading, setTransactions };
}

export function TransactionProvider({ children }) {
  const transaction = useTransaction();
  return (
    <TransactionContext.Provider value={transaction}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactionContext() {
  return useContext(TransactionContext);
}
