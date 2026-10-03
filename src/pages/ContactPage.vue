<script setup lang="ts">
const fields = [
  { name: 'firstName', label: 'First name', type: 'text', autocomplete: 'given-name' },
  { name: 'lastName', label: 'Last name', type: 'text', autocomplete: 'family-name' },
  { name: 'country', label: 'Country', type: 'text', autocomplete: 'country-name' },
  { name: 'city', label: 'City', type: 'text', autocomplete: 'address-level2' },
  { name: 'phone', label: 'Phone number', type: 'tel', autocomplete: 'tel' },
  { name: 'email', label: 'Email', type: 'email', autocomplete: 'email' },
]
</script>

<template>
  <div class="mx-auto max-w-300 px-6">
    <h1>Contact Page</h1>
    <!-- Submission is intentionally disabled until a contact endpoint is available. -->
    <form class="w-full" @submit.prevent>
      <div class="flex flex-wrap gap-4">
        <div v-for="field in fields" :key="field.name" class="w-full sm:w-64">
          <label :for="field.name" class="block">{{ field.label }}</label>
          <input
            :id="field.name"
            :name="field.name"
            :type="field.type"
            :autocomplete="field.autocomplete"
            class="w-full rounded-sm border border-current px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          />
        </div>
      </div>
    </form>
  </div>
</template>
