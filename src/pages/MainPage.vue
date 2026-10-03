<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

import { SocialMedia } from '@/data/socialMedia'
import heroPattern from '@/assets/img/bg-main-about.png'
import warmPattern from '@/assets/img/bg-tech-warm.svg'

const hero = ref<HTMLElement | null>(null)
const aboutSection = ref<HTMLElement | null>(null)
const passionSection = ref<HTMLElement | null>(null)
let motion: ReturnType<typeof gsap.matchMedia> | undefined

function animateHero() {
  gsap
    .timeline()
    .from('[data-animate="hero-bg"]', { opacity: 0, duration: 1 })
    .from('[data-animate="hero-line"]', { opacity: 0, y: 20, duration: 0.5, stagger: 0.12 }, 0.2)
    .from('[data-animate="hero-summary"]', { opacity: 0, y: 16, duration: 0.5 }, 0.5)
    // Animate the wrapper so each button's transform stays available for CSS hover.
    .from('[data-animate="hero-actions"]', { opacity: 0, y: 16, duration: 0.5 }, 0.6)
}

function animateAbout(section: HTMLElement) {
  // Animate the card and text when the section scrolls into view.
  gsap
    .timeline({
      defaults: { ease: 'power3.out' },
      scrollTrigger: {
        trigger: section,
        start: 'top 75%',
        once: true,
      },
    })
    .from('[data-animate="about-card"]', {
      opacity: 0,
      y: 35,
      duration: 0.7,
    })
    .from(
      '[data-animate="about-heading"]',
      { opacity: 0, y: 16, duration: 0.5 },
      0.2,
    )
    .from(
      '[data-animate="about-copy"]',
      { opacity: 0, y: 16, duration: 0.6 },
      0.35,
    )
    .from(
      '[data-animate="about-socials"]',
      { opacity: 0, y: 12, duration: 0.5 },
      0.5,
    )

  // Animate the photo separately when the photo scrolls into view.
  const photo = section.querySelector<HTMLElement>(
    '[data-animate="about-photo"]',
  )

  if (!photo) return

  gsap.from(photo, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: photo,
      start: 'top 80%',
      once: true,
    },
  })
}

function animatePassion(section: HTMLElement) {
  gsap
    .timeline({
      defaults: { ease: 'power3.out' },
      scrollTrigger: { trigger: section, start: 'top 75%', once: true },
    })
    .from('[data-animate="passion-content"]', { opacity: 0, y: 35, duration: 0.7 })
    .from('[data-animate="passion-photo"]', { opacity: 0, x: -30, duration: 0.7 }, 0.2)
    .from('[data-animate="passion-text"]', { opacity: 0, y: 20, duration: 0.7 }, 0.35)
}

function scrollToAbout() {
  if (!aboutSection.value) return
  gsap.to(window, {
    duration: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 1,
    ease: 'power2.inOut',
    scrollTo: {
      y: aboutSection.value,
      offsetY: 80,
      autoKill: true,
    },
    overwrite: 'auto',
  })
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  motion = gsap.matchMedia()
  const reducedMotionQuery = '(prefers-reduced-motion: no-preference)'

  if (hero.value) motion.add(reducedMotionQuery, animateHero, hero.value)

  const about = aboutSection.value
  if (about) motion.add(reducedMotionQuery, () => animateAbout(about), about)

  const passion = passionSection.value
  if (passion) motion.add(reducedMotionQuery, () => animatePassion(passion), passion)
})

onUnmounted(() => {
  motion?.revert()
})
</script>

<template>
  <section
    ref="hero"
    class="relative z-10 flex min-h-dvh w-full items-center justify-center overflow-hidden"
  >
    <img
      data-animate="hero-bg"
      :src="heroPattern"
      alt=""
      class="absolute inset-0 h-full w-full object-cover"
    />

    <div class="relative mx-auto w-full max-w-3xl px-6 py-16 sm:px-10 sm:pt-0 sm:pb-20">
      <div class="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
        <h1 class="text-right font-mono text-5xl leading-none font-semibold text-white sm:text-6xl">
          <span data-animate="hero-line" class="block"
            ><span class="text-green-500">b</span>uild</span
          >
          <span data-animate="hero-line" class="block"
            ><span class="text-green-500">b</span>reak</span
          >
          <span data-animate="hero-line" class="block"
            >re<span class="text-green-500">b</span>uild</span
          >
        </h1>
      </div>

      <p
        data-animate="hero-summary"
        class="mx-auto mt-5 mb-3 max-w-100 text-center font-mono text-lg leading-8 font-semibold text-gray-100"
      >
        Self-taught front-end developer based in Tallinn. I learned by building, breaking and
        rebuilding — and I'm still doing exactly that.
      </p>

      <div data-animate="hero-actions" class="flex flex-wrap justify-center gap-3 pt-5">
        <button
          type="button"
          class="inline-flex cursor-pointer items-center rounded-lg border-4
          bg-green-500 px-4 py-2 text-lg font-semibold text-gray-600
          shadow-card transition-transform duration-300 ease-standard
          hover:-translate-y-[0.2rem] hover:duration-100 motion-reduce:transition-none
          sm:px-6 sm:py-3 border-green-500"
          @click="scrollToAbout"
        >
          About
        </button>
        <RouterLink
          to="/contact"
          class="group inline-flex cursor-pointer items-center rounded-lg
          border-4 bg-green-500 px-4 py-2 text-lg font-semibold text-gray-600
          shadow-card transition-transform duration-300 ease-standard
          hover:-translate-y-[0.2rem] hover:duration-100 motion-reduce:transition-none
          sm:px-6 sm:py-3 min-w-5 border-gray-600"
        >Get in touch
          <span
            aria-hidden="true"
            class="relative block size-6 shrink-0
            transition-transform duration-300
            group-hover:translate-x-2
            motion-reduce:transition-none"
          >
            <!-- The straight line -->
            <span
              class="absolute left-[3px] top-1/2 h-[4px] w-[18px]
              origin-right -translate-y-1/2
              scale-x-0 rounded-full bg-current opacity-0
              transition-[scale,opacity] duration-300
              group-hover:scale-x-100 group-hover:opacity-100
              motion-reduce:transition-none"
            ></span>

            <!-- The arrow tip -->
            <span
              class="absolute right-0.75 top-1/2 size-4
              -translate-y-1/2 -rotate-45 rounded-full"
            >
              <span
                class="absolute bottom-0 left-0 h-[4px] w-full
                rounded-full bg-current"
              ></span>

              <span
                class="absolute right-0 top-0 h-full w-[4px]
                rounded-full bg-current"
              ></span>
            </span>
          </span>

        </RouterLink>
      </div>
      <div>
        <button
        type="button"
        aria-label="Scroll to About"
        class="pt-10 group absolute bottom-6 left-1/2 flex size-12 -translate-x-1/2
        cursor-pointer items-center justify-center text-white"
        @click="scrollToAbout"
      >
        <svg
          aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-10 transition-transform duration-300 group-hover:translate-y-2 motion-reduce:transition-none"
      >
        <path d="m5 9 7 7 7-7" />
      </svg>
            <span
              class="absolute left-[22px] top-[45px] h-[25px] w-[4px]
              origin-center -translate-y-1/2
              scale-y-0 rounded-full opacity-0 bg-current
              transition-[scale,opacity] duration-300
              group-hover:scale-y-100 group-hover:opacity-100
              motion-reduce:transition-none"
            ></span>
    </button></div>
    </div>
  </section>

  <section
    ref="aboutSection"
    class="flex justify-center bg-[url('/src/assets/img/bg-main-cart.png')] sm:p-20
    md:mx-auto rounded-xl"
  >
    <div
      data-animate="about-card"
      class="flex w-full rounded-xl max-w-276 flex-col gap-8 border border-[#e0e0e0] bg-white p-10 shadow-card transition-transform duration-300 ease-standard md:my-10 md:flex-row md:justify-between"
    >
      <div class="min-w-0 flex-1 md:mb-10">
        <h2
          data-animate="about-heading"
          class="font-mono border-b border-gray-300 p-5 text-left text-2xl font-semibold text-gray-600 uppercase sm:text-3xl"
        > <span class="inline-block bg-linear-to-r from-[#cba6f7] to-[#f38ba8] bg-clip-text text-transparent">
            DANILA LUTSAI </span>
        </h2>
        <p data-animate="about-copy" class="p-5 text-lg text-gray-500">
          I’m a self-taught web developer from Tallinn, Estonia, with a growing passion for turning
          ideas into useful, thoughtful web experiences. I began my journey into programming at the
          start of 2026, driven by curiosity about how the websites and applications I use every day
          are made.
        </p>
        <ul
          data-animate="about-socials"
          class="flex flex-wrap items-center justify-center gap-3 md:ml-5 md:justify-start"
        >
          <li v-for="media in SocialMedia" :key="media.url" class="inline-flex">
            <a
              :href="media.url"
              :aria-label="media.alt"
              class="inline-flex"
              :target="media.url.startsWith('http') ? '_blank' : undefined"
              :rel="media.url.startsWith('http') ? 'noopener noreferrer' : undefined"
            >
              <img
                :src="media.image"
                :alt="media.alt"
                width="40"
                height="40"
                class="size-10 cursor-pointer opacity-50 transition-[translate,opacity] duration-200 ease-standard hover:-translate-y-1 hover:opacity-100 motion-reduce:transition-none"
              />
            </a>
          </li>
        </ul>
      </div>
      <img
        data-animate="about-photo"
        src="@/assets/img/avatar.jpg"
        alt="Danila Lutsai"
        class="m-5 aspect-square w-full max-w-60 shrink-0 self-center rounded-full object-cover"
      />
    </div>
  </section>

  <section
    ref="passionSection"
    class="relative mx-auto flex justify-center overflow-hidden p-4 sm:p-15"
  >
    <img :src="warmPattern" alt="" class="absolute inset-0 h-full w-full object-cover" />
    <div
      data-animate="passion-content"
      class="bg-white relative flex h-full max-w-276 flex-col gap-8 shadow-card
      transition-transform duration-300 ease-standard lg:flex-row
      lg:justify-between p-10 my-20 rounded-xl"
    >
      <img
        data-animate="passion-photo"
        src="@/assets/img/avatar-01.png"
        alt="Danila Lutsai"
        class="order-2 mx-auto aspect-square w-full max-w-80 shrink-0 self-center
        object-cover lg:order-1 rounded-xl"
      />
      <div
        data-animate="passion-text"
        class="rounded-xl order-1 min-w-0 flex-1 bg-white/10 hover:bg-white/20
        lg:order-2"
      >
        <h2
          class="font-mono border-b border-gray-300 p-5 text-left text-2xl
          font-semibold text-gray-600 uppercase lg:text-4xl ml-5"
        >
          <span class="inline-block bg-linear-to-r from-[#E0B355] to-[#C45D2B]
            bg-clip-text text-transparent sm:text-3xl">
            Passion
          </span>
        </h2>
        <p class="m-10 text-lg text-gray-500 xl:order-1">
          What I enjoy most about development is that it combines creativity with logic. There is
          always another detail to improve: making an interface clearer, refining a layout for
          smaller screens, improving performance, or finding a cleaner solution to a technical
          challenge.<br /><br />
          I like the balance between careful problem-solving and the visual side of creating an
          experience that people genuinely enjoy using.
        </p>
      </div>
    </div>
  </section>
</template>
