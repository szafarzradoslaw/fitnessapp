<script setup>
defineProps({
  modelValue: String
})

const emit = defineEmits(['update:modelValue', 'add'])
</script>

<template>
  <div class="flex gap-2 mb-6">
    <input
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      placeholder="Add food..."
      class="flex-1 p-3 rounded-xl border bg-white"
    />

    <button
      @click="emit('add')"
      class="bg-blue-500 text-white px-4 rounded-xl"
    >
      Add
    </button>
  </div>
</template>