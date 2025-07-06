<script setup lang="ts">
import {ref} from 'vue';
import supabase from '../libs/SupabaseClient'
import type {Tables} from '../../database/types';
const tasks = ref<Tables<'tasks'>[]|null>(null)
;(async ()=>{
  const {data,error} = await supabase.from('tasks').select();
  console.log(error);
  tasks.value = data;
})()
</script>
<template>
  <div>
    <h2>Welcome to Projects Pages</h2>
    <RouterLink to="/">Go to Home</RouterLink>

    <ul v-if="tasks">
      <li v-for="task in tasks" :key="task.id">{{ task }}</li>
    </ul>
  </div>
</template>
