<script setup lang="ts">
import BottomNav from '@/components/BottomNav.vue'
</script>

<template>
  <div class="app">
    <router-view />

    <BottomNav />
  </div>
</template>

<style>
.app {
  padding-bottom: 60px; /* prevent content from hiding behind nav */
}
</style>