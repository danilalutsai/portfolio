<script setup lang="ts">
import contactBackground from '@/assets/img/bg-hero-contact.png'
import * as z from "zod";

const myRegistry = z.registry<{ description: string }>();

const fields = [
  { name: 'firstName', label: 'First name', type: 'text', autocomplete: 'given-name' },
  { name: 'lastName', label: 'Last name', type: 'text', autocomplete: 'family-name' },
  { name: 'country', label: 'Country', type: 'text', autocomplete: 'country-name' },
  { name: 'city', label: 'City', type: 'text', autocomplete: 'address-level2' },
  { name: 'phone', label: 'Phone number', type: 'tel', autocomplete: 'tel' },
  { name: 'email', label: 'Email', type: 'email', autocomplete: 'email' },
]

const message = {
  name: 'message', label: 'Message', type: 'textarea', autocomplete: 'message',
}


Player.validate({ username: "billie", xp: 100 }); // true
Player.validate({ username: 42, xp: "100" });     // false

</script>

<template>
  <section class="relative isolate grid min-h-screen w-full place-items-center content-center bg-gray-600
    overflow-hidden px-4 py-12 sm:px-6 sm:py-20">
    <img
      :src="contactBackground"
      alt=""
      class="absolute inset-0 -z-10 h-full w-full object-cover"
    />

    <div class="geid min-w-0 w-full max-w-5xl grid-cols-1 gap-8 rounded-2xl bg-white/95
      px-4 py-10 sm:px-10 sm:py-20 shadow-xl">
      <h1 class="text-3xl font-semibold  sm:text-4xl pb-10 bg-linear-180
        from-[#9f72d4] to-[#e3905d] bg-clip-text text-transparent">Contact</h1>

      <!-- Submission is intentionally disabled until a contact endpoint is available. -->
      <form class="items-center grid min-w-0 grid-cols-1 sm:grid-cols-2 gap-5 w-full" @submit.prevent>
        <div
          v-for="field in fields"
          :key="field.name"
          class="grid min-w-0 gap-2"
        >
          <label
            :for="field.name"
            class="text-lg font-normal text-gray-600"
          >{{ field.label }}</label>

          <input
            :id="field.name"
            :name="field.name"
            :type="field.type"
            :autocomplete="field.autocomplete"
            class="w-full rounded-lg border border-gray-300 bg-white px-3 py-3 text-base text-gray-700
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 items-center"
          />
        </div>
      <div class="col-span-full grid min-w-0 gap-2">
      <label :for="message.name" class="text-lg font-normal text-gray-600">Message</label>
      <textarea id="message" name="message" rows="5"
        class="min-w-0 w-full resize-y rounded-lg border border-gray-300 bg-white px-3 py-3 text-base text-gray-700
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
      />
        <button type="submit" class="w-full bg-linear-to-r from-[#9f72d4] to-[#e3905d]
            py-5 mt-10 rounded-lg cursor-pointer text-white hover:-translate-y-1 transition-transform duration-200">Send</button>
      </div>
      </form>
    </div>
  </section>
</template>
