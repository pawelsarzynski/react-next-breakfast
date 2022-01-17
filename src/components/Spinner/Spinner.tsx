import * as React from 'react';

const Spinner = (): JSX.Element => (
  <div className='flex justify-center items-center'>
    <div
      className='spinner-border inline-block w-8 h-8 rounded-full border-4 animate-spin'
      role='status'
    />
  </div>
);

export default Spinner;
