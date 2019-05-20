import {
  auth,
  firestore,
  googleProvider,
  twitterProvider,
  facebookProvider,
} from '@/plugins/firebase';

const signInWithGoogle = async (commit) => {
  try {
    const { user: { displayName, email, photoURL, }, } = await auth.signInWithPopup(googleProvider);
    commit('SET_USER', { displayName, email, photoURL, });
    commit('SET_SHOW_LOGIN_METHODS');
  } catch (e) {
    commit('SET_USER_ACCOUNT_ALREADY_EXISTS', true);
  }
};

const signInWithTwitter = async (commit) => {
  try {
    const { user: { displayName, email, photoURL, }, } = await auth.signInWithPopup(twitterProvider);
    commit('SET_USER', { displayName, email, photoURL, });
    commit('SET_SHOW_LOGIN_METHODS');
  } catch (e) {
    commit('SET_USER_ACCOUNT_ALREADY_EXISTS', true);
  }
};

const signInWithFacebook = async (commit) => {
  try {
    const { user: { displayName, email, photoURL, }, } = await auth.signInWithPopup(facebookProvider);
    commit('SET_USER', { displayName, email, photoURL, });
    commit('SET_SHOW_LOGIN_METHODS');
  } catch (e) {
    commit('SET_USER_ACCOUNT_ALREADY_EXISTS', true);
  }
};

export const state = () => ({
  user: null,
  userAccountAlreadyExists: false,
  showLoginMethods: false,
  emailUpdates: false,
});

export const mutations = {
  SET_USER(state, value) {
    state.user = value;
  },
  SET_USER_ACCOUNT_ALREADY_EXISTS(state, value) {
    state.userAccountAlreadyExists = value;
  },
  SET_SHOW_LOGIN_METHODS(state) {
    state.showLoginMethods = !state.showLoginMethods;
  },
  SET_EMAIL_UPDATES(state, value) {
    state.emailUpdates = value;
  },
};

export const actions = {
  SIGNIN_USER_WITH({ commit, }, provider) {
    switch (provider) {
      case 'google': signInWithGoogle(commit);
        break;
      case 'twitter': signInWithTwitter(commit);
        break;
      case 'facebook': signInWithFacebook(commit);
        break;
    };
  },
  async SIGNOUT_USER({ commit, }) {
    await auth.signOut();
    commit('SET_USER', null);
  },
  async SET_USER_EMAIL_UPDATES({ commit, }, value) {
    await firestore.collection('users').doc(auth.currentUser.uid).update({
      emailUpdates: value,
    });
    commit('SET_EMAIL_UPDATES', value);
  },
};
