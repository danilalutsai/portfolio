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
  <div class="contact-page">
    <h1>Contact Page</h1>
    <!-- Submission is intentionally disabled until a contact endpoint is available. -->
    <form class="contact-form" @submit.prevent>
      <div class="contact-fields">
        <div v-for="field in fields" :key="field.name" class="contact-field">
          <label :for="field.name" class="contact-label">{{ field.label }}</label>
          <input
            :id="field.name"
            :name="field.name"
            :type="field.type"
            :autocomplete="field.autocomplete"
            class="contact-input"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.contact-page {
  max-width: 75rem;
  margin-inline: auto;
  padding-inline: 1.5rem;
}

.contact-form {
  width: 100%;
}

.contact-fields {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.contact-field {
  width: 100%;
}

.contact-label {
  display: block;
}

.contact-input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid currentColor;
  border-radius: 0.25rem;
}

.contact-input:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

@media (min-width: 40rem) {
  .contact-field {
    width: 16rem;
  }
}
</style>
