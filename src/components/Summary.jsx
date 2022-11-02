import { useTransactionContext } from '../contexts/TransactionContext';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import SummaryStat from './SummaryStat';

function Summary() {
  const { transactions } = useTransactionContext();
  const income = transactions.reduce((acc, curr) => {
    if (curr.transactionType === 'income') {
      return acc + Number(curr.amount);
    }
    return acc;
  }, 0);

  const expense = transactions.reduce((acc, curr) => {
    if (curr.transactionType === 'expense') {
      return acc + Number(curr.amount);
    }
    return acc;
  }, 0);

  return (
    <div className='flex gap-2'>
      <SummaryStat
        Icon={AiOutlineArrowUp}
        color='#ff2949'
        number={expense}
        label={'Total expense'}
      />
      <SummaryStat
        Icon={AiOutlineArrowDown}
        color='#3ae082'
        number={income}
        label={'Total income'}
      />
    </div>
  );
}

export default Summary;
