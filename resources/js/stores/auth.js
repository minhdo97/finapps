import {defineStore} from "pinia";
import axios from "axios";

export const useAuthStore = defineStore('auth', {
    state: () => ({user: null, token: localStorage.getItem('access_token')}),
    getters: {
        isAuthenticated: (state) => !!state.token,
        auth: (state) => state.user,
    },
    actions: {
        setToken(token) {
            this.token = token
        },
        setUser(user) {
            this.user = user
        },
        async getUser() {
            await axios.get('me').then((res) => {
                this.user = res.data.user
            }).catch(() => {
                this.user = null
                this.setToken('')
                localStorage.removeItem('access_token')
                this.router.push({name: "Login"})
            });
        },
        register(form) {
            axios.get('/sanctum/csrf-cookie', {baseURL: import.meta.env.VITE_APP_URL})
            axios.post('register', form).then((res) => {
                this.user = res.data.user;
                localStorage.setItem('access_token', res.data.access_token)
                this.setToken(res.data.access_token)
            }).then(() => {
                location.replace('/')
            })
        },
        async login(form) {
            await axios.get('/sanctum/csrf-cookie', {baseURL: import.meta.env.VITE_APP_URL})
            await axios.post('login', form).then((res) => {
                this.user = res.data.user;
                localStorage.setItem('access_token', res.data.access_token)
                this.setToken(res.data.access_token)
            }).then(() => {
                location.replace('/')
            })
        },
        async logout() {
            localStorage.removeItem('access_token');
            this.user = null;
            this.token = '';
            location.replace('/login')
        }
    },
})
