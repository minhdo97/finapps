<script setup>
import {useAuthStore} from "./stores/auth";
import {onMounted} from "vue";

const authStore = useAuthStore()
if (authStore.isAuthenticated) {
    authStore.getUser()
}
onMounted(() => {

})
</script>
<template>
    <router-view></router-view>
</template>
