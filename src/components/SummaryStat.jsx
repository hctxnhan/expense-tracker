function SummaryStat({ number, Icon, color, label }) {
  return (
    <div className='bg-white p-4 flex items-center gap-3 flex-grow rounded-md'>
      <div className=''>
        <Icon color={color} size={30} />
      </div>
      <div>
        <h3 className='text-xl font-semibold'>{number} VND</h3>
        <p className='uppercase text-gray-500 text-xs'>{label}</p>
      </div>
    </div>
  );
}

export default SummaryStat;
