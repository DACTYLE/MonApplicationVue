<template>
    <div>
      <h1 v-if="!showComponent">Parent Component</h1>
      <AsyncComponent v-if="showComponent" />

      <button   v-if="!showComponent"  @click="showComponent = !showComponent">
        Charger le composant asynchrone
      </button>
      
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineAsyncComponent, ref } from 'vue';

  import WaitingComponent from './WaitingComponent.vue';
  import ErrorComponent from './ErrorComponent.vue';
  //import LoginForm from '../components/LoginForm.vue';

  // Charger le composant de manière asynchrone  
  const AsyncComponent = defineAsyncComponent({
    suspensible: false,
    loader: () => new Promise((resolve) => {
        // Simuler un délai de chargement
        setTimeout(() => {
          resolve(import('./LoadingComponent.vue')); // Composant principal à charger
        }, 5000); // Simuler un délai de 2 secondes
    }),
    loadingComponent: WaitingComponent,
    errorComponent: ErrorComponent,
    delay: 500,
    timeout: 3000
  });

  const showComponent = ref(false);


  </script>
  