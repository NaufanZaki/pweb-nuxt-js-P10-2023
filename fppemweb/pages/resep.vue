<template>
    <div>
      <h1 class="text-4xl font-bold text-center mb-8">Resep</h1>
      
      <div class="container mx-auto">
        <!-- Display a list of recipes -->
        <div v-for="(recipe, index) in recipes" :key="index" class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">{{ recipe.title }}</h2>
          <p>{{ recipe.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        recipes: [
          { title: 'Recipe 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
          { title: 'Recipe 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
          { title: 'Recipe 3', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
          // Add more recipes as needed
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  