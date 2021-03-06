import { Dispatch } from '@reduxjs/toolkit';
import getFirebase from '../../firebase';
import { Userlogin } from '../../models/User';
import { layoutActions } from '../slices/layout';
import { authActions } from '../slices/auth';

export const sendLogin = (data: Userlogin) => {
  return async (dispatch: Dispatch) => {
    dispatch(
      layoutActions.setNotification({
        message: 'Logging in...',
        status: 'info',
      })
    );

    const firebaseInstance = getFirebase();
    //firebase auth username password
    try {
      if (firebaseInstance) {
        const user = await firebaseInstance
          .auth()
          .signInWithEmailAndPassword(data.email, data.password);
        if (user.user) {
          dispatch(
            authActions.authUser({
              email: user.user.email,
              name: user.user.displayName,
            })
          );
          dispatch(
            layoutActions.setNotification({
              message: 'User Logged In...',
              status: 'success',
            })
          );
        }

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

//get firebase auth current user
export const getCurrentUser = () => {
  return async (dispatch: Dispatch) => {
    const firebaseInstance = getFirebase();
    try {
      if (firebaseInstance) {
        firebaseInstance.auth().onAuthStateChanged((authUser) => {
          if (authUser) {
            dispatch(
              authActions.authUser({
                email: authUser.email,
                name: authUser.displayName,
              })
            );
          } else {
            dispatch(authActions.signOutUser());
          }
        });
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

//firebase auth signout function
export const signOutUser = () => {
  return async (dispatch: Dispatch) => {
    dispatch(
      layoutActions.setNotification({
        message: 'Signing Out...',
        status: 'info',
      })
    );
    const firebaseInstance = getFirebase();
    if (firebaseInstance) {
      dispatch(authActions.signOutUser());
      await firebaseInstance.auth().signOut();
    }
    dispatch(
      layoutActions.setNotification({
        message: 'Sign Out Complete',
        status: 'success',
      })
    );
  };
};
