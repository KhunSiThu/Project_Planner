import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppProject from '../views/AppProject.vue'
import EditProject from '../views/EditProject.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addProject',
    name: 'AddProject',
    component: AppProject
  },
  {
    path: '/editProject/:id',
    name: 'EditProject',
    component: EditProject,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
