import VueScroll from 'vue-scrollto';

// eslint-disable-next-line no-console
console.log('Checking for hash params');

export default ({ app }) => {
  if (!location.hash) {
    return false;
  }

  VueScroll.scrollTo(location.hash);
};
