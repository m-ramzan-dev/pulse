<script setup lang="ts">
import supabase from './libs/SupabaseClient'
console.log('Supabase Client Initialized:', supabase)
</script>

<template>
  <RouterView />
</template>
