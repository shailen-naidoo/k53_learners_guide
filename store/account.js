import {
  auth,
  googleProvider,
  twitterProvider,
  facebookProvider,
} from '@/plugins/firebase';

const signInWithGoogle = async (commit) => {
  try {
    const { user: { displayName, email, photoURL, }, } = await auth.signInWithPopup(googleProvider);
    commit('SET_USER', { displayName, email, photoURL, });
  } catch (e) {
    commit('SET_USER_ACCOUNT_ALREADY_EXISTS', true);
  }
};

const signInWithTwitter = async (commit) => {
  try {
    const { user: { displayName, email, photoURL, }, } = await auth.signInWithPopup(twitterProvider);
    commit('SET_USER', { displayName, email, photoURL, });
  } catch (e) {
    commit('SET_USER_ACCOUNT_ALREADY_EXISTS', true);
  }
};

const signInWithFacebook = async (commit) => {
  try {
    const { user: { displayName, email, photoURL, }, } = await auth.signInWithPopup(facebookProvider);
    commit('SET_USER', { displayName, email, photoURL, });
  } catch (e) {
    commit('SET_USER_ACCOUNT_ALREADY_EXISTS', true);
  }
};

export const state = () => ({
  user: null,
  userAccountAlreadyExists: false,
  showLoginMethods: false,
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
};
