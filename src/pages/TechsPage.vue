<script setup lang="ts">

</script>

<template>
  <div id="main">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
    <div class="box">5</div>
  </div>

  <div class="secondary">
    <div class="box">6</div>
    <div class="box">7</div>
    <div class="box">8</div>
    <div class="box">9</div>
  </div>
</template>

<style scoped>
#main {
  min-height: 500px;
  border: 4px solid hsl(200, 100%, 50%);
  display: flex;
  gap: 20px;
}

.box {
  height: 100px;
  width: 100px;
  background-color: hsl(50, 100%, 75%);
  font-size: 15pt;
  display: flex;
  justify-content: center;
  align-items: center;
}

.secondary {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

</style>
