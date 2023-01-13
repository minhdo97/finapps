<script setup>
const getUser = async () => {
    const res = await axios.get('api/user')
    console.log(res)
}

const logout = async () => {
    const res = await axios.get('logout')
    location.replace('/login')
}
</script>
<template>
    <div>Home</div>
    <a href="#" @click.stop="getUser">GetUser</a>
    <a href="#" @click.stop="logout">logout</a>
</template>
