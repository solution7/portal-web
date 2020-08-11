import axios from 'axios'
import store from '@/store'

const service = axios.create({
    baseURL: 'http://api.portal.co/api', // Api base URL
})

service.interceptors.request.use(
  config => {
    if(store.state.auth) {
        const token = store.state.auth.token;
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config
  },
  error => {
      Promise.reject(error)
  }
)

// response
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if ((!error.response || error.response.status === 401) && store.state.auth.token) {
        store.dispatch('logoutUser');
    }
    return Promise.reject(error)
  }
)

export default service
