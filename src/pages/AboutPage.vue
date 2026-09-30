<script setup lang="ts">
import wavePattern from '@/assets/img/bg-waves-deep.svg'
</script>

<template>
  <div class="about-page">
    <h1 class="page-heading">
      Early in the career.<br />
      Not early in the life.
    </h1>

    <div class="biography-grid">
      <img :src="wavePattern" alt="" class="biography-background" />

      <div class="biography-image">
        <img src="@/assets/img/avatar-01.png" alt="Danila Lutsai" class="biography-photo" />
      </div>

      <div class="biography-copy">
        <p>Hello everyone. My name is Danila Lutsai, I'm 28, and I build things for the web.</p>
        <p>
          This site is my portfolio — a small, honest place to put my work, my thinking, and a bit
          of who I am outside the code. Nothing exhaustive, nothing inflated. Just a starting point.
        </p>
        <p>
          I came to frontend development the long way around, and I think that's an advantage. Being
          twenty-eight means I've already learned how to learn — how to sit with something confusing
          until it stops being confusing, how to ask better questions, and how to tell the
          difference between knowing a thing and only recognizing it. I'm early in this career, not
          early in my life, and those are very different starting lines.
        </p>
        <p>
          Right now most of my time goes into Vue and TypeScript. I like TypeScript because it
          argues with me, and it's usually right. I like Vue because it keeps the distance between
          an idea and a working interface refreshingly short. I'm the kind of developer who would
          rather understand why something works than copy a snippet that happens to work — slower at
          first, much faster later.
        </p>
      </div>

      <div class="biography-copy">
        <p>
          What I care about in the work: interfaces that respect the person using them. Pages that
          load fast. Text you can actually read. Buttons where you expect buttons. A lot of the
          modern web has forgotten that a website is something a human being has to use, and I'd
          like to be part of the group that remembers.
        </p>
        <p>
          Away from the keyboard I'm fairly easy to describe: I like things that reward patience.
          Long-form reading, problems that don't resolve in an afternoon, the particular
          satisfaction of a system you understand all the way down. I suspect that's the same
          instinct that pulled me into programming in the first place, just wearing different
          clothes.
        </p>
        <p>
          My goals are unglamorous and specific. Get genuinely good at the fundamentals rather than
          collecting framework names. Ship real projects instead of collecting tutorials. Find a
          team that builds carefully and writes code other people can read. Keep the curiosity that
          got me here in the first place.
        </p>
        <p>If any of that resonates, take a look at my projects — or just say hello.</p>
      </div>

      <div class="biography-image">
        <img
          src="@/assets/img/mountains.png"
          alt="Mountain landscape"
          loading="lazy"
          class="biography-photo"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  width: 100%;
  max-width: 75rem;
  margin-inline: auto;
  padding-inline: 1.5rem;
}

.page-heading {
  padding-bottom: 1.5rem;
  font-size: 2.25rem;
  line-height: 1;
  letter-spacing: -0.05em;
  text-align: center;
}

.biography-grid {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: start;
  gap: 3rem;
  overflow: hidden;
  font-family: var(--font-sans);
}

.biography-background {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.biography-image,
.biography-copy {
  position: relative;
}

.biography-photo {
  display: block;
  width: 100%;
  height: auto;
  box-shadow: 0 4px 12px rgb(0 0 0 / 12%);
}

.biography-copy > :not(:last-child) {
  margin-bottom: 1rem;
}

@media (min-width: 48rem) {
  .biography-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
