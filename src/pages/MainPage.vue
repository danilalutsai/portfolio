<script setup lang="ts">
</script>

<template>
  <section class="flex z-100 justify-center min-h-full min-w-full bg-[url(./../assets/img/bg-waves-deep.svg)]
    bg-cover bg-center bg-no-repeat shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
    <div class="mx-auto max-w-3xl center p-20 sm:p-40">
      <div class="flex">
        <img src="./../assets/img/dl-logo-bold-white.svg" alt="" class="max-w-50">
        <h1 class="text-6xl text-white text-center my-5 max-w-150 mx-auto m-30 font-semibold">
          <span class="text-green-500">b</span>uild<br>
          <span class="text-green-500">br</span>eak<br>
          <span class="text-green-500">reb</span>uild
        </h1>
      </div>
      <h2 class="mt-5 mb-3 text-lg text-center text-gray-100 justify-center mx-auto max-w-100 leading-8">
        Self-taught front-end developer based in Tallinn. I learned by building, breaking and
        rebuilding — and I'm still doing exactly that.</h2>
      <div class="flex justify-center gap-3 pt-5">
        <button class="min-w-5 border-4 border-gray-600 px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-gray-600 text-lg
          hover:-translate-y-0.5 transition bg-green-500 hover:bg-green-500 hover:border-gray-600
          hover:text-gray-600 hover:font-semibold cursor-pointer shadow-xl">
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

  <section class="flex justify-center mx-auto p-10 bg-gray-200">
    <div class="flex w-full max-w-4xl flex-col gap-8 p-10 border border-gray-300 shadow-xl rounded-xl
      md:flex-row md:justify-between bg-white translate-y-2 transition-transform duration-300">
      <div class="flex-1">
        <h1 class="border-b border-gray-300 p-3 mx-auto text-center uppercase font-medium
          text-3xl text-gray-800">Danila Lutsai</h1>
        <p class="p-5 text-gray-800">
          I’m a self-taught web developer from Tallinn, Estonia, with a growing passion for turning ideas into
          useful, thoughtful web experiences. I began my journey into programming at the start of 2026, driven
          by curiosity about how the websites and applications I use every day are made.
        </p>
        <div class="p-5 flex border-t border-gray-300 left-0 gap-3 items-center">
          <img src="./../assets/img/mail-logo.webp" alt="LinkedIn logo" width="40" height="40"
            class="size-8 object-contain grayscale hover:grayscale-0 transition duration-300">
          <img src="./../assets/img/github-logo.png" alt="Github logo" width="40" height="40"
            class="opacity-50 hover:opacity-100 transition duration-300">
          <img src="./../assets/img/linkedin-logo.png" alt="LinkedIn logo" width="40" height="40"
            class="grayscale hover:grayscale-0 transition duration-300">
        </div>
      </div>
      <img src="./../assets/img/avatar.jpg" alt="Danila Lutsai" class="mx-auto h-48 w-48 shrink-0 rounded-full
        object-cover md:mx-0">
    </div>
  </section>
</template>

<style scoped>
</style>
