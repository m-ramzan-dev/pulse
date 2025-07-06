<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import {ref} from 'vue';
import supabase from '../libs/SupabaseClient'
import type {Tables} from '../../database/types';
const projects = ref<Tables<'projects'>[]|null>(null)
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
    <RouterLink to="/tasks">Go to All Tasks</RouterLink>

    <ul v-if="projects">
      <li v-for="project in projects" :key="project.id">{{ project }}</li>
    </ul>
  </div>
</template>
