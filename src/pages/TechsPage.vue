<script setup lang="ts">
import fundamentals from '@/assets/img/computer-fundamentals-transparent.svg'
import css from '@/assets/img/css-transparent.svg'
import html from '@/assets/img/html-transparent.svg'
import javascript from '@/assets/img/javascript-transparent.svg'

const technologies = [
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
  <div class="flex w-full flex-col items-center gap-10">
    <h1 class="mb-10 text-center text-4xl tracking-tighter">
      <span class="text-green-500">T</span>echnologies
    </h1>

    <section
      v-for="(technology, index) in technologies"
      :key="technology.title"
      class="flex flex-col gap-5 rounded-2xl p-5 shadow-md sm:items-center sm:justify-center"
      :class="index % 2 === 1 ? 'sm:flex-row-reverse' : 'sm:flex-row'"
    >
      <div class="max-w-150">
        <h2
          class="mb-2 border-l-4 border-green-500 pl-2 text-xl font-bold tracking-tighter uppercase"
        >
          {{ technology.title }}
        </h2>
        <p>{{ technology.description }}</p>
      </div>
      <img :src="technology.image" alt="" loading="lazy" class="max-h-100 sm:max-h-80" />
    </section>
  </div>
</template>
