<template>
    <div class="loading">
      <p>Chargement en cours...</p>
      <div class="spinner"></div>
    </div>
  </template>
  
  <script lang="ts" setup>
  </script>
  
  <style scoped>
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    font-size: 1.2em;
    color: #007bff;
  }
  
  .spinner {
    margin-left: 10px;
    width: 16px;
    height: 16px;
    border: 2px solid transparent;
    border-radius: 50%;
    border-top-color: #007bff;
    animation: spin 0.6s linear infinite;
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  </style>
  