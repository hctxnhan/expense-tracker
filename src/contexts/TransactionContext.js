import { createContext, useContext, useState } from 'react';

const TransactionContext = createContext({
  transactions: [],
  setTransactions: () => {},
});

function useTransaction() {
  const [transactions, setTransactions] = useState([]);

  return { transactions, setTransactions };
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
