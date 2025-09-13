import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/patients',
    },
    {
      path: '/patients',
      name: 'PatientIndex',
      component: () => import('../views/patients/PatientView.vue'),
    },
    {
      path: '/patients/create',
      name: 'PatientCreate',
      component: () => import('../views/patients/PatientCreate.vue'),
    },
    {
      path: '/visits',
      name: 'VisitIndex',
      component: () => import('../views/visits/VisitView.vue'),
    }, {
      path: '/visits/create',
      name: 'VisitCreate',
      component: () => import('../views/visits/VisitCreate.vue'),
    },
  ],
})

export default router
