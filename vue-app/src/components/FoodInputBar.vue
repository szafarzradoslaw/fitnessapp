<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits<{
  (e: "add", payload: { name: string; weight: number; unit: string }): void;
}>();

const foodName = ref("");
const weight = ref<number | null>(null);
const unit = ref("g");

const submit = () => {
  if (!foodName.value || !weight.value) return;

  emit("add", {
    name: foodName.value,
    weight: weight.value,
    unit: unit.value,
  });

  foodName.value = "";
  weight.value = null;
  unit.value = "g";
};
</script>

<template>
  <div class="flex gap-2 items-end">
    <input v-model="foodName" placeholder="Food" class="input" />
    <input v-model.number="weight" type="number" placeholder="Weight" class="input w-24" />

    <select v-model="unit" class="input">
      <option value="g">g</option>
      <option value="ml">ml</option>
      <option value="piece">piece</option>
    </select>

    <button @click="submit" class="btn">Add</button>
  </div>
</template>