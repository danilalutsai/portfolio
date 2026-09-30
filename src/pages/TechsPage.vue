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
  <div class="technologies-page">
    <h1 class="page-heading"><span class="heading-accent">T</span>echnologies</h1>

    <section
      v-for="(technology, index) in technologies"
      :key="technology.title"
      class="technology-card"
      :class="{ 'technology-card-reversed': index % 2 === 1 }"
    >
      <div class="technology-copy">
        <h2 class="technology-title">
          {{ technology.title }}
        </h2>
        <p>{{ technology.description }}</p>
      </div>
      <img :src="technology.image" alt="" loading="lazy" class="technology-image" />
    </section>
  </div>
</template>

<style scoped>
.technologies-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  width: 100%;
}

.page-heading {
  margin-bottom: 2.5rem;
  font-size: 2.25rem;
  line-height: 2.5rem;
  letter-spacing: -0.05em;
  text-align: center;
}

.heading-accent {
  color: var(--color-green-500);
}

.technology-card {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.25rem;
  border-radius: 1rem;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 10%),
    0 2px 4px -2px rgb(0 0 0 / 10%);
}

.technology-copy {
  max-width: 37.5rem;
}

.technology-title {
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
  border-left: 4px solid var(--color-green-500);
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.75rem;
  letter-spacing: -0.05em;
  text-transform: uppercase;
}

.technology-image {
  max-height: 25rem;
}

@media (min-width: 40rem) {
  .technology-card {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .technology-card-reversed {
    flex-direction: row-reverse;
  }

  .technology-image {
    max-height: 20rem;
  }
}
</style>
