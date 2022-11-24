import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/shared/login.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/',
      component: Login
   },
   {
    path: '/login',
    name: 'login',
    component: Login
    },
    {
      path:'/register',
      name:'rebister',
      component:()=>import('../views/shared/general-register.vue'),
    },
    {
      path: '/technician/:id',
      name:'technician',
      component: ()=>import('../components/technician/Layout/TechnicianLayout.vue'),
      children:[
        {
        path:'',
        redirect:{name:'myappliance'}
        },       
       {
          path:'appointment',
          name:'technician-appointment',
          component: ()=>import('../views/technician/technician-appointments.vue')
       },
       {
         path:'myappliance',
         name:'myappliance',
         component: ()=>import('../views/technician/technician-my-appliance.vue')
      },
       {
          path:'profile',
          name:'technician-profile',
          component: ()=>import('../views/technician/technician-profile.vue'),
       },
    ]
   }, 
  
   ]
})

export default router
