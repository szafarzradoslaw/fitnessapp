import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import WorkoutView from '@/views/WorkoutView.vue'
import FoodView from '@/views/FoodView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/food'
  },
  {
    path: '/workout',
    name: 'Workout',
    component: WorkoutView
  },
  {
    path: '/food',
    name: 'Food',
    component: FoodView
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})