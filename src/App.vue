<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Navigation from './components/Navigation.vue';
</script>

<template>
  <Navigation/>
  <main class="mx-auto max-w-5xl px-4 py-8 md:px-6">
    <RouterView />
  </main>
</template>

<style scoped>
</style>
