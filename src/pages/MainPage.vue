<script setup lang="ts">
import { RouterLink } from 'vue-router';
import heroPattern from '@/assets/img/hero-tech-pattern.png';
import warmPattern from '@/assets/img/bg-tech-warm.svg';
import { SocialMedia } from '@/data/socialMedia';
</script>

<template>
  <section class="relative z-10 flex min-h-full w-full justify-center overflow-hidden">
    <img :src="heroPattern" alt="" class="absolute inset-0 h-full w-full object-cover" />
    <div class="relative mx-auto w-full max-w-3xl px-6 py-16 sm:px-10 sm:py-20">
      <div class="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
        <img src="./../assets/img/dl-logo-bold-white.svg" alt="" class="w-36 shrink-0 sm:w-44" />
        <h1 class="text-center text-5xl leading-tight font-semibold text-white sm:text-6xl">
          <span class="text-green-500">b</span>uild<br />
          <span class="text-green-500">br</span>eak<br />
          <span class="text-green-500">reb</span>uild
        </h1>
      </div>
      <h2 class="mx-auto mt-5 mb-3 max-w-[25rem] text-center text-lg leading-8 text-gray-100">
        Self-taught front-end developer based in Tallinn. I learned by building, breaking and
        rebuilding — and I'm still doing exactly that.
      </h2>
      <div class="flex justify-center gap-3 pt-5">
        <RouterLink to="/about" class="inline-flex items-center rounded-lg border-4 border-gray-600 bg-green-500 px-4 py-2 text-lg leading-7 font-semibold text-gray-600 shadow-xl transition-transform duration-150 hover:-translate-y-0.5 sm:px-6 sm:py-3">
          About
        </RouterLink>
        <RouterLink to="/contact" class="group inline-flex items-center rounded-lg border-4 border-green-500 bg-green-500 px-4 py-2 text-lg leading-7 font-semibold text-gray-600 shadow-xl transition-transform duration-150 hover:-translate-y-0.5 sm:px-6 sm:py-3">
          Get in touch <span aria-hidden="true" class="ml-1 transition-transform duration-300 group-hover:translate-x-2">→</span>
        </RouterLink>
      </div>
    </div>
  </section>

  <section class="mx-auto flex justify-center p-4 sm:p-10">
    <div class="flex w-full max-w-[69rem] flex-col gap-8 bg-transparent shadow-xl transition-transform duration-300 sm:p-10 md:flex-row md:justify-between">
      <div class="min-w-0 flex-1">
        <h2 class="border-b border-gray-300 p-5 text-left text-2xl leading-8 font-medium text-gray-800 uppercase sm:text-3xl sm:leading-9">Danila Lutsai</h2>
        <p class="p-5 text-gray-800">
          I’m a self-taught web developer from Tallinn, Estonia, with a growing passion for turning ideas into
          useful, thoughtful web experiences. I began my journey into programming at the start of 2026, driven
          by curiosity about how the websites and applications I use every day are made.
        </p>
        <ul class="flex flex-wrap items-center justify-center gap-3 md:ml-5 md:justify-start">
          <li v-for="media in SocialMedia" :key="media.url" class="inline-flex">
            <a :href="media.url" :aria-label="media.alt" class="inline-flex" :target="media.url.startsWith('http') ? '_blank' : undefined" :rel="media.url.startsWith('http') ? 'noopener noreferrer' : undefined">
              <img :src="media.image" :alt="media.alt" width="40" height="40" class="h-10 w-10 cursor-pointer opacity-50 transition duration-200 hover:-translate-y-1 hover:opacity-100" />
            </a>
          </li>
        </ul>
      </div>
      <img src="./../assets/img/avatar.jpg" alt="Danila Lutsai" class="mx-auto aspect-square w-full max-w-60 shrink-0 self-center rounded-full object-cover md:mx-0" />
    </div>
  </section>

  <section class="relative mx-auto flex justify-center overflow-hidden p-4 sm:p-10">
    <img :src="warmPattern" alt="" class="absolute inset-0 h-full w-full object-cover" />
    <div class="relative flex w-full max-w-[69rem] flex-col gap-8 bg-transparent shadow-xl transition-transform duration-300 sm:p-10 md:flex-row md:justify-between">
      <img src="./../assets/img/avatar-01.png" alt="Danila Lutsai" class="order-2 mx-auto aspect-square w-full max-w-80 shrink-0 self-center rounded-xl object-cover md:order-1 md:mx-0" />
      <div class="order-1 min-w-0 flex-1 md:order-2">
        <h2 class="border-b border-gray-300 p-5 text-left text-2xl leading-8 font-medium text-gray-50 uppercase sm:text-3xl sm:leading-9">Passion</h2>
        <p class="p-5 text-gray-100">
          What I enjoy most about development is that it combines creativity with logic. There is always another
          detail to improve: making an interface clearer, refining a layout for smaller screens, improving
          performance, or finding a cleaner solution to a technical challenge.<br /><br />
          I like the balance between careful problem-solving and the visual side of creating an experience that
          people genuinely enjoy using.
        </p>
      </div>
    </div>
  </section>
</template>
