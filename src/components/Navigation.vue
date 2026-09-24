<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';
import logo from '@/assets/img/dl-logo-bolder.svg';
import githubLogo from '@/assets/img/github-logo.png';
import telegramLogo from '@/assets/img/telegram-logo.png';

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

interface SocialMediaNavItem {
  name: string;
  url: string;
  alt: string;
  image: string;
}

const SocialMediaNav: SocialMediaNavItem[] = [
  { name: 'github', url: 'https://github.com/danilalutsai', alt: 'Github', image: githubLogo },
  { name: 'telegram', url: 'https://t.me/danilalutsai', alt: 'Telegram', image: telegramLogo },
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
      <nav class="hidden md:inline-flex">
        <ul class="flex items-center gap-4">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="group relative no-underline text-black hover:opacity-100 opacity-50 transition hover:-translate-y-1 duration-300">
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
        <ul class="flex items-center gap-3 ml-5">
          <li v-for="socialMediaUnit in SocialMediaNav" :key="socialMediaUnit.url" class="inline-flex">
            <a :href="socialMediaUnit.url" target="_blank" class="flex gap-3">
              <img :src="socialMediaUnit.image" :alt="socialMediaUnit.alt" width="25" height="25"
                class="flex gap-3 opacity-50 hover:opacity-100 hover:-translate-y-0.5 transition duration-300 cursor-pointer">
            </a>
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
