import Router from 'next/router';
import { useEffect } from 'react';

function useAuth(): void {
  const isLogged = localStorage.getItem('isLogged');

  useEffect(() => {
    if (!isLogged) Router.push('/401');
  }, [isLogged]);
}

export { useAuth };
