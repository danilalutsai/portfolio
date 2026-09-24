<script setup lang="ts">
import mailLogo from '@/assets/img/mail-logo.png';
import githubLogo from '@/assets/img/github-logo.png';
import linkedInLogo from '@/assets/img/linkedin-logo.png';
import telegramLogo from '@/assets/img/telegram-logo.png';

interface SocialMediaItem {
  name: string;
  url: string;
  alt: string;
  image: string;
}

const SocialMedia: SocialMediaItem[] = [
  { name: 'mail', url: '/contact', alt: 'Mail', image: mailLogo },
  { name: 'github', url: 'https://github.com/danilalutsai', alt: 'Github', image: githubLogo },
  { name: 'linkedIn', url: 'https://www.linkedin.com/in/danila-lutsai-4a1b8b174/', alt: 'LinkedIn', image: linkedInLogo},
  { name: 'telegram', url: 'https://t.me/danilalutsai', alt: 'Telegram', image: telegramLogo },
];
</script>

<template>
  <section class="flex z-100 justify-center min-h-full w-full bg-[url(./../assets/img/bg-waves-deep.svg)]
    bg-cover bg-center bg-no-repeat shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
    <div class="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10 sm:py-20">
      <div class="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
        <img src="./../assets/img/dl-logo-bold-white.svg" alt="" class="w-36 shrink-0 sm:w-44">
        <h1 class="m-0 text-5xl leading-tight text-white text-center font-semibold sm:text-6xl">
          <span class="text-green-500">b</span>uild<br>
          <span class="text-green-500">br</span>eak<br>
          <span class="text-green-500">reb</span>uild
        </h1>
      </div>
      <h2 class="mt-5 mb-3 text-lg text-center text-gray-100 justify-center mx-auto max-w-100 leading-8 ">
        Self-taught front-end developer based in Tallinn. I learned by building, breaking and
        rebuilding — and I'm still doing exactly that.</h2>
      <div class="flex justify-center gap-3 pt-5">
        <button class="min-w-5 border-4 border-gray-600 px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-gray-600 text-lg
          hover:-translate-y-0.5 transition bg-green-500 hover:bg-green-500 hover:border-gray-600
          hover:text-gray-600 font-semibold cursor-pointer shadow-xl">
          About
        </button>
        <button
          class="group inline-flex min-w-5 border-4 border-green-500 px-4 py-2 sm:px-6 sm:py-3 rounded-lg
          bg-green-500 text-gray-600 text-lg font-semibold shadow-xl hover:-translate-y-0.5 transition
          items-center cursor-pointer"
        >Get in touch
          <span class="opacity-0 inline-flex ml-1 h-1 w-4 bg-gray-600 transition-transform duration-300
            group-hover:translate-x-2 rounded origin-right scale-x-0 group-hover:opacity-100
            group-hover:scale-x-100"/>
          <span class="inline-flex -ml-3 -mt-2 rotate-45 h-1 w-4 bg-gray-600 transition-transform
            duration-300 group-hover:translate-x-2 rounded"/>
          <span class="inline-flex -ml-4 mt-2 -rotate-45 h-1 w-4 bg-gray-600 transition-transform
            duration-300 group-hover:translate-x-2 rounded"/>
      </button>
      </div>
    </div>
  </section>

  <section class="flex justify-center mx-auto p-4 sm:p-10 bg-gray-200">
    <div class="flex w-full max-w-4xl flex-col gap-8 p-6 sm:p-10 border border-gray-300 shadow-xl rounded-xl
      md:flex-row md:justify-between bg-white translate-y-2 transition-transform duration-300">
      <div class="flex-1">
        <h1 class="border-b border-gray-300 p-3 mx-auto text-center uppercase font-medium
          text-2xl sm:text-3xl text-gray-800">Danila Lutsai</h1>
        <p class="p-5 text-gray-800">
          I’m a self-taught web developer from Tallinn, Estonia, with a growing passion for turning ideas into
          useful, thoughtful web experiences. I began my journey into programming at the start of 2026, driven
          by curiosity about how the websites and applications I use every day are made.
        </p>
        <ul class="flex flex-wrap items-center gap-3 ml-5">
          <li v-for="socialMediaUnit in SocialMedia" :key="socialMediaUnit.url" class="inline-flex">
            <a :href="socialMediaUnit.url" target="_blank" class="flex gap-3">
              <img :src="socialMediaUnit.image" :alt="socialMediaUnit.alt" width="40" height="40"
                class="flex gap-3 opacity-50 hover:opacity-100 hover:-translate-y-1 transition duration-200 cursor-pointer">
            </a>
          </li>
        </ul>
      </div>
      <img src="./../assets/img/avatar.jpg" alt="Danila Lutsai" class="mx-auto h-48 w-48 shrink-0 rounded-full
        object-cover md:mx-0">
    </div>
  </section>
  <section class="flex justify-center mx-auto p-4 sm:p-10 bg-gray-200">
    <div class="flex w-full max-w-4xl flex-col gap-8 p-6 sm:p-10 border border-gray-300 shadow-xl rounded-xl
      md:flex-row md:justify-between bg-white translate-y-2 transition-transform duration-300 justify-between">
      <img src="./../assets/img/avatar-01.png" alt="Danila Lutsai" class="mx-auto h-68 w-68 shrink-0 rounded-xl
        object-cover md:mx-0">
      <div class="flex-1 max-w-50">
        <h1 class="border-b border-gray-300 p-3 mx-auto text-center uppercase font-medium
          text-2xl sm:text-3xl text-gray-800">Danila Lutsai</h1>
        <p class="p-5 text-gray-800">
          I’m a self-taught web developer from Tallinn, Estonia, with a growing passion for turning ideas into
          useful, thoughtful web experiences. I began my journey into programming at the start of 2026, driven
          by curiosity about how the websites and applications I use every day are made.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
