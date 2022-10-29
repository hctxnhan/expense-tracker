export default function RadioGroup({ children, legend }) {
  return (
    <div>
      <legend className='text-sm capitalize text-gray-800 font-bold mb-1'>
        {legend}
      </legend>
      <div className='rounded-md border-gray-200 border-2 focus:outline-none px-4 py-2 flex gap-6 flex-wrap'>
        {children}
      </div>
    </div>
  );
}
