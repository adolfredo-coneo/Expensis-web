import { Dispatch } from '@reduxjs/toolkit';
import getFirebase from '../../firebase';
import { UserModel } from '../../models/User';
import { authActions } from '../slices/auth';
import { layoutActions } from '../slices/layout';

export const sendRegistration = (data: UserModel) => {
  return async (dispatch: Dispatch) => {
    dispatch(
      layoutActions.setNotification({
        message: 'Creating User...',
        status: 'info',
      })
    );

    const firebaseInstance = getFirebase();
    //firebase auth username password
    try {
      if (firebaseInstance) {
        const user = await firebaseInstance
          .auth()
          .createUserWithEmailAndPassword(data.email, data.password);
        if (user) {
          const currentUser = firebaseInstance.auth().currentUser;
          if (currentUser) {
            await currentUser.updateProfile({
              displayName: data.name,
            });
            dispatch(
              authActions.authUser({
                email: currentUser.email,
                name: currentUser.displayName,
              })
            );
          }
        }

        dispatch(
          layoutActions.setNotification({
            message: 'User Created...',
            status: 'success',
          })
        );
        return user;
      }
    } catch (error) {
      dispatch(
        layoutActions.setNotification({
          message: error.message,
          status: 'error',
        })
      );
    }
  };
};
