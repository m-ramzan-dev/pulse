<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
const id = route.params.id
</script>
<template>
  <div>
    <h2>Welcome to Project Page{{ id }}</h2>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/projects">Go to Projects</RouterLink>
  </div>
</template>
