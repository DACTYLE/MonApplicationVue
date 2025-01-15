import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// Imposer que les types soient importés séparément des objets 
// configuration TypeScript stricte lorsque verbatimModuleSyntax est activé
//import type { RouteRecordRaw } from 'vue-router';
import LoginForm from '../components/LoginForm.vue';
//import TaskList from '../components/TaskList.vue';
//console.log('Importing TaskList', TaskList);


const routes : Array<RouteRecordRaw> = [
  { path: '/', name: 'Login', component: LoginForm },
  { path: '/tasks', name: 'TaskList', component: () => import('../components/TaskList.vue') },
  { path: '/loading', name: 'Sample Loading', component: () => import('../components/LoadComponent.vue') },
  //{ path: '/waiting', name: 'Waiting', component: () => import('../components/WaitingComponent.vue') },
  {path : '/:pathMatch(.*)*', name: 'Login', component: LoginForm}

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
