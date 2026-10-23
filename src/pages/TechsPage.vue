<script setup lang="ts">
import gsap from 'gsap'
import { onMounted } from 'vue'

import fundamentals from '@/assets/img/computer-fundamentals-transparent.svg'
import css from '@/assets/img/css-transparent.svg'
import html from '@/assets/img/html-transparent.svg'
import javascript from '@/assets/img/javascript-transparent.svg'

onMounted(() => {
  gsap.from('.techs-title', {
    opacity: 0,
    y: -100,
    duration: 0.5,
  });
});

interface Techs {
  title: string;
  image: string;
  description: string;
  col?: number; // column in grid
  row?: number; // row in grid
}

const techs: Techs[] = [
  {
    title: 'Fundamentals',
    image: fundamentals,
    description:
      "I don't claim to know everything, and I don't think anyone in this field does. What I do have is a habit of learning things properly, from the fundamentals up. When a new tool appears, I can usually see what problem it solves and where it fits. Frameworks change every few years. The basics stay the same.",
  },
  {
    title: 'HTML',
    image: html,
    description:
      "HTML is where I started, and it's still the layer I care about getting right. I write semantic, accessible markup — proper headings, landmarks, labels and alt text — rather than a wall of divs. Structure comes first, styling after. Done properly, the page already works before a single line of CSS or JavaScript runs.",
  },
  {
    title: 'CSS',
    image: css,
    description:
      "I build layouts with Flexbox and Grid, and I design mobile-first — the small screen decides the structure, wider ones get more room. Custom properties keep colours and spacing consistent instead of scattered. I'd rather solve something with modern CSS than pull in a dependency for it.",
  },
  {
    title: 'JavaScript',
    image: javascript,
    description:
      "JavaScript is the language I work in daily. I'm comfortable with modern syntax, async code and promises, and the DOM underneath the frameworks. Knowing how the event loop and scope actually behave is what makes debugging possible when something breaks in a way the framework doesn't explain.",
  },
]
</script>

<template>
  <div>
    <h1 class="techs-title py-10 text-3xto-[#a6e3a1] font-semibold text-3xl sm:text-4xl pb-10 bg-linear-180 from-[#89b4fa] to-[#a6e3a1] bg-clip-text text-transparent text-center">
      Technologies
    </h1>

  <div class="grid md:grid-cols-2 max-w-300 items-start mx-auto justify-items-center gap-10 m-10">
    <div
        v-for="(tech, index) in techs" :key="index"
        class="group flex flex-col outline-4 outline-gray-200 rounded-2xl p-5 sm:p-5 md:p-10 shadow-[0_0_12px_rgba(0,0,0,0.06),0_12px_24px_-6px_rgba(0,0,0,0.12)]
        max-w-150 hover:-translate-y-2 transition-all duration-200 hover:outline-4 hover:outline-green-500 min-h-170">
        <h2 class="mb-4 border-l-8 rounded-b-2xl rounded-t-2xl border-gray-500 group-hover:border-green-500 text-gray-600 pl-4 text-2xl sm:text-3xl font-bold tracking-tighter uppercase">
          {{ tech.title }}
        </h2>
        <p class="font-sans text-lg text-gray-500">{{ tech.description }}</p>
      <img
          :src="tech.image"
          alt=""
          loading="lazy"
          class="max-h-100 sm:max-h-80"
        />
    </div>
  </div>
  </div>
</template>
