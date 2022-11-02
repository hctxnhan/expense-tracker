import { useState } from 'react';
import { useAuthContext } from '../firebase/auth';
import { addTransaction } from '../firebase/firestore';
import Button from './Button';
import Input from './Input';
import RadioButton from './RadioButton';
import RadioGroup from './RadioGroup';
import { convertStringToMiliseconds } from '../utils/TimePicker';
import { useNotificationContext } from '../contexts/NotificationContext';
function convertDateToTimePickerValue(date) {
  console.log('RERUN');
  if (!date) return '';
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const result = `${year}-${month}-${day}`;
  console.log(result);
  return result;
}

export default function NewTransaction() {
  const [date, setDate] = useState(() =>
    convertDateToTimePickerValue(new Date())
  );
  const [items, setItems] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('expense');
  const [user] = useAuthContext();

  const { setNotification } = useNotificationContext();

  async function handleNewTransactionClick(e) {
    e.preventDefault();
    if (!validateForm()) {
      console.log('Some input is not valid');
      return;
    }

    const transaction = {
      uid: user.uid,
      date: convertStringToMiliseconds(date),
      items,
      amount,
      transactionType: type,
    };
    try {
      await addTransaction(transaction);
      setNotification('Transaction added successfully!');
      resetForm();
    } catch (error) {
      console.log(error);
    }
  }

  function resetForm() {
    setItems('');
    setAmount(0);
  }

  function validateForm() {
    if (
      convertStringToMiliseconds(date) === null ||
      items === '' ||
      Number.isNaN(amount) ||
      amount === 0
    )
      return false;
    return true;
  }

  return (
    <form className='flex flex-col gap-4 p-6 shadow-lg rounded-md bg-white h-full'>
      <Input
        label={'Items'}
        value={items}
        setValue={setItems}
        placeholder={
          type === 'expense'
            ? "What've you spent on?"
            : 'Where is that money come from?'
        }
      />

      <Input type={'date'} label={'Date'} value={date} setValue={setDate} />
      <Input label={'Amount'} value={amount} setValue={setAmount} />

      <RadioGroup legend={'Select transaction type'}>
        <RadioButton
          value={'expense'}
          currentValue={type}
          name={'type'}
          radioId={'expense-type'}
          setValue={setType}
        >
          Expense
        </RadioButton>
        <RadioButton
          value={'income'}
          currentValue={type}
          name={'type'}
          radioId={'income-type'}
          setValue={setType}
        >
          Income
        </RadioButton>
      </RadioGroup>
      <div className='flex-grow'></div>
      <Button
        buttonType='primary'
        type='submit'
        onClick={handleNewTransactionClick}
      >
        Add
      </Button>
    </form>
  );
}
