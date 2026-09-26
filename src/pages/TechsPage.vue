<script setup lang="ts">
import fundamentals from '@/assets/img/computer-fundamentals-transparent.svg'
import html from '@/assets/img/html-transparent.svg'
import css from '@/assets/img/css-transparent.svg'
import javascript from '@/assets/img/javascript-transparent.svg'

</script>

<template>

  <div>
    <div class="flex w-full flex-col items-center gap-10">
      <p class="mb-10 flex items-center justify-center text-4xl leading-10 tracking-[-0.05em]"><span class="text-green-500">T</span>echnologies</p>

      <div class="flex flex-col gap-5 rounded-2xl p-5 shadow-md sm:flex-row sm:items-center sm:justify-center">
        <div class="max-w-[37.5rem]">
          <p class="mb-2 border-l-4 border-green-500 pl-2 text-xl font-bold tracking-[-0.05em] uppercase">Fundamentals</p>
          <p>I don't claim to know everything, and I don't think anyone in this field does. What I do have is a habit of learning things properly, from the fundamentals up. When a new tool appears, I can usually see what problem it solves and where it fits. Frameworks change every few years. The basics stay the same.</p>
        </div>
        <img :src="fundamentals" alt="Fundamentals" class="max-h-[25rem] sm:max-h-80">
      </div>


      <div class="flex flex-col gap-5 rounded-2xl p-5 shadow-md sm:flex-row sm:items-center sm:justify-center">
        <img :src="html" alt="HTML" class="max-h-[25rem] sm:max-h-80">
        <div class="max-w-[37.5rem]">
          <p class="mb-2 border-l-4 border-green-500 pl-2 text-xl font-bold tracking-[-0.05em] uppercase">HTML</p>
          <p>HTML is where I started, and it's still the layer I care about getting right. I write semantic, accessible markup — proper headings, landmarks, labels and alt text — rather than a wall of divs. Structure comes first, styling after. Done properly, the page already works before a single line of CSS or JavaScript runs.</p>
        </div>
      </div>

      <div class="flex flex-col gap-5 rounded-2xl p-5 shadow-md sm:flex-row sm:items-center sm:justify-center">
        <div class="max-w-[37.5rem]">
          <p class="mb-2 border-l-4 border-green-500 pl-2 text-xl font-bold tracking-[-0.05em] uppercase">CSS</p>
          <p>I build layouts with Flexbox and Grid, and I design mobile-first — the small screen decides the structure, wider ones get more room. Custom properties keep colours and spacing consistent instead of scattered. I'd rather solve something with modern CSS than pull in a dependency for it.</p>
        </div>
        <img :src="css" alt="CSS" class="max-h-[25rem] sm:max-h-80">
      </div>

      <div class="flex flex-col gap-5 rounded-2xl p-5 shadow-md sm:flex-row sm:items-center sm:justify-center">
        <img :src="javascript" alt="Javascript" class="max-h-[25rem] sm:max-h-80">
        <div class="max-w-[37.5rem]">
          <p class="mb-2 border-l-4 border-green-500 pl-2 text-xl font-bold tracking-[-0.05em] uppercase">JavaScript</p>
          <p>JavaScript is the language I work in daily. I'm comfortable with modern syntax, async code and promises, and the DOM underneath the frameworks. Knowing how the event loop and scope actually behave is what makes debugging possible when something breaks in a way the framework doesn't explain.</p>
        </div>
      </div>

    </div>
  </div>
</template>
