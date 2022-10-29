export default function RadioButton({
  value,
  radioId,
  children,
  currentValue,
  name,
  setValue,
}) {
  function onChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className='flex items-center gap-2'>
      <label htmlFor={radioId}>{children}</label>
      <input
        type='radio'
        name={name}
        value={value}
        id={radioId}
        checked={currentValue === value}
        onChange={onChange}
      />
    </div>
  );
}
