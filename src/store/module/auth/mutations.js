export default {
    setValidationErrors(state, error){
        const errors = {};
        if (Object.keys(error).length) {
            Object.keys(error.errors).forEach((key) => {
              errors[key] = error.errors[key][0];
            });
        }
        state.errors = errors;
    },
    AuthToken(state, token){
        localStorage.setItem('authToken', token);
        state.token = token;
    },
    setAuthUser(state, user){
        localStorage.setItem('auth', user);
        state.user = user;
    },
    setLogout(state){
        localStorage.removeItem('authToken');
        localStorage.removeItem('auth');

        state.token = null;
        state.user = null;
    }
}
