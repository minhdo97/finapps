<script setup>
import LoaderApp from "./common/Loader.vue"
import HeaderApp from "./common/Header.vue"
import FooterApp from "./common/Footer.vue"
import SidebarApp from "./common/Sidebar.vue"
</script>

<template>
    <LoaderApp></LoaderApp>
    <SidebarApp></SidebarApp>
    <main class="h-100">
        <HeaderApp></HeaderApp>
        <div class="main-container container">
            <router-view></router-view>
        </div>
    </main>
    <FooterApp></FooterApp>
</template>
