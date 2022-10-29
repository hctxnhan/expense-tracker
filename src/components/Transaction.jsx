import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { removeTransaction } from '../firebase/firestore';

function getDateStringFromMillisecond(str) {
  const newDate = new Date(str);
  return `${newDate.getUTCMonth} ${newDate.getUTCDate} ${newDate.getFullYear}`;
}

export default function Transaction({ data }) {
  const { amount, transactionType, items, date, docId } = data;
  const newDate = new Date(date);
  return (
    <div className='flex items-center gap-4 shadow-md p-3 rounded-md shadow-slate-200 bg-white'>
      <div
        className={`${
          transactionType === 'expense' ? 'bg-red-300' : 'bg-green-200'
        } rounded-md w-[35px] h-[35px] flex items-center justify-center`}
      >
        {transactionType === 'expense' ? (
          <AiOutlineMinusCircle size={25} color='#ff2949' />
        ) : (
          <AiOutlinePlusCircle size={25} color='#3ae082' />
        )}
      </div>
      <div className='flex-grow'>
        <p className='font-semibold'>{items}</p>
        <p className='font-semibold text-gray-400 text-xs'>
          {newDate.toDateString()}
        </p>
      </div>
      <div>
        <p className='font-semibold text-lg text-gray-800'>
          {amount} <span className='text-gray-300'>VND</span>
        </p>
      </div>
      <button
        onClick={() => removeTransaction(docId)}
        className='bg-slate-100 hover:bg-slate-300 active:bg-slate-200 w-[35px] h-[35px]  flex items-center justify-center rounded-md'
      >
        <GrClose color='#c9c9c9' />
      </button>
    </div>
  );
}
