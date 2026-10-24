<script setup lang="ts">
import gsap from 'gsap'
import { onMounted } from 'vue'

import fundamentalsImage from '@/assets/img/TechsComputerScience.jpg';
import cssImage from '@/assets/img/TechsCSS.jpg';
import htmlImage from '@/assets/img/TechsHTML.jpg';
import javascriptImage from '@/assets/img/TechsJS.jpg';
import typescriptImage from '@/assets/img/TechsTS.jpg';
import vueImage from '@/assets/img/TechsVueJS.jpg';
import tailwindImage from '@/assets/img/TechsTailwindCSS.png';
import aiImage from '@/assets/img/TechsAI.png';

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
    image: fundamentalsImage,
    description:
      "I don't claim to know everything, and I don't think anyone in this field does. What I do have is a habit of learning things properly, from the fundamentals up. When a new tool appears, I can usually see what problem it solves and where it fits. Frameworks change every few years. The basics stay the same.",
  },
  {
    title: 'HTML',
    image: htmlImage,
    description:
      "HTML is where I started, and it's still the layer I care about getting right. I write semantic, accessible markup — proper headings, landmarks, labels and alt text — rather than a wall of divs. Structure comes first, styling after. Done properly, the page already works before a single line of CSS or JavaScript runs.",
  },
  {
    title: 'CSS',
    image: cssImage,
    description:
      "I build layouts with Flexbox and Grid, and I design mobile-first — the small screen decides the structure, wider ones get more room. Custom properties keep colours and spacing consistent instead of scattered. I'd rather solve something with modern CSS than pull in a dependency for it.",
  },
  {
    title: 'JavaScript',
    image: javascriptImage,
    description:
      "JavaScript is the language I work in daily. I'm comfortable with modern syntax, async code and promises, and the DOM underneath the frameworks. Knowing how the event loop and scope actually behave is what makes debugging possible when something breaks in a way the framework doesn't explain.",
  },
  {
    title: 'TypeScript',
    image: typescriptImage,
    description: "TypeScript is my default for anything bigger than a quick script. I keep strict mode on and lean on interfaces, union types and generics to describe what data actually looks like. To me, types are documentation the compiler checks: they catch the mistake before the browser does. Underneath it's still JavaScript, so knowing the runtime matters more than writing clever types.",
  },
  {
    title: 'VueJS',
    image: vueImage,
    description: "Vue is my framework of choice, and I work with Vue 3 and the Composition API. I like how close it stays to plain HTML, CSS and JavaScript. Single-file components keep things readable. I split interfaces into small, focused components, handle routing with Vue Router, and type props and emits with TypeScript. The framework does the heavy lifting, but I want to understand what it's doing.",
  },
  {
    title: 'TailwindCSS',
    image: tailwindImage,
    description: 'qwwerty',
  },
  {
    title: 'AI',
    image: aiImage,
    description: '',
  }
]
</script>

<template>

  <div class="mx-auto w-full max-w-300 mb-20">

    <h1 class="techs-title py-10 text-3xto-[#a6e3a1] font-semibold text-3xl sm:text-4xl pb-10 bg-linear-180 from-[#89b4fa] to-[#a6e3a1] bg-clip-text text-transparent text-center mb-10">
      Technologies
    </h1>

    <div class="techs-icons grid grid-cols-2 sm:grid-cols-4 gap-14 justify-items-center sm:max-w-200 max-w-100 mx-auto">
      <div
        class="w-30 h-30 border-2 border-gray-200 bg-cover bg-center bg-no-repeat"
        v-for="tech in techs"
        :key="tech.title"
        :style="{ backgroundImage: `url(${ tech.image })` }"
      >
        <div class="-my-7 text-gray-500 text-lg text-center">{{ tech.title }}</div>
      </div>
    </div>

  </div>
</template>
