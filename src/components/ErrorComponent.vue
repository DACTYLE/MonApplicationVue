<template>
    <div class="error">
      <p>Une erreur est survenue lors du chargement du composant.</p>
      <button @click="retry">Réessayer</button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineEmits } from 'vue';
  
  // Permettre au composant parent de réessayer le chargement
  const emit = defineEmits(['retry']);
  
  function retry() {
    emit('retry');
  }
  </script>
  
  <style scoped>
  .error {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    color: #ff0000;
    font-size: 1.2em;
  }
  
  button {
    margin-top: 10px;
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  