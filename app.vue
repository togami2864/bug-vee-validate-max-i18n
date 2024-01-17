<script setup lang="ts">
const { errors, value } = useField<string>(() => 'email', 'max:10');
</script>

<template>
  <div class="container">
    <input v-model="value"/>
    <p>count: {{ value ? value.length : 0 }}</p>
    <p>errors: {{ errors }}</p>
  </div>
</template>

<style scoped>
.container {
    height: 100vh;
    display: flex;
    max-width: 400px;
    margin: 0 auto;
    justify-content: center;
    flex-direction: column;
}
</style>