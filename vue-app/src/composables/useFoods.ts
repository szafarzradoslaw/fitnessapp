import { ref } from 'vue'
import type { FoodEntry } from '../db/db'
import { getFoods, addFood, deleteFood } from '../db/foodRepo'

const foods = ref<FoodEntry[]>([])
const loading = ref(false)

async function loadFoods() {
  loading.value = true
  foods.value = await getFoods()
  loading.value = false
}

async function add(name: string) {
  const newItem: FoodEntry = {
    name,
    createdAt: Date.now()
  }

  // 1. update UI immediately (optimistic)
  const id = await addFood(name)

  foods.value.unshift({
    ...newItem,
    id
  })
}

async function remove(id: number) {
  await deleteFood(id)

  foods.value = foods.value.filter(f => f.id !== id)
}


export function useFoods() {
  return {
    foods,
    loading,
    loadFoods,
    add,
    remove
  }
}