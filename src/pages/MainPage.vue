<script setup lang="ts">
</script>

<template>
  <div class="page">
    <div class="webName tracking-tighter leading-none items-center">
      <span class="text-green-500">B</span>uilt by hand.✍️<br />
      <span class="text-green-500">O</span>n purpose.
    </div>
    <div>
        ✍️
    </div>

    <div class="hero">
      <div class="main-info">
        <p>
          Welcome. You've found a small corner of the internet that belongs to one person and sells
          you nothing.
        </p>

        <p>
          I'm Danila, a frontend developer working mostly in Vue and TypeScript. This site is where
          I keep my projects, my notes, and whatever I happen to be learning at the moment — which
          right now is a lot, and which I suspect will always be a lot.
        </p>

        <p>
          I built this place by hand. Every line of it. Not because that's efficient — it isn't —
          but because building the thing is how you learn the thing. There's a version of this
          portfolio I could have assembled from a template in an afternoon. It would look better
          than this one. I would have learned nothing.
        </p>

        <br>

        <p>
          What you'll find here: a handful of projects I've shipped, written up honestly, including
          the parts that went wrong. A page about who I am, if you're curious. A way to get in
          touch, if you'd like to.
        </p>

        <p>
          What you won't find: a wall of framework logos, a skills bar chart claiming I'm 87%
          proficient in something, or three paragraphs of the word "passionate." I'd rather show you
          the work and let you decide.
        </p>

        <p>
          I think the web got worse while nobody was looking. Pages that take eight seconds to load
          a paragraph of text. Cookie banners stacked on newsletter popups stacked on app-download
          prompts. Interfaces designed to be measured rather than used. My small ambition is to
          build things that go the other way — fast, quiet, readable, and obvious about what they
          do.
        </p>

        <p>Have a look around. The projects are the interesting part.</p>
      </div>

      <div class="hero-image">
        <img src="./../assets/img/avatar.jpg" />
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

.webName {
  padding: 0rem;
  padding-bottom: 3rem;
  font-size: 36px;
  font-family: 'Open Sans';
}

.hero {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 6rem;
  align-items: start;
}

.main-info {
  font-family: 'Open Sans';
}

.main-info p {
  padding: 0 0 1rem;
}

.hero-image img {
  width: 100%;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.12);
  height: auto;
  display: block;
}

</style>
