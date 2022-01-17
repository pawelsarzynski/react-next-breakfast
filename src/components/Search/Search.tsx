import * as React from 'react';

interface SearchProps {
  value: string;
  onChange: (query: string) => void;
}

const Search = ({ value, onChange }: SearchProps): JSX.Element => {
  const handleChange = React.useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      onChange(target.value);
    },
    [onChange]
  );

  return (
    <input
      className='px-3 py-2 w-full leading-tight text-gray-700 rounded border shadow appearance-none focus:shadow-outline focus:outline-none'
      placeholder='Search Pokemon...'
      value={value}
      onChange={handleChange}
    />
  );
};

export default Search;
