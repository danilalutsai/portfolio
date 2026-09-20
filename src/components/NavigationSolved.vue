<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';

interface NavItem {
  readonly label: string;
  readonly to: string;
}

const links: readonly NavItem[] = [
  { label: '01 Main', to: '/' },
  { label: '02 About', to: '/about' },
  { label: '03 Techs', to: '/techs' },
  { label: '04 Contact', to: '/contact' },
];

const isOpen = ref(false);
const route = useRoute();

// Close the drawer whenever navigation completes, otherwise it stays
// open over the new page on mobile.
watch(() => route.fullPath, () => {
  isOpen.value = false;
});
</script>

<template>
  <div class="w-full border-b-2 border-black bg-amber-100">
    <header class="mx-auto flex max-w-5xl items-center justify-between px-10 py-3 md:px-6">
      <!-- Brand -->
      <RouterLink
        to="/"
        class="shrink-0 font-bold tracking-tight text-black no-underline"
      >
        00 DANILA LUTSAI
        <span class="ml-1 inline-block animate-pulse">$</span>
      </RouterLink>

      <!-- Desktop nav -->
      <nav class="hidden md:block" aria-label="Main">
        <ul class="flex items-center gap-6">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="group relative text-black no-underline opacity-60 transition-opacity hover:opacity-100"
            >
              {{ link.label }}
              <span
                class="absolute -bottom-1 left-0 h-px w-0 bg-black transition-all duration-200 group-hover:w-full"
              />
            </RouterLink>
          </li>
        </ul>
      </nav>

      <!-- Hamburger -->
      <button
        type="button"
        class="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        :aria-expanded="isOpen"
        aria-controls="mobile-nav"
        aria-label="Toggle navigation"
        @click="isOpen = !isOpen"
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

    <!-- Mobile drawer -->
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
        class="overflow-hidden border-t border-black/20 md:hidden"
        aria-label="Mobile"
      >
        <ul class="flex flex-col px-4 py-2">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="block border-b border-black/10 py-3 text-black no-underline opacity-70 transition-opacity last:border-0 hover:opacity-100"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </Transition>
  </div>

  <main class="mx-auto max-w-5xl px-4 py-8 md:px-6">
    <RouterView />
  </main>
</template>

<style scoped>
</style>

