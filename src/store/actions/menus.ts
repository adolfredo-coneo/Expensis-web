import { Dispatch } from '@reduxjs/toolkit';
import getFirebase from '../../firebase';
import { Menu } from '../../models/Menu';

export const getMenus = () => {
  return async (dispatch: Dispatch) => {
    const firebaseInstance = getFirebase();
    try {
      if (!firebaseInstance) return;

      const db = firebaseInstance.firestore();
      const ref = db.collection('menus');

      const menus = await ref.get();
      let allMenus: Menu[] = [];
      menus.forEach((menu) => {
        const data = menu.data();
        allMenus.push(data as Menu);
      });
      return allMenus;
    } catch (error) {
      console.log('error', error);
    }
  };
};
