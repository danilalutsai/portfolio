<script setup lang="ts">
import heroPattern from '@/assets/img/bg-main-about.png';

interface FooterLink {
  label: string;
  href: string;
  target?: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const columns: FooterColumn[] = [
  { title: "Explore",
    links: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Techs",
        href: "/techs",

      },
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    title: "Social",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/danilalutsai",
        target: "_blank",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/danila-lutsai-4a1b8b174/",
      },
      {
        label: "LeetCode",
        href: "https://leetcode.com/u/danilalutsai/",
      },
    ],
  },
  {
    title: "Dependencies",
    links: [
      {
        label: "Vue",
        href: "https://developer.mozilla.org/en-US/",
      },
      {
        label: "Zod",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        label: "GSAP",
        href: "https://www.typescriptlang.org/",
      },
      {
        label: "Tailwind",
        href: "https://tailwindcss.com/",
      },
    ],
  },
  {
    title: "Learning Journay",
    links: [
      {
        label: "HTML/CSS",
        href: "https://developer.mozilla.org/en-US/",
      },
      {
        label: "JavaScript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        label: "TypeScript",
        href: "https://www.typescriptlang.org/",
      },
      {
        label: "Vue",
        href: "https://vuejs.org/",
      },
    ],
  },
];

</script>

<template>
  <footer
    class="relative isolate bg-cover bg-center bg-gray-600"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 -z-10 bg-black/50"
    </div>
    <nav
      aria-label="Footer"
      class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-10 min-w-50  "
    >
      <div
        v-for="column in columns"
        :key="column.title"
      >
        <h2 class="text-xl text-green-500 font-bold mb-5">{{ column.title }}</h2>
        <ul class="space-y-2">
          <li
            v-for="link in column.links"
            :key="link.href"
          ><a
              :href="link.href"
              class="opacity-60 text-white hover:opacity-90 text-md"
            >{{ link.label }}</a></li>
        </ul>
      </div>
    </nav>
    <div
      class="flex mx-auto justify-center pt-10 pb-5 text-white opacity-50"
    ><span>Copyright &#169; 2026 Danila Lutsai</span>
    </div>
  </footer>
</template>
