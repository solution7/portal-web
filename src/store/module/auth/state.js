export default {
    errors: '',
    token: localStorage.getItem('authToken') || null,
    user: localStorage.getItem('auth') || null,
}
