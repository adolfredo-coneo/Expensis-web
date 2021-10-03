import getFirebase from '../../firebase';
import { Account } from '../../models/Accounts';

export const requestFirebaseAccounts = async () => {
  const firebaseInstance = getFirebase();
  try {
    if (!firebaseInstance) return [];

    const db = firebaseInstance.firestore();
    const ref = db.collection('accounts');

    const accounts = await ref.get();
    const allAccounts: Account[] = [];
    accounts.forEach((account) => {
      const data = account.data();
      allAccounts.push(data as Account);
    });

    return allAccounts;
  } catch (error) {
    console.log('error', error);
    return [];
  }
};
