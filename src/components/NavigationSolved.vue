<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const links = [
  { label: '01 Main', to: '/' },
  { label: '02 About', to: '/about' },
  { label: '03 Techs', to: '/techs' },
  { label: '04 Contact', to: '/contact' },
]

const isOpen = ref(false)
const route = useRoute()

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false
  },
)
</script>

<template>
  <div class="navigation-shell">
    <header class="navigation-header">
      <RouterLink to="/" class="brand-link">
        00 DANILA LUTSAI
        <span class="brand-cursor">$</span>
      </RouterLink>

      <nav class="desktop-nav" aria-label="Main">
        <ul class="navigation-links">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="navigation-link"
              :class="{ 'is-active': route.path === link.to }"
            >
              {{ link.label }}
              <span class="link-underline" />
            </RouterLink>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        class="menu-toggle"
        :class="{ 'is-open': isOpen }"
        :aria-expanded="isOpen"
        aria-controls="solved-mobile-nav"
        aria-label="Toggle navigation"
        @click="isOpen = !isOpen"
      >
        <span class="menu-line" />
        <span class="menu-line" />
        <span class="menu-line" />
      </button>
    </header>

    <Transition name="mobile-menu">
      <nav v-show="isOpen" id="solved-mobile-nav" class="mobile-nav" aria-label="Mobile">
        <ul class="mobile-links">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="mobile-link"
              :class="{ 'is-active': route.path === link.to }"
              >{{ link.label }}</RouterLink
            >
          </li>
        </ul>
      </nav>
    </Transition>
  </div>

  <main class="page-content">
    <RouterView />
  </main>
</template>

<style scoped>
.navigation-shell {
  width: 100%;
  border-bottom: 2px solid black;
  background-color: var(--color-amber-100);
}

.navigation-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 64rem;
  margin-inline: auto;
  padding: 0.75rem 2.5rem;
}

.brand-link {
  flex-shrink: 0;
  color: black;
  font-weight: 700;
  letter-spacing: -0.025em;
}

.brand-cursor {
  display: inline-block;
  margin-left: 0.25rem;
  animation: cursor-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes cursor-pulse {
  50% {
    opacity: 0.5;
  }
}

.desktop-nav {
  display: none;
}

.navigation-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.navigation-link {
  position: relative;
  color: black;
  opacity: 0.6;
  transition: opacity 150ms var(--ease-standard);
}

.navigation-link.is-active {
  color: var(--color-green-500);
  font-weight: 700;
  opacity: 1;
}

.link-underline {
  position: absolute;
  bottom: -0.25rem;
  left: 0;
  width: 0;
  height: 1px;
  background-color: black;
  transition: width 200ms var(--ease-standard);
}

.mobile-nav {
  border-top: 1px solid rgb(0 0 0 / 20%);
}

.mobile-links {
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
}

.mobile-link {
  display: block;
  padding-block: 0.75rem;
  border-bottom: 1px solid rgb(0 0 0 / 10%);
  opacity: 0.7;
  transition: opacity 150ms var(--ease-standard);
}

.mobile-link.is-active {
  opacity: 1;
}

.page-content {
  max-width: 64rem;
  margin-inline: auto;
  padding: 2rem 1rem;
}

@media (hover: hover) {
  .navigation-link:hover,
  .mobile-link:hover {
    opacity: 1;
  }

  .navigation-link:hover .link-underline {
    width: 100%;
  }
}

@media (min-width: 48rem) {
  .navigation-header,
  .page-content {
    padding-inline: 1.5rem;
  }

  .desktop-nav {
    display: block;
  }
}

.menu-toggle {
  position: relative;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
}

.menu-line {
  display: block;
  width: 1.5rem;
  height: 0.125rem;
  background-color: black;
  transition:
    transform 300ms var(--ease-standard),
    opacity 300ms var(--ease-standard);
}

.menu-toggle.is-open .menu-line:first-child {
  transform: translateY(0.5rem) rotate(45deg);
}

.menu-toggle.is-open .menu-line:nth-child(2) {
  opacity: 0;
}

.menu-toggle.is-open .menu-line:last-child {
  transform: translateY(-0.5rem) rotate(-45deg);
}

.mobile-nav {
  overflow: hidden;
}

.mobile-menu-enter-active {
  transition:
    max-height 300ms cubic-bezier(0, 0, 0.2, 1),
    opacity 300ms cubic-bezier(0, 0, 0.2, 1);
}

.mobile-menu-leave-active {
  transition:
    max-height 200ms cubic-bezier(0.4, 0, 1, 1),
    opacity 200ms cubic-bezier(0.4, 0, 1, 1);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  max-height: 0;
  opacity: 0;
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
  max-height: 24rem;
  opacity: 1;
}

@media (min-width: 48rem) {
  .menu-toggle,
  .mobile-nav {
    display: none;
  }
}
</style>
