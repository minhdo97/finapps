<script setup>
import LoaderApp from "./common/Loader.vue"
</script>

<template>
    <div class="d-flex flex-column h-100">
        <LoaderApp></LoaderApp>
        <main class="container-fluid h-100">
            <router-view></router-view>
        </main>
    </div>
</template>
