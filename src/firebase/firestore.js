import { db } from './firebase';
import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  deleteDoc,
  doc,
  orderBy,
} from 'firebase/firestore';

export async function addTransaction({
  uid,
  date,
  items,
  amount,
  transactionType,
}) {
  const transactionsRef = await collection(db, 'transactions');
  await addDoc(transactionsRef, {
    uid,
    date: Number(date),
    items,
    amount,
    transactionType,
  });
}

export async function removeTransaction(docId) {
  try {
    const docRef = await doc(db, 'transactions', docId);
    await deleteDoc(docRef);
  } catch (error) {
    console.log(error.message);
  }
}

export async function getTransactions(uid, setTransactions, setIsLoading) {
  const transactionsRef = await collection(db, 'transactions');

  if (!uid) {
    return;
  }

  const q = query(
    transactionsRef,
    where('uid', '==', uid),
    orderBy('date', 'desc')
  );

  async function getTransaction(snapShot) {
    try {
      setIsLoading(true);
      console.log('Listen to change on database');
      const currentTransactions = [];

      for (let snapDoc of snapShot.docs) {
        const transactionData = snapDoc.data();
        currentTransactions.push({
          ...transactionData,
          docId: snapDoc.id,
        });
      }

      // console.log(currentTransactions);

      setTransactions(currentTransactions);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  const unsubscribe = onSnapshot(q, (querySnapShot) => {
    getTransaction(querySnapShot);
  });

  return unsubscribe;
}
