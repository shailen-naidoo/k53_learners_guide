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

export default ({ app, }) => {
  auth.onAuthStateChanged(async (user) => {
    if (!user) {
      return false;
    }

    const { displayName, email, photoURL, uid, metadata, } = user;

    app.store.commit('account/SET_USER', { displayName, email, photoURL, });
    await createAccount({ uid, metadata, });
  });
};
