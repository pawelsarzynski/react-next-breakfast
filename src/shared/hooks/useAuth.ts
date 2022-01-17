import Router from 'next/router';
import { useEffect } from 'react';

function useAuth(): void {
  const isLogged =
    typeof window !== 'undefined' && localStorage.getItem('isLogged');

  useEffect(() => {
    console.log('hook');
    if (!isLogged) Router.push('/401');
  }, [isLogged]);
}

export { useAuth };
