import request from '@/utils/request';
import router from '@/router/index';

export default {
    loginUser({ commit }, credentials) {
        commit('setValidationErrors', {});

        return new Promise((resolve, reject) => {
          request.post('/login-link', credentials)
            .then(resp => {
                resolve(resp);
            })
           .catch(error => {
                reject(error);
                commit('setValidationErrors', error.response.data);
            })
        });
    },

    loginUingToken({ commit, dispatch }, token) {
        commit('setValidationErrors', {});
        return new Promise((resolve, reject) => {
            request.get(`/login/${token}`)
            .then(resp => {
                commit('AuthToken', resp.data.token);
                dispatch('getAuthUser');
                resolve(resp);
                router.push('/dashboard');
            })
           .catch(error => {
                reject(error);
            })
        });
    },

    getAuthUser({ commit }) {
        request.get('/me')
        .then(resp => {
            commit('setAuthUser', resp.data);
        })
    },

    updateProfile({ commit }, profile) {
        return new Promise((resolve, reject) => {
            request.post('/profile', profile)
            .then(resp => {
                commit('setAuthUser', resp.data);
                resolve(resp);
            }).catch(error => {
                 commit('setValidationErrors', error.response.data);
                 reject(error);
             })
        });
    },

    logoutUser({ commit }) {
      request.get('/logout')
      commit('setLogout');
      router.push('/login');
    },
}
