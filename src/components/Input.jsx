export default function Input({
  label,
  inputId,
  value,
  setValue,
  type = 'text',
  placeholder = '',
}) {
  return (
    <div className='flex flex-col gap-1'>
      <label
        className='text-sm capitalize text-gray-800 font-bold'
        htmlFor={inputId}
      >
        {label}
      </label>
      <input
        className=' rounded-md border-gray-200 border-2 focus:outline-none px-4 py-2'
        type={type}
        id={inputId}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder={placeholder}
      />
    </div>
  );
}
