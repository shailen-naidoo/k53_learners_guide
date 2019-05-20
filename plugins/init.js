import {
  auth,
  firestore,
} from '@/plugins/firebase';

const createAccount = async (user) => {
  const { exists, } = await firestore.collection('users').doc(user.uid).get();

  if (exists) {
    return false;
  }

  await firestore.collection('users').doc(user.uid).set({
    emailUpdates: false,
  });
};

const setUserEmailUpdates = async (commit, user) => {
  const res = await firestore.collection('users').doc(user.uid).get();

  commit('account/SET_EMAIL_UPDATES', res.data().emailUpdates);
};

export default ({ app, }) => {
  auth.onAuthStateChanged(async (user) => {
    if (!user) {
      return false;
    }

    const { displayName, email, photoURL, uid, metadata, } = user;

    app.store.commit('account/SET_USER', { displayName, email, photoURL, });
    await createAccount({ uid, metadata, });
    await setUserEmailUpdates(app.store.commit, user);
  });
};
