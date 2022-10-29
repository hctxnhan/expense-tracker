import { createContext, useContext, useState } from 'react';

const FilterContext = createContext({
  type: 'all',
  from: 0,
  to: Infinity,
});

function useFilter() {
  const [type, setType] = useState('all');
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(Infinity);

  return { type, setType, from, setFrom, to, setTo };
}

export function FilterProvider({ children }) {
  const filter = useFilter();
  return (
    <FilterContext.Provider value={filter}>{children}</FilterContext.Provider>
  );
}

export function useFilterContext() {
  return useContext(FilterContext);
}
