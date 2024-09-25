import AOS from 'aos';
import { useEffect } from 'react';

import { useGetCompanyMutation } from 'src/app/services/management';
import { changeTheme } from 'src/app/slices/layoutSlice';
import { useAppDispatch, useTypedSelector } from 'src/app/store';
import { isDarkTheme } from 'src/constants/storage';

export default function useRoutes() {
  //Set default colors
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeTheme(isDarkTheme ? 'dark' : 'light'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Authenticate
  const { isAuthenticated, hasCompany } = useTypedSelector(
    (state) => state.auth
  );

  // Init AOS
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 0,
      duration: 800,
    });
  }, []);
  //Check company
  const [getCompany] = useGetCompanyMutation();

  useEffect(() => {
    !hasCompany && getCompany();
  }, [getCompany]);

  return {
    isAuthenticated,
    hasCompany,
  };
}
