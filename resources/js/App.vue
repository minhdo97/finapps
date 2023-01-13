<template>
    <header>
        <RouterLink tag="a" :to="{name:'home'}">Home</RouterLink>
        <RouterLink tag="a" :to="{name:'login'}">Login</RouterLink>
        <RouterLink tag="a" :to="{name:'register'}">Register</RouterLink>
    </header>
    <router-view></router-view>
</template>
