import {defineStore} from "pinia";
import axios from "axios";

export const useAuthStore = defineStore('auth', {
    state: () => ({user: null, authenticated: false}),
    getters: {
        isAuth: (state) => state.authenticated,
        auth: (state) => state.user,
    },
    actions: {
        setAuth() {
            this.authenticated = true
        },
        setUser(user) {
            this.user = user
        },
        async getUser() {
            await axios.get('api/user').then((res) => {
                this.user = res.data
                this.authenticated = true
            }).catch(() => {
                this.user = null
                this.authenticated = false
                localStorage.removeItem('access_token')
            });
        },
    },
})
