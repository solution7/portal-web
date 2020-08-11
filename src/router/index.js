import Vue from 'vue';
import Router from 'vue-router';

//middleware
import GuestMiddleware from '@/middleware/guest'
import AuthMiddleware from '@/middleware/auth'

//pages
import Welcome from '@/views/welcome'
import Login from '@/views/auth/login'
import Dashboard from '@/views/dashboard'
import Profile from '@/views/profile'

Vue.use(Router);

const router =  new Router({
  mode: 'history',
  routes: [
      {
          path: '/',
          component: Welcome,
          name: 'Welcome'
      },
      {
          path: '/login',
          component: Login,
          name: 'Login'
      },
      {
          path: '/login/:token',
          component: Login,
          name: 'LoginUsingToken'
      },
      {
          path: '/dashboard',
          component: Dashboard,
          name: 'Dashboard'
      },
      {
          path: '/profile',
          component: Profile,
          name: 'Profile'
      },
  ]
});

router.beforeEach((to, from, next) => {
    let redirect = GuestMiddleware.handle(to)
    if (!redirect) {
        redirect = AuthMiddleware.handle(to)
    }
    next(redirect);
});

export default router;
