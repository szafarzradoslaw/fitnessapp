import Dexie from 'dexie'
import type { Table } from 'dexie'

export interface FoodEntry {
  id?: number
  name: string
  createdAt: number
}

class AppDB extends Dexie {
  foods!: Table<FoodEntry, number>

  constructor() {
    super('fitness_app')

    this.version(1).stores({
      foods: '++id, name, createdAt'
    })
  }
}

export const db = new AppDB()