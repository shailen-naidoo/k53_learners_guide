export default ({ app, }) => {
  // eslint-disable-next-line no-console
  console.log('Offline/online pluging loaded');

  window.addEventListener('offline', () => {
    app.store.commit('SET_OFFLINE', true);
  });

  window.addEventListener('online', () => {
    app.store.commit('SET_OFFLINE', false);
  });
};
