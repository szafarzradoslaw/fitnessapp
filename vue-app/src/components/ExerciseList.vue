<script setup lang="ts">
type ExerciseItem = {
  name: string
}

const exercises = defineModel<ExerciseItem[]>({ default: () => [] })

function addExercise() {
  exercises.value.push({
    name: ''
  })
}

function removeExercise(index: number) {
  exercises.value.splice(index, 1)
}
</script>

<template>
  <div class="space-y-2">
    <div
      v-for="(exercise, i) in exercises"
      :key="i"
      class="flex gap-2 items-center"
    >
      <input
        v-model="exercise.name"
        type="text"
        placeholder="Exercise name"
        class="border px-2 py-1 rounded w-full"
      />

      <button @click="removeExercise(i)">×</button>
    </div>

    <button @click="addExercise">+ Add exercise</button>
  </div>
</template>