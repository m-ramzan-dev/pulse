<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import {ref} from 'vue';
import supabase from '../libs/SupabaseClient'

const projects = ref<any[]|null>(null)
;(async ()=>{
  const {data,error} = await supabase.from('projects').select();
  console.log(error);
  projects.value = data;
})()
</script>
<template>
  <div>
    <h2>Welcome to Projects Pages</h2>
    <RouterLink to="/">Go to Home</RouterLink>

    <ul v-if="projects">
      <li v-for="project in projects" :key="project.id">{{ project }}</li>
    </ul>
  </div>
</template>
