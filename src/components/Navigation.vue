<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { SocialMedia } from '@/data/socialMedia'
import logo from '@/assets/img/dl-logo-bolder.svg'
import githubLogo from '@/assets/img/github-logo.png'
import telegramLogo from '@/assets/img/telegram-logo.png'

const links = [
  { label: 'Main', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Techs', to: '/techs' },
  { label: 'Contact', to: '/contact' },
]

const socialMediaNav = [
  { url: 'https://github.com/danilalutsai', alt: 'Github', image: githubLogo },
  { url: 'https://t.me/danilalutsai', alt: 'Telegram', image: telegramLogo },
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
  <div class="navigation-accent"></div>
  <div class="navigation-shell">
    <header class="navigation-header">
      <RouterLink to="/" aria-label="Home" class="brand-link">
        <img :src="logo" alt="" width="30" height="30" />
      </RouterLink>

      <nav class="desktop-nav" aria-label="Main">
        <ul class="navigation-links">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="navigation-link"
              :class="{ 'is-active': route.path === link.to }"
              >{{ link.label }}</RouterLink
            >
          </li>
        </ul>
        <ul class="navigation-socials">
          <li v-for="media in socialMediaNav" :key="media.url" class="social-link">
            <a
              :href="media.url"
              :aria-label="media.alt"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
            >
              <img :src="media.image" :alt="media.alt" width="25" height="25" class="social-icon" />
            </a>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        class="menu-toggle"
        :class="{ 'is-open': isOpen }"
        :aria-expanded="isOpen"
        aria-controls="mobile-nav"
        aria-label="Toggle navigation"
        @click="isOpen = !isOpen"
      >
        <span class="menu-line" />
        <span class="menu-line" />
        <span class="menu-line" />
      </button>
    </header>

    <Transition name="mobile-menu">
      <nav v-show="isOpen" id="mobile-nav" class="mobile-nav" aria-label="Mobile">
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
        <ul class="mobile-socials">
          <li v-for="media in SocialMedia" :key="media.url">
            <a
              :href="media.url"
              :aria-label="media.alt"
              :target="media.url.startsWith('http') ? '_blank' : undefined"
              :rel="media.url.startsWith('http') ? 'noopener noreferrer' : undefined"
            >
              <img :src="media.image" :alt="media.alt" class="mobile-social-icon" />
            </a>
          </li>
        </ul>
      </nav>
    </Transition>
  </div>
</template>

<style scoped>
.navigation-accent {
  height: 0.5rem;
  background: linear-gradient(to right in oklab, #75ff9f, #69a8fa);
}

.navigation-shell {
  padding: 1.25rem;
  border-bottom: 1px solid var(--color-gray-200);
}

.navigation-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 64rem;
  margin-inline: auto;
}

.brand-link {
  color: black;
  font-weight: 400;
}

.desktop-nav {
  display: none;
  align-items: center;
}

.navigation-links,
.navigation-socials {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.navigation-link {
  position: relative;
  display: inline-block;
  color: black;
  opacity: 0.5;
  transition:
    translate 300ms var(--ease-standard),
    opacity 300ms var(--ease-standard),
    color 300ms var(--ease-standard);
}

.navigation-link.is-active {
  color: var(--color-orange-500);
  font-weight: 700;
  opacity: 1;
}

.navigation-socials {
  gap: 0.75rem;
  margin-left: 1.25rem;
}

.social-link {
  display: inline-flex;
}

.social-icon,
.mobile-social-icon {
  width: 25px;
  height: 25px;
  transition:
    translate 300ms var(--ease-standard),
    opacity 300ms var(--ease-standard);
}

.social-icon {
  cursor: pointer;
  opacity: 0.5;
}

.mobile-links {
  display: flex;
  flex-direction: column;
  padding-block: 0.5rem;
}

.mobile-link {
  display: block;
  padding-block: 0.25rem;
  color: black;
  opacity: 0.7;
  transition: opacity 150ms var(--ease-standard);
}

.mobile-link.is-active {
  color: var(--color-green-500);
  opacity: 1;
}

.mobile-socials {
  display: inline-flex;
  gap: 0.5rem;
  padding-block: 1rem;
  opacity: 0.6;
}

.mobile-social-icon {
  opacity: 0.6;
}

@media (hover: hover) {
  .navigation-link:hover,
  .social-icon:hover,
  .mobile-social-icon:hover {
    translate: 0 -0.125rem;
    opacity: 1;
  }

  .mobile-link:hover {
    opacity: 1;
  }
}

@media (min-width: 48rem) {
  .desktop-nav {
    display: inline-flex;
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
