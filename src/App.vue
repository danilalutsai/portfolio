<script setup lang="ts">
import { RouterView } from 'vue-router'

import Footer from './components/Footer.vue'
import Navigation from './components/Navigation.vue'
</script>

<template>
  <Navigation />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style>
:root {
  --font-sans: 'Blueface-medium', 'Blueface', 'Arimo', 'Poppins', sans-serif;
  --font-nerd: 'Nerd Font', monospace;
  --font-pixel: 'PixelBasel', monospace;
  --color-green-500: #2bd960;
  --color-gray-50: oklch(98.5% 0.002 247.839);
  --color-gray-100: oklch(96.7% 0.003 264.542);
  --color-gray-200: oklch(92.8% 0.006 264.531);
  --color-gray-300: oklch(87.2% 0.01 258.338);
  --color-gray-400: oklch(70.7% 0.022 261.325);
  --color-gray-500: oklch(55.1% 0.027 264.364);
  --color-gray-600: oklch(44.6% 0.03 256.802);
  --color-gray-800: oklch(27.8% 0.033 256.848);
  --color-amber-100: oklch(96.2% 0.059 95.617);
  --color-orange-500: #fab387;
  --shadow-card: 0 20px 25px -5px rgb(0 0 0 / 10%), 0 8px 10px -6px rgb(0 0 0 / 10%);
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
}

@font-face {
  font-family: 'Nerd Font';
  src: url('./assets/fonts/3270NerdFont-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'PixelBasel';
  src: url('./assets/fonts/Pixelbasel-zr5Ll.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Blueface';
  src: url('./assets/fonts/blinkmacsystemfont-regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Blueface-semibold';
  src: url('./assets/fonts/blinkmacsystemfont-medium.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Shared browser defaults; component layouts live in their scoped styles. */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
}

html {
  font-family: var(--font-sans);
  line-height: 1.5;
  tab-size: 4;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

a {
  color: inherit;
  text-decoration: inherit;
}

ul,
ol {
  list-style: none;
}

img,
svg,
video {
  display: block;
  vertical-align: middle;
}

img,
video {
  max-width: 100%;
  height: auto;
}

button,
input,
select,
textarea {
  font: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
}

button,
input:where([type='button'], [type='reset'], [type='submit']) {
  appearance: button;
}

::placeholder {
  color: color-mix(in oklab, currentColor 50%, transparent);
  opacity: 1;
}

textarea {
  resize: vertical;
}

[hidden]:where(:not([hidden='until-found'])) {
  display: none !important;
}
</style>
