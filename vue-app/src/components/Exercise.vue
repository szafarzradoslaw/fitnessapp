<script setup lang="ts">
import Sets from '@/components/Sets.vue'

type SetItem = {
  reps: number
  weight: number
  done: boolean
}

type ExerciseItem = {
  name: string
  sets: SetItem[]
}

const exercise = defineModel<ExerciseItem>({ default: () => ({
  name: '',
  sets: []
}) })
</script>

<template>
  <div class="space-y-2 border p-2 rounded">
    <!-- Exercise name -->
    <input
      v-model="exercise.name"
      type="text"
      placeholder="Exercise name"
      class="border px-2 py-1 rounded w-full"
    />

    <!-- Nested sets -->
    <Sets v-model="exercise.sets" />
  </div>
</template>