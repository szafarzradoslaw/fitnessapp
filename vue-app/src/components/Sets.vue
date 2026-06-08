<script setup lang="ts">
type SetItem = {
  reps: number
  weight: number
  done: boolean
}

const sets = defineModel<SetItem[]>({ default: () => [] })

function addSet() {
  sets.value.push({
    reps: 10,
    weight: 0,
    done: false
  })
}

function removeSet(index: number) {
  sets.value.splice(index, 1)
}
</script>

<template>
  <div class="space-y-2">
    <div
      v-for="(set, i) in sets"
      :key="i"
      class="flex gap-2 items-center"
    >
      <input v-model.number="set.reps" type="number" placeholder="Reps" />
      <input v-model.number="set.weight" type="number" placeholder="Weight" />

      <input type="checkbox" v-model="set.done" />

      <button @click="removeSet(i)">×</button>
    </div>

    <button @click="addSet">+ Add set</button>
  </div>
</template>