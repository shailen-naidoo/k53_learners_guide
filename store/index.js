export const state = () => ({
  offline: false,
});

export const mutations = {
  SET_OFFLINE(state, value) {
    state.offline = value;
  },
};
