<script setup lang="ts">
import { ref } from "vue";
import NutritionBar from '@/components/NutritionBar.vue'
import FoodInputBar from '@/components/FoodInputBar.vue'
import FoodList from "@/components/FoodList.vue";
import type { FoodEntry } from "@/types/foodentry";

const foods = ref<FoodEntry[]>([]);

const addFood = (food: Omit<FoodEntry, "id">) => {
  foods.value.push({
    id: crypto.randomUUID(),
    ...food,
  });
};

const removeFood = (id: string) => {
  foods.value = foods.value.filter(f => f.id !== id);
};

</script>

<template>
  <div class="w-full flex justify-center p-4">
    <div class="w-full max-w-md space-y-6">

      <NutritionBar
        label="Calories"
        :value="2500"
        :goal="2500"
        unit="kcal"
      />

      <NutritionBar
        label="Protein"
        :value="120"
        :goal="160"
        unit="g"
      />

      <NutritionBar
        label="Carbs"
        :value="220"
        :goal="300"
        unit="g"
      />

      <NutritionBar
        label="Fat"
        :value="60"
        :goal="80"
        unit="g"
      />

      <FoodInputBar @add="addFood" />
      <FoodList :foods="foods" @remove="removeFood" />
    </div>
  </div>

    
</template>