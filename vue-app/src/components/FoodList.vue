<script setup>
import FoodItem from './FoodItem.vue'

defineProps({
  foods: Array
})

const emit = defineEmits(['remove'])
</script>

<template>
  <div class="space-y-3">
    <FoodItem
      v-for="food in foods"
      :key="food.id"
      :food="food"
      @remove="emit('remove', $event)"
    />
  </div>
</template>