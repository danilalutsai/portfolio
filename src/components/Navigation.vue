<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import logo from '@/assets/img/dl-logo-bolder.svg';
import githubLogo from '@/assets/img/github-logo.png';
import telegramLogo from '@/assets/img/telegram-logo.png';
import { SocialMedia } from '@/data/socialMedia';

const links = [
  { label: 'Main', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Techs', to: '/techs' },
  { label: 'Contact', to: '/contact' },
];

const socialMediaNav = [
  { url: 'https://github.com/danilalutsai', alt: 'Github', image: githubLogo },
  { url: 'https://t.me/danilalutsai', alt: 'Telegram', image: telegramLogo },
];

const isOpen = ref(false);
const route = useRoute();

watch(() => route.fullPath, () => {
  isOpen.value = false;
});
</script>

<template>
  <div class="h-2 bg-linear-to-r from-[#75ff9f] to-[#69a8fa]"></div>
  <div class="border-b border-gray-200 px-5 py-5">
    <header class="mx-auto flex max-w-5xl items-center justify-between">
      <RouterLink to="/" aria-label="Home" class="font-normal text-black">
        <img :src="logo" alt="" width="30" height="30" />
      </RouterLink>

      <nav class="hidden items-center md:inline-flex" aria-label="Main">
        <ul class="flex items-center gap-4">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="relative inline-block transition duration-300 hover:-translate-y-1 hover:opacity-100"
              :class="route.path === link.to ? 'font-bold text-green-500 opacity-100' : 'text-black opacity-50'"
            >{{ link.label }}</RouterLink>
          </li>
        </ul>
        <ul class="ml-5 flex items-center gap-3">
          <li v-for="media in socialMediaNav" :key="media.url" class="inline-flex">
            <a :href="media.url" :aria-label="media.alt" target="_blank" rel="noopener noreferrer" class="inline-flex">
              <img :src="media.image" :alt="media.alt" width="25" height="25" class="h-[25px] w-[25px] cursor-pointer opacity-50 transition duration-300 hover:-translate-y-0.5 hover:opacity-100" />
            </a>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        class="relative z-50 flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 md:hidden"
        :aria-expanded="isOpen"
        aria-controls="mobile-nav"
        aria-label="Toggle navigation"
        @click="isOpen = !isOpen"
      >
        <span class="block h-0.5 w-6 bg-black transition-transform duration-300" :class="{ 'translate-y-2 rotate-45': isOpen }" />
        <span class="block h-0.5 w-6 bg-black transition-opacity duration-300" :class="{ 'opacity-0': isOpen }" />
        <span class="block h-0.5 w-6 bg-black transition-transform duration-300" :class="{ '-translate-y-2 -rotate-45': isOpen }" />
      </button>
    </header>

    <Transition
      enter-active-class="transition-[max-height,opacity] duration-300 ease-out"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-96 opacity-100"
      leave-active-class="transition-[max-height,opacity] duration-200 ease-in"
      leave-from-class="max-h-96 opacity-100"
      leave-to-class="max-h-0 opacity-0"
    >
      <nav v-show="isOpen" id="mobile-nav" class="overflow-hidden md:hidden" aria-label="Mobile">
        <ul class="flex flex-col py-2">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="block py-1 transition-opacity duration-150 hover:opacity-100"
              :class="route.path === link.to ? 'text-green-500 opacity-100' : 'text-black opacity-70'"
            >{{ link.label }}</RouterLink>
          </li>
        </ul>
        <ul class="inline-flex gap-2 py-4">
          <li v-for="media in SocialMedia" :key="media.url">
            <a :href="media.url" :aria-label="media.alt" :target="media.url.startsWith('http') ? '_blank' : undefined" :rel="media.url.startsWith('http') ? 'noopener noreferrer' : undefined">
              <img :src="media.image" :alt="media.alt" class="h-[25px] w-[25px] opacity-70 transition-opacity hover:opacity-100" />
            </a>
          </li>
        </ul>
      </nav>
    </Transition>
  </div>
</template>
