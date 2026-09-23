<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Navigation/>
  <main>
    <RouterView />
  </main>
  <Footer/>
</template>

<style scoped>
</style>
