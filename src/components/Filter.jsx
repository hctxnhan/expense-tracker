import { useState } from 'react';
import { useFilterContext } from '../contexts/FilterContext';
import { convertStringToMiliseconds } from '../utils/TimePicker';
import Button from './Button';
import Input from './Input';
import RadioButton from './RadioButton';
import RadioGroup from './RadioGroup';

export default function Filter() {
  const [typeFilter, setTypeFilter] = useState('all');
  const [dateFromFilter, setDateFromFilter] = useState('');
  const [dateToFilter, setDateToFilter] = useState('');

  const { setType, setFrom, setTo } = useFilterContext();
  function setFilter() {
    setType(typeFilter);

    const calulatedFrom =
      dateFromFilter === '' ? 0 : convertStringToMiliseconds(dateFromFilter);
    const calculatedTo =
      dateToFilter === '' ? Infinity : convertStringToMiliseconds(dateToFilter);

    console.log('calculated from, to: ', calulatedFrom, calculatedTo);

    setFrom(calulatedFrom);

    setTo(calculatedTo);
  }

  function clearFilter() {
    setType('all');
    setFrom(0);
    setTo(Infinity);

    setTypeFilter('all');
    setDateFromFilter('');
    setDateToFilter('');
  }

  return (
    <div className='flex flex-col gap-3 p-6 shadow-lg rounded-md self-start bg-white'>
      <RadioGroup legend={'Select transaction type'}>
        <RadioButton
          value={'all'}
          currentValue={typeFilter}
          name={'type-filter'}
          radioId={'all-type-filter'}
          setValue={setTypeFilter}
        >
          All
        </RadioButton>
        <RadioButton
          value={'expense'}
          currentValue={typeFilter}
          name={'type-filter'}
          radioId={'expense-type-filter'}
          setValue={setTypeFilter}
        >
          Expense
        </RadioButton>
        <RadioButton
          value={'income'}
          currentValue={typeFilter}
          name={'type-filter'}
          radioId={'income-type-filter'}
          setValue={setTypeFilter}
        >
          Income
        </RadioButton>
      </RadioGroup>
      <Input
        type={'date'}
        label={'From'}
        value={dateFromFilter}
        setValue={setDateFromFilter}
      />
      <Input
        type={'date'}
        label={'To'}
        value={dateToFilter}
        setValue={setDateToFilter}
      />
      <div className='flex gap-4 justify-end'>
        <Button buttonType='secondary' onClick={() => clearFilter()}>
          Clear
        </Button>
        <Button buttonType='primary' onClick={setFilter}>
          Filter
        </Button>
      </div>
    </div>
  );
}
