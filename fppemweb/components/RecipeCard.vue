<!-- recipecard.vue -->
<template>
    <div class="recipe-card w-full overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
      <div class="p-4 bg-white border rounded-md shadow-md">
        <h3 class="font-bold text-lg mb-2">{{ recipe.title }}</h3>
        <p class="text-gray-700 mb-4">{{ recipe.description }}</p>
        <a :href="recipe.link" class="block bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">Get Recipe</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      recipe: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  