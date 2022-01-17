import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      {children}
      <span className='form-pink-400 bg-transparent bg-pink-400 bg-pink-700 bg-purple-600 bg-purple-800 bg-indigo-600 bg-indigo-700 bg-blue-400 bg-blue-500 bg-green-400 bg-green-600 bg-yellow-400 bg-yellow-600 bg-yellow-700 bg-red-400 bg-red-900 bg-gray-400 bg-gray-500 bg-gray-800 from-pink-700 from-purple-600 from-purple-800 from-indigo-600 from-indigo-700 from-blue-400 from-blue-500 from-green-400 from-green-600 from-yellow-400 from-yellow-600 from-yellow-700 from-red-400 from-red-900 from-gray-400 from-gray-500 from-gray-800' />
    </>
  );
}
