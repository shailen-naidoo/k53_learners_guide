export default ({ app, }) => {
  // eslint-disable-next-line no-console
  console.info('Offline/online plugin loaded');
  window.addEventListener('offline', (e) => {
    app.store.commit('SET_OFFLINE', true);
  });

  window.addEventListener('online', (e) => {
    app.store.commit('SET_OFFLINE', false);
  });
};
