import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRedirectIfAuthenticated = (isAuth) => {
    console.log(isAuth)
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);
}