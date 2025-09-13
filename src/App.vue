<script setup>
import {RouterView} from 'vue-router'
import NavbarLayout from "@/components/layouts/NavbarLayout.vue";
</script>

<template>
    <div id="app">
        <NavbarLayout/>
        
        <main class="main-content container py-4">
            <RouterView v-slot="{ Component }">
                <component :is="Component"/>
            </RouterView>
        </main>
    </div>
</template>

<style>
.main-content {
    padding: 1rem;
}
</style>

