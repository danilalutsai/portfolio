<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';
import logo from '@/assets/img/dl-logo-bold-mirrored.svg';

interface NavItem {
  readonly label: string;
  readonly to: string;
}

const links: NavItem[] = [
  { label: 'Main', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Techs', to: '/techs' },
  { label: 'Contact', to: '/contact' },
];

const isOpen = ref(false);
const route = useRoute();

// Close the drawer whenever navigation completes, otherwise it stays open over
// the new page on mobile.
watch(() => route.fullPath, () => {
  isOpen.value = false;
});
</script>

<template>
  <div class="h-2 bg-linear-to-r from-[#75ff9f] to-[#69a8fa]"></div>
  <div class="p-5 border-b border-gray-200">
      <header class="mx-auto flex max-w-5xl items-center justify-between">

      <!-- Brand -->
      <RouterLink
        to="/"
        class="font-normal"
        active-class="font-normal text-black"
      >
        <img :src="logo" alt="" width="30px" height="30px">
      </RouterLink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:block">
        <ul class="flex items-center gap-6">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="group relative no-underline text-black hover:opacity-70"
            >{{ link.label }}</RouterLink>
          </li>
        </ul>
      </nav>

      <!-- Hamburger -->
      <button
        type="button"
        @click="isOpen = !isOpen"
        class="relative z-50 h-10 w-10 flex flex-col justify-center gap-1.5 items-center md:hidden"
      >
        <span
          class="block h-0.5 w-6 bg-black transition-transform duration-300"
          :class="isOpen ? 'translate-y-2 rotate-45' : ''"
        />
        <span
          class="block h-0.5 w-6 bg-black transition-opacity duration-300"
          :class="isOpen ? 'opacity-0' : ''"
        />
        <span
          class="block h-0.5 w-6 bg-black transition-transform duration-300"
          :class="isOpen ? '-translate-y-2 -rotate-45' : ''"
        />
      </button>
    </header>

    <Transition
      enter-active-class="transition-[max-height,opacity] duration-300 ease-out"
      leave-active-class="transition-[max-height,opacity] duration-200 ease-in"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-96 opacity-100"
      leave-from-class="max-h-96 opacity-100"
      leave-to-class="max-h-0 opacity-0"
    >
      <nav
          v-show="isOpen"
          id="mobile-nav"
          class="overflow-hidden md:hidden"
          aria-label="Mobile"
        >
        <ul class="flex flex-col py-2">
          <li v-for="link in links" :key="link.to">
            <RouterLink
                :to="link.to"
                class="block border-b border-black/10 py-1 text-black no-underline opacity-70 transition-opacity last:border-0 hover:opacity-100"
              >{{ link.label }}</RouterLink>
          </li>
        </ul>
      </nav>
    </Transition>
  </div>
</template>

<style scoped>
</style>
