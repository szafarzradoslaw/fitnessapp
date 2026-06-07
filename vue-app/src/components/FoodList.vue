<script setup lang="ts">
import type { FoodEntry } from "@/types/foodentry";

const props = defineProps<{
  foods: FoodEntry[];
}>();

const emit = defineEmits<{
  (e: "remove", id: string): void;
}>();
</script>

<template>
  <div class="space-y-2">
    <div
      v-for="item in foods"
      :key="item.id"
      class="flex justify-between items-center border p-2 rounded"
    >
      <div>
        <div class="font-medium">{{ item.name }}</div>
        <div class="text-xs text-gray-500">
          {{ item.weight }} {{ item.unit }}
        </div>
      </div>

      <button
        @click="emit('remove', item.id)"
        class="text-red-500 text-sm"
      >
        Delete
      </button>
    </div>

    <div v-if="foods.length === 0" class="text-gray-400 text-center py-4">
      No foods added yet
    </div>
  </div>
</template>