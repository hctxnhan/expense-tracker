function PrimaryButton({ children, type, ...props }) {
  return (
    <button
      type={type}
      className='capitalize rounded-md font-semibold bg-violet-600 hover:bg-violet-500 text-gray-50 p-2 px-4 focus:outline-violet-400 outline outline-4 outline-offset-2'
      {...props}
    >
      {children}
    </button>
  );
}

function SecondaryButton({ children, type, ...props }) {
  return (
    <button
      type={type}
      className='capitalize rounded-md font-semibold bg-gray-50 hover:bg-gray-100 text-gray-900 p-2 px-4 outline outline-transparent outline-4 outline-offset-2 focus:outline-gray-300 hover:outline-gray-200'
      {...props}
    >
      {children}
    </button>
  );
}

export default function Button({ buttonType = 'primary', onClick, ...props }) {
  const Button = {
    primary: PrimaryButton,
    secondary: SecondaryButton,
  }[buttonType];
  return <Button onClick={onClick} {...props} />;
}
