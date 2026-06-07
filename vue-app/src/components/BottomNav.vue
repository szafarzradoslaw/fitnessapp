<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <nav class="bottom-nav">
    <router-link to="/workout" class="nav-item" :class="{ active: route.path === '/workout' }">
      🏋️
      <span>Workout</span>
    </router-link>

    <router-link to="/food" class="nav-item" :class="{ active: route.path === '/food' }">
      🍎
      <span>Food</span>
    </router-link>
  </nav>
</template>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  background: #111;
  border-top: 1px solid #333;
}

.nav-item {
  flex: 1;
  text-align: center;
  color: #aaa;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.nav-item.active {
  color: #fff;
}
</style>