import store from '@/store'

const routes = [
  'Profile',
  'Dashboard'
];

const authMiddleware = {
  handle(to) {
    let redirect = null;
    if (routes.includes(to.name)) {
      if (!store.state.auth.token) {
        redirect = '/login';
      }
    }
    if (redirect) {
      return { path: redirect };
    }
  },
};

export default authMiddleware;
