<script setup lang="ts">

</script>

<template>
  <div class="page">
    <div class="webName tracking-tighter leading-none items-center">
      <div class="webName">Early in the career.<br /> Not early in the life.</div>
    </div>

    <div class="hero">

      <div class="hero-image">
        <img src="./../assets/img/avatar-01.png" alt="">
      </div>

      <div class="main-info">
        <p>Hello everyone. My name is Danila Lutsai, I'm 28, and I build things for the web.</p>

        <p>This site is my portfolio — a small, honest place to put my work, my thinking, and a bit of who I am outside the code. Nothing exhaustive, nothing inflated. Just a starting point.</p>

        <p>I came to frontend development the long way around, and I think that's an advantage. Being twenty-eight means I've already learned how to learn — how to sit with something confusing until it stops being confusing, how to ask better questions, and how to tell the difference between knowing a thing and only recognizing it. I'm early in this career, not early in my life, and those are very different starting lines.</p>

        <p>Right now most of my time goes into Vue and TypeScript. I like TypeScript because it argues with me, and it's usually right. I like Vue because it keeps the distance between an idea and a working interface refreshingly short. I'm the kind of developer who would rather understand why something works than copy a snippet that happens to work — slower at first, much faster later.</p>

        <!-- <p>[new] The way I work is probably my most useful quality. I read documentation before I read tutorials. I break things on purpose to find out what holds them together. When something works and I don't know why, I treat that as a bug in my understanding rather than a win. It makes me slower on day one of anything, and considerably faster by week three.</p> -->
      </div>

      <div class="main-info">
        <p>What I care about in the work: interfaces that respect the person using them. Pages that load fast. Text you can actually read. Buttons where you expect buttons. A lot of the modern web has forgotten that a website is something a human being has to use, and I'd like to be part of the group that remembers.</p>

        <p>[new] Away from the keyboard I'm fairly easy to describe: I like things that reward patience. Long-form reading, problems that don't resolve in an afternoon, the particular satisfaction of a system you understand all the way down. I suspect that's the same instinct that pulled me into programming in the first place, just wearing different clothes.</p>

        <p>My goals are unglamorous and specific. Get genuinely good at the fundamentals rather than collecting framework names. Ship real projects instead of collecting tutorials. Find a team that builds carefully and writes code other people can read. Keep the curiosity that got me here in the first place.</p>

        <p>If any of that resonates, take a look at my projects — or just say hello.</p>
      </div>

      <div class="hero-image">
        <img src="./../assets/img/mountains.png" alt="">
      </div>

    </div>
  </div>
</template>

<style scoped>
.page {
  max-width: 1200px;
  width: 100%;
  margin-inline: auto;
  padding-inline: 1.5rem;
  place-items: center;
}

.main {
  justify-content: center;
}

.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
  font-family: "Open Sans";
}

.webName {
  display: flex;
  justify-content: center;
  padding: 0rem;
  padding-bottom: 1.5rem;
  font-size: 36px;
  font-family: 'Open Sans';
}

.main-info p {
  padding: 0 0 1rem;
  width: 100%;
}

.hero-image img {
  width: 100%;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.12);
  height: auto;
  display: block;
}
</style>
