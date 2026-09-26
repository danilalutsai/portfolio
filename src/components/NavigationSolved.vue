<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';

const links = [
  { label: '01 Main', to: '/' },
  { label: '02 About', to: '/about' },
  { label: '03 Techs', to: '/techs' },
  { label: '04 Contact', to: '/contact' },
];

const isOpen = ref(false);
const route = useRoute();

watch(() => route.fullPath, () => {
  isOpen.value = false;
});
</script>

<template>
  <div class="w-full border-b-2 border-black bg-amber-100">
    <header class="mx-auto flex max-w-5xl items-center justify-between px-10 py-3 md:px-6">
      <RouterLink to="/" class="shrink-0 font-bold tracking-tight text-black">
        00 DANILA LUTSAI
        <span class="ml-1 inline-block animate-pulse">$</span>
      </RouterLink>

      <nav class="hidden md:block" aria-label="Main">
        <ul class="flex items-center gap-6">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="group relative transition-opacity duration-150 hover:opacity-100"
              :class="route.path === link.to ? 'font-bold text-green-500 opacity-100' : 'text-black opacity-60'"
            >
              {{ link.label }}
              <span class="absolute -bottom-1 left-0 h-px w-0 bg-black transition-[width] duration-200 group-hover:w-full" />
            </RouterLink>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        class="relative z-50 flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 md:hidden"
        :aria-expanded="isOpen"
        aria-controls="solved-mobile-nav"
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
      <nav v-show="isOpen" id="solved-mobile-nav" class="overflow-hidden border-t border-black/20 md:hidden" aria-label="Mobile">
        <ul class="flex flex-col px-4 py-2">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="block border-b border-black/10 py-3 transition-opacity duration-150 hover:opacity-100"
              :class="route.path === link.to ? 'opacity-100' : 'opacity-70'"
            >{{ link.label }}</RouterLink>
          </li>
        </ul>
      </nav>
    </Transition>
  </div>

  <main class="mx-auto max-w-5xl px-4 py-8 md:px-6">
    <RouterView />
  </main>
</template>
