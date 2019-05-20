export default ({ app, }) => {
  // eslint-disable-next-line no-console
  console.log('Offline/online pluging loaded');

  window.addEventListener('offline', () => {
    // eslint-disable-next-line no-console
    console.log('offline');
  });

  window.addEventListener('online', () => {
    // eslint-disable-next-line no-console
    console.log('online');
  });
};
