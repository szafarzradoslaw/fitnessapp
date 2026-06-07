import { db } from './db'

export async function getFoods() {
  return await db.foods
    .orderBy('createdAt')
    .reverse()
    .toArray()
}

export async function addFood(name: string) {
  return await db.foods.add({
    name,
    createdAt: Date.now()
  })
}

export async function deleteFood(id: number) {
  return await db.foods.delete(id)
}