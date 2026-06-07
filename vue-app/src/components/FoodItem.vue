<script setup lang="ts">
defineProps<{
  food: {
    id: number
    name: string
  }
}>()

const emit = defineEmits(['remove'])
</script>

<template>
  <div class="bg-white p-4 rounded-xl shadow flex justify-between">
    <span>{{ food.name }}</span>

    <button @click="emit('remove', food.id)" class="text-red-500 text-sm">
      Delete
    </button>
  </div>
</template>