export const state = () => ({
  offline: false,
  dismiss: false,
});

export const mutations = {
  SET_OFFLINE(state, value) {
    state.offline = value;
  },
  SET_DISMISS(state, value) {
    state.dismiss = value;
  },
};
