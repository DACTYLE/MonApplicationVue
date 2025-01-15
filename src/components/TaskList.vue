<template>
    <div class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4 text-center">Liste des Tâches</h2>
      <ul class="space-y-3">
        <li 
          v-for="(task, index) in tasks" 
          :key="index" 
          class="p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition duration-300 ease-in-out"
        >
          <span class="text-lg">{{ task }}</span>
          <button 
            @click="removeTask(index)" 
            class="mt-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-300 ease-in-out"
          >
            Supprimer
          </button>
        </li>
      </ul>
      <button 
        @click="addTask" 
        class="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Ajouter une tâche
      </button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { tasksRef } from '../store/firebase'
  import { getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
  import axios from "axios";

  export default defineComponent({
    name: 'TaskList',
    /*setup() {
      const tasks = ref(['Tâche 1', 'Tâche 2', 'Tâche 3']);
  
      const addTask = () => {
        tasks.value.push(`Tâche ${tasks.value.length + 1}`);
      };
  
      const removeTask = (index: number) => {
        tasks.value.splice(index, 1);
      };
  
      return { tasks, addTask, removeTask };
    },*/
    
    data() {
        return {
        tasks: [] as string[],
        apiUrl: "https://firestore.googleapis.com/v1/projects/monapplicatiovue/databases/(default)/documents/Tasks", // Remplacez par votre projet
        };
    },
    methods: {
        addTask() {
        this.tasks.push(`Tâche ${this.tasks.length + 1}`);
        },
        removeTask(index:number) {
        this.tasks.splice(index, 1);
        },
        async fetchTasks() {
          try {
            const querySnapshot = await getDocs(tasksRef);
            this.tasks = querySnapshot.docs.map((doc) => doc.data().Name); // Assurez-vous que les tâches ont un champ `name`
          } catch (error) {
            console.error("Erreur lors de la récupération des tâches :", error);
          }
        },
        async httpFetchTasks() {
          try {
            const response = await axios.get(this.apiUrl);
            console.log(response);
            this.tasks = response.data.documents.map((doc: any) => doc.fields.Name.stringValue);
          } catch (error) {
            console.error("Erreur lors de la récupération des tâches :", error);
          }
        }
    },
    async mounted() {
      //await this.fetchTasks();
      await this.httpFetchTasks();
    },
  });
  </script>
  
  <style scoped>
  /* Styles personnalisés si nécessaire */
  </style>
  