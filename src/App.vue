<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="justify-items-center w-full">
    <header class="bg-gray-300">
      <nav class="justify-center">
        <p class="text-black name">Danila Lutsai $&nbsp;</p>
        <RouterLink to="/">Main</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </header>
  </div>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.webName {
  font-weight: 700;
}

header {
  max-width: 1000px;
  width: 100%;
  margin-inline: auto;
}

.name {
  font-family: 'Nerd Font';
}

nav {
  font-size: 1.2rem;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid var(--color-border);
  font-family: 'Open Sans';
}

nav a {
  color: red;
  color: #1e1e1e;
  text-decoration: none;
  opacity: 0.6;
  transition: opacity 0.15s;
}

nav {
  color: #1e1e1e;
}

nav a:hover {
  opacity: 1;
}

nav a::after {
  visibility: hidden;
}

nav a:hover::after {
  visibility: visible;
}

nav a.router-link-active {
  font-weight: bold;
  color: var(--color-text);
}
</style>
