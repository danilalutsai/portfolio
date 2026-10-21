<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let context: ReturnType<typeof gsap.context>;

gsap.registerPlugin(ScrollTrigger);

gsap.from(".about-title", {
  opacity: 0,
  y: -100,
  duration: 0.5,
})

onMounted(() => {
  const timeline = gsap.timeline();
  timeline
  .from(".text-pair-1", {
    scrollTrigger: ".text-pair-1",
    opacity: 0,
    x: -200,
    duration: 0.5,
  })
    .from(".text-pair-2", {
      scrollTrigger: ".text-pair-2",
      opacity: 0,
      x: 200,
      duration: 0.5,
    })
});

onMounted(() => {
  const timeline = gsap.timeline();

  timeline
    .from(".img-pair-1", {
      scrollTrigger: ".img-pair-1",
      opacity: 0,
      x: 200,
      duration: 0.5,
    })
    .from(".img-pair-2", {
      scrollTrigger: ".img-pair-2",
      opacity: 0,
      x: -200,
      duration: 0.5,
    });
});

//   .from(".img-pair-3", {
//     scrollTrigger: ".img-pair-3",
//     opacity: 0,
//     x: 200,
//     duration: 0.5,
//   })
// });

</script>

<template>
  <div>
    <h1 class="about-title mx-auto w-fit py-10 text-center text-3xl font-semibold
      sm:text-4xl bg-linear-to-r from-[#cba6f7] to-[#89b4fa]
      bg-clip-text text-transparent">
      Early in the career.<br />
      Not early in the life.
    </h1>

    <div id="main-section"
      class="mx-auto w-full grid grid-cols-1 items-center sm:grid-cols-2 max-w-300 px-6 font-sans text-lg text-gray-500 gap-5 font-normal place-items-center">

      <!-- Pair 1, Text left, image right -->
      <div class="text-pair-1 max-w-125">
        Hello everyone. My name is Danila Lutsai, I'm 28, and I build things for the web.
        This site is my portfolio — a small, honest place to put my work, my thinking, and a bit
        of who I am outside the code. Nothing exhaustive, nothing inflated. Just a starting point.
      </div>

      <div>
        <img src="@/assets/img/avatar-01.png" alt="Danila Lutsai"
          class="img-pair-1 block h-auto max-w-100 rounded-full shadow-photo">
      </div>

      <!-- Pair 2, Text right, image left -->
      <div class="text-pair-2 sm:col-start-2 sm:row-start-2 max-w-125">
        I came to frontend development the long way around, and I think that's an advantage. Being
        twenty-eight means I've already learned how to learn — how to sit with something confusing
        until it stops being confusing, how to ask better questions, and how to tell the
        difference between knowing a thing and only recognizing it. I'm early in this career, not
        early in my life, and those are very different starting lines.
      </div>

      <div class="relative">
        <img src="@/assets/img/mountains.png" alt="Danila Lutsai"
          class="img-pair-2 block h-auto w-100 shadow-photo rounded-full max-w-100 aspect-square" />
      </div>

      <!-- Pair 3, Text left, image right -->
      <div class="sm:col-start-1 sm:row-start-3 max-w-125">
        I came to frontend development the long way around, and I think that's an advantage. Being
        twenty-eight means I've already learned how to learn — how to sit with something confusing
        until it stops being confusing, how to ask better questions, and how to tell the
        difference between knowing a thing and only recognizing it. I'm early in this career, not
        early in my life, and those are very different starting lines.
      </div>

      <div class="img-pair-3 sm:col-start-2 sm:col-row-3 relative">
        <img
          src="@/assets/img/about-focused-2.png"
          alt="Mountain landscape"
          loading="lazy"
          class="block h-auto w-100 shadow-photo rounded-full max-w-100 aspect-square"
        />
      </div>

      <!-- Pair 4, Text right, image left -->
      <div class="mb-30 sm:col-start-2 sm:col-row-4 max-w-125">
        Right now most of my time goes into Vue and TypeScript. I like TypeScript because it
        argues with me, and it's usually right. I like Vue because it keeps the distance between
        an idea and a working interface refreshingly short. I'm the kind of developer who would
        rather understand why something works than copy a snippet that happens to work — slower at
        first, much faster later.
      </div>

      <div class="sm:col-start-1 sm:row-start-4 relative">
        <img
          src="@/assets/img/main-02.png"
          alt="Mountain and me"
          loading="lazy"
          class="w-100 shadow-photo rounded-full max-w-100 aspect-square mb-30"
        />
      </div>

      <!-- <div> -->
      <!--   What I care about in the work: interfaces that respect the person using them. Pages that -->
      <!--   load fast. Text you can actually read. Buttons where you expect buttons. A lot of the -->
      <!--   modern web has forgotten that a website is something a human being has to use, and I'd -->
      <!--   like to be part of the group that remembers. -->
      <!-- </div> -->
      <!-- <div> -->
      <!--   Away from the keyboard I'm fairly easy to describe: I like things that reward patience. -->
      <!--   Long-form reading, problems that don't resolve in an afternoon, the particular -->
      <!--   satisfaction of a system you understand all the way down. I suspect that's the same instinct -->
      <!--   that pulled me into programming in the first place, just wearing different clothes. -->
      <!-- </div> -->
      <!-- <div> -->
      <!--   My goals are unglamorous and specific. Get genuinely good at the fundamentals rather than -->
      <!--   collecting framework names. Ship real projects instead of collecting tutorials. Find a -->
      <!--   team that builds carefully and writes code other people can read. Keep the curiosity that -->
      <!--   got me here in the first place. -->
      <!-- </div> -->
      <!-- <div>If any of that resonates, take a look at my projects — or just say hello.</div> -->

    </div>
  </div>
</template>
