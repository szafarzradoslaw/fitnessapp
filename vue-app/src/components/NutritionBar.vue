<template>
  <div class="w-3/4 space-y-1">

    <!-- label -->
    <div class="flex justify-between text-sm">
      <span>{{ label }}</span>
      <span>{{ value }} / {{ goal }}</span>
    </div>

    <!-- BAR -->
    <div class="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">

      <!-- normal progress (max 100%) -->
      <div
        class="absolute left-0 top-0 h-full transition-all duration-300"
        :class="baseColor"
        :style="{ width: normalWidth + '%' }"
      />

      <!-- overflow (darker overlay) -->
      <div
        v-if="isOverflow"
        class="absolute left-0 top-0 h-full bg-black/30 transition-all duration-300"
        :style="{ width: overflowWidth + '%' }"
      />
    </div>

    <!-- warning text -->
    <div class="text-xs text-gray-500">
      <span v-if="!isOverflow">
        {{ goal - value }} left
      </span>
      <span v-else class="text-red-500">
        Over by {{ value - goal }}
      </span>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  label: string
  value: number
  goal: number
}>()

const colors: Record<string, string> = {
  Calories: 'bg-orange-400',
  Protein: 'bg-blue-400',
  Carbs: 'bg-yellow-400',
  Fat: 'bg-pink-400'
}

const baseColor = computed(() => {
  return colors[props.label] || 'bg-green-400'
})

const percentage = computed(() => (props.value / props.goal) * 100)

const isOverflow = computed(() => props.value > props.goal)

// normal bar max = 100%
const normalWidth = computed(() => {
  return Math.min(percentage.value, 100)
})

// overflow part
const overflowWidth = computed(() => {
  if (!isOverflow.value) return 0
  return Math.min((props.value - props.goal) / props.goal * 100, 100)
})
</script>