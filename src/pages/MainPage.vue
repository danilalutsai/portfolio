<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

import { SocialMedia } from '@/data/socialMedia'
import warmPattern from '@/assets/img/bg-tech-warm.svg'
import heroPattern from '@/assets/img/hero-tech-pattern.png'

const hero = ref<HTMLElement | null>(null)
const aboutSection = ref<HTMLElement | null>(null)
const passionSection = ref<HTMLElement | null>(null)
let motion: ReturnType<typeof gsap.matchMedia> | undefined

function animateHero() {
  gsap
    .timeline()
    .from('.hero-bg', { opacity: 0, duration: 0.5,  })
    .from('.hero-logo', { opacity: 0, y: 20, duration: 0.6 }, 0.1)
    .from('.hero-line', { opacity: 0, y: 20, duration: 0.5, stagger: 0.12 }, 0.2)
    .from('.hero-description', { opacity: 0, y: 16, duration: 0.5, stagger: 0.1 }, 0.5)
}

function animateAbout(section: HTMLElement) {
  gsap
    .timeline({
      defaults: { ease: 'power3.out' },
      scrollTrigger: { trigger: section, start: 'top 75%', once: true },
    })
    .from('.about-card', { opacity: 0, y: 35, duration: 0.7 })
    .from('.about-heading', { opacity: 0, y: 16, duration: 0.5 }, 0.2)
    .from('.about-copy', { opacity: 0, y: 16, duration: 0.6 }, 0.35)
    .from('.about-socials', { opacity: 0, y: 12, duration: 0.5 }, 0.5)
    .from('.about-photo', { opacity: 0, x: 30, duration: 0.7 }, 0.25)
}

function animatePassion(section: HTMLElement) {
  gsap
    .timeline({
      defaults: { ease: 'power3.out' },
      scrollTrigger: { trigger: section, start: 'top 75%', once: true },
    })
    .from('.passion-content', { opacity: 0, y: 35, duration: 0.7 })
    .from('.passion-photo', { opacity: 0, x: -30, duration: 0.7 }, 0.2)
    .from('.passion-text', { opacity: 0, y: 20, duration: 0.7 }, 0.35)
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
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
  <section ref="hero" class="hero-section">
    <img :src="heroPattern" alt="" class="hero-bg" />

    <div class="hero-content">
      <div class="hero-brand">
        <img src="@/assets/img/dl-logo-bold-white.svg" alt="" class="hero-logo" />

        <h1 class="hero-title">
          <span class="hero-line"><span class="hero-accent">b</span>uild</span>
          <span class="hero-line"><span class="hero-accent">br</span>eak</span>
          <span class="hero-line"><span class="hero-accent">reb</span>uild</span>
        </h1>
      </div>

      <p class="hero-description hero-summary">
        Self-taught front-end developer based in Tallinn. I learned by building, breaking and
        rebuilding — and I'm still doing exactly that.
      </p>

      <div class="hero-actions">
        <RouterLink to="/about" class="hero-description hero-action hero-action-about">
          About
        </RouterLink>
        <RouterLink to="/contact" class="hero-description hero-action hero-action-contact"
          >Get in touch
          <span aria-hidden="true" class="contact-arrow contact-arrow-shaft" />
          <span aria-hidden="true" class="contact-arrow contact-arrow-top" />
          <span aria-hidden="true" class="contact-arrow contact-arrow-bottom" />
        </RouterLink>
      </div>
    </div>
  </section>

  <section ref="aboutSection" class="about-section">
    <div class="about-card">
      <div class="about-details">
        <h2 class="about-heading">Danila Lutsai</h2>
        <p class="about-copy">
          I’m a self-taught web developer from Tallinn, Estonia, with a growing passion for turning
          ideas into useful, thoughtful web experiences. I began my journey into programming at the
          start of 2026, driven by curiosity about how the websites and applications I use every day
          are made.
        </p>
        <ul class="about-socials">
          <li v-for="media in SocialMedia" :key="media.url" class="about-social-link">
            <a
              :href="media.url"
              :aria-label="media.alt"
              class="about-social-link"
              :target="media.url.startsWith('http') ? '_blank' : undefined"
              :rel="media.url.startsWith('http') ? 'noopener noreferrer' : undefined"
            >
              <img
                :src="media.image"
                :alt="media.alt"
                width="40"
                height="40"
                class="about-social-icon"
              />
            </a>
          </li>
        </ul>
      </div>
      <img src="@/assets/img/avatar.jpg" alt="Danila Lutsai" class="about-photo" />
    </div>
  </section>

  <section ref="passionSection" class="passion-section">
    <img :src="warmPattern" alt="" class="passion-bg" />
    <div class="passion-content">
      <img src="@/assets/img/avatar-01.png" alt="Danila Lutsai" class="passion-photo" />
      <div class="passion-text">
        <h2 class="passion-heading">Passion</h2>
        <p class="passion-copy">
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

<style scoped>
.hero-section {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
}

.hero-bg,
.passion-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-content {
  position: relative;
  width: 100%;
  max-width: 48rem;
  margin-inline: auto;
  padding: 4rem 1.5rem;
}

.hero-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

.hero-logo {
  width: 9rem;
  flex-shrink: 0;
}

.hero-title {
  color: white;
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.25;
  text-align: right;
}

.hero-line {
  display: block;
}

.hero-accent {
  color: var(--color-orange-500);
}

.hero-summary {
  max-width: 25rem;
  margin: 1.25rem auto 0.75rem;
  color: var(--color-gray-100);
  font-size: 1.125rem;
  line-height: 2rem;
  text-align: center;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  padding-top: 1.25rem;
}

.hero-action {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 4px solid var(--color-gray-600);
  border-radius: 0.5rem;
  background-color: var(--color-orange-500);
  color: var(--color-gray-600);
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.75rem;
  box-shadow: var(--shadow-card);
}

.hero-action-contact {
  min-width: 1.25rem;
  border-color: var(--color-orange-500);
  cursor: pointer;
}

.contact-arrow {
  display: inline-flex;
  width: 1rem;
  height: 0.25rem;
  border-radius: 0.25rem;
  background-color: var(--color-gray-600);
  transition:
    transform 300ms var(--ease-standard),
    translate 300ms var(--ease-standard),
    scale 300ms var(--ease-standard),
    rotate 300ms var(--ease-standard);
}

.contact-arrow-shaft {
  margin-left: 0.25rem;
  opacity: 0;
  transform-origin: right;
  scale: 0 1;
}

.contact-arrow-top {
  margin-top: -0.5rem;
  margin-left: -0.75rem;
  rotate: 45deg;
}

.contact-arrow-bottom {
  margin-top: 0.5rem;
  margin-left: -1rem;
  rotate: -45deg;
}

.about-section {
  display: flex;
  justify-content: center;
  margin-inline: auto;
  background: url('../assets/img/bg-gray-texture.png') center / cover no-repeat;
}

.about-card {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 69rem;
  margin-block: 2.5rem;
  padding: 2.5rem;
  background-color: white;
  box-shadow: var(--shadow-card);
  transition: transform 300ms var(--ease-standard);
}

.about-details {
  flex: 1;
  min-width: 0;
  margin-block: 2.5rem;
}

.about-heading,
.passion-heading {
  padding: 1.25rem;
  border-bottom: 1px solid var(--color-gray-300);
  color: var(--color-gray-600);
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2rem;
  text-align: left;
  text-transform: uppercase;
}

.about-copy,
.passion-copy {
  padding: 1.25rem;
  color: var(--color-gray-500);
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.about-socials {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.about-social-link {
  display: inline-flex;
}

.about-social-icon {
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  opacity: 0.5;
  transition:
    translate 200ms var(--ease-standard),
    opacity 200ms var(--ease-standard);
}

.about-photo,
.passion-photo {
  width: 100%;
  aspect-ratio: 1;
  flex-shrink: 0;
  align-self: center;
  margin-inline: auto;
  object-fit: cover;
}

.about-photo {
  max-width: 15rem;
  border-radius: 50%;
}

.passion-section {
  position: relative;
  display: flex;
  justify-content: center;
  margin-inline: auto;
  padding: 1rem;
  overflow: hidden;
}

.passion-content {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 69rem;
  box-shadow: var(--shadow-card);
  transition: transform 300ms var(--ease-standard);
}

.passion-photo {
  order: 2;
  max-width: 20rem;
  border-radius: 0.75rem;
}

.passion-text {
  order: 1;
  flex: 1;
  min-width: 0;
  background-color: rgb(255 255 255 / 10%);
}

.passion-heading {
  color: var(--color-gray-50);
}

.passion-copy {
  color: var(--color-gray-200);
}

@media (hover: hover) {
  .hero-action-contact:hover .contact-arrow {
    translate: 0.5rem 0;
  }

  .hero-action-contact:hover .contact-arrow-shaft {
    opacity: 1;
    scale: 1 1;
  }

  .about-social-icon:hover {
    translate: 0 -0.25rem;
    opacity: 1;
  }

  .passion-text:hover {
    background-color: rgb(255 255 255 / 20%);
  }
}

@media (min-width: 40rem) {
  .hero-content {
    padding: 5rem 2.5rem;
  }

  .hero-brand {
    flex-direction: row;
    gap: 2.5rem;
  }

  .hero-logo {
    width: 11rem;
  }

  .hero-title {
    font-size: 3.75rem;
  }

  .hero-action {
    padding: 0.75rem 1.5rem;
  }

  .about-section {
    padding: 5rem;
  }

  .about-heading,
  .passion-heading {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  .passion-section,
  .passion-content {
    padding: 2.5rem;
  }
}

@media (min-width: 48rem) {
  .about-card,
  .passion-content {
    flex-direction: row;
    justify-content: space-between;
  }

  .about-socials {
    justify-content: flex-start;
    margin-left: 1.25rem;
  }

  .about-photo,
  .passion-photo {
    margin-inline: 0;
  }

  .passion-photo {
    order: 1;
  }

  .passion-text {
    order: 2;
  }
}
</style>
