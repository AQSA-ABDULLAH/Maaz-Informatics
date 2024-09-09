import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRedirectIfAuthenticated = (isAuth) => {
    console.log(isAuth)
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/');  // Redirect to home page if user is already authenticated
    }
  }, [isAuth, navigate]);
}