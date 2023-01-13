<script setup>
import {reactive} from "vue"

const formSubmit = reactive({name: "Minh", email: "a@a.com", password: "1"});

const handleSubmit = async () => {
    const res = await axios.post('register', formSubmit)
    console.log(res)
}
</script>
<template>
    <div>Register</div>

    <form action="" @submit.prevent="handleSubmit">
        <div>
            <input type="text" v-model="formSubmit.name">
        </div>
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
