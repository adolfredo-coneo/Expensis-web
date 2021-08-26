import { Dispatch } from '@reduxjs/toolkit';
import { requestFirebaseMenus } from './menus';
import { layoutActions } from '../slices/layout';
import { accountsActions } from '../slices/accounts';
import { requestFirebaseAccounts } from './accounts';

export const loadSystem = () => {
  return async (dispatch: Dispatch) => {
    dispatch(layoutActions.setLoadingDashboard(10));
    try {
      dispatch(layoutActions.setLoadingDashboard(30));
      const menus = await requestFirebaseMenus();
      dispatch(layoutActions.setMenu(menus));

      dispatch(layoutActions.setLoadingDashboard(60));
      const accounts = await requestFirebaseAccounts();
      dispatch(accountsActions.setAccounts(accounts));

      dispatch(layoutActions.setLoadingDashboard(100));

      return menus;
    } catch (error) {
      console.log('error', error);
    }
  };
};
