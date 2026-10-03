<script setup lang="ts">
interface FooterCol {
  title: string;
  url: string[];
}
</script>

<template>
  <footer class="bg-white">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-10 bg-gray-200
      min-w-50 border-2 border-gray-700">
      <div>Grid</div>
      <div>Grid</div>
      <div>Grid</div>
      <div>Grid</div>
    </div>
  </footer>
</template>
