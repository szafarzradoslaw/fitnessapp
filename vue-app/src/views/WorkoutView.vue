<script setup lang="ts">
import { ref } from 'vue'
import Exercise from '@/components/Exercise.vue'

type SetItem = {
  reps: number
  weight: number
  done: boolean
}

type ExerciseItem = {
  name: string
  sets: SetItem[]
}

const workoutExercises = ref<ExerciseItem[]>([
  {
    name: 'Bench press',
    sets: [{ reps: 10, weight: 50, done: false }]
  }
])

function addExercise() {
  workoutExercises.value.push({
    name: '',
    sets: []
  })
}

function removeExercise(index: number) {
  workoutExercises.value.splice(index, 1)
}
</script>

<template>
  <div class="space-y-4">
    <Exercise
      v-for="(ex, i) in workoutExercises"
      :key="i"
      v-model="workoutExercises[i]"
    />

    <button @click="addExercise">+ Add exercise</button>
  </div>
</template>