<script setup>
import {reactive} from "vue"
import {useAuthStore} from "../stores/auth";
import {useRouter} from "vue-router";

const auth = useAuthStore()
const router = useRouter()
const formSubmit = reactive({email: "a@a.com", password: "1"});

const handleSubmit = async () => {
    axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('login', formSubmit).then(res => {
            localStorage.setItem('access_token', res.data.access_token)
            auth.setUser(res.data.user)
            auth.setAuth()
        }).then(() => {
            router.push({name: "home"})
        })
    });
}
</script>
<template>
    <div>Login</div>

    <form action="" @submit.prevent="handleSubmit">
        <div>
            <input type="email" v-model="formSubmit.email">
        </div>
        <div>
            <input type="password" v-model="formSubmit.password">
        </div>
        <div>
            <input type="submit" value="Register">
        </div>
    </form>
</template>
