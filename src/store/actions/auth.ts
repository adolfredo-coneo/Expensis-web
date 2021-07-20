import { Dispatch } from '@reduxjs/toolkit';
import getFirebase from '../../firebase';
import { Userlogin } from '../../models/User';
import { layoutActions } from '../slices/layout';

export const sendLogin = (data: Userlogin) => {
  return async (dispatch: Dispatch) => {
    dispatch(
      layoutActions.setNotification({
        message: 'Logging in...',
        status: 'info',
        title: '',
      })
    );

    const firebaseInstance = getFirebase();
    //firebase auth username password
    try {
      if (firebaseInstance) {
        const user = await firebaseInstance
          .auth()
          .signInWithEmailAndPassword(data.email, data.password);
        console.log('user', user);
        dispatch(
          layoutActions.setNotification({
            message: 'User Logged In...',
            status: 'success',
            title: 'Complete',
          })
        );
      }
    } catch (error) {
      dispatch(
        layoutActions.setNotification({
          message: error.message,
          status: 'error',
          title: '',
        })
      );
    }
  };
};
