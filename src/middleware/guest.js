import store from '@/store'

const routes = [
  'Login',
  'LoginUsingToken'
];

const guestMiddleware = {
  handle(to) {
    let redirect = null;
    if (routes.includes(to.name)) {
      if (store.state.auth.token) {
        redirect = '/dashboard';
      }
    }
    if (redirect) {
      return { path: redirect };
    }
  },
};

export default guestMiddleware;
