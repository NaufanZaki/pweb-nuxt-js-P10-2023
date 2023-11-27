<!-- RecipesSection.vue -->

<template>
    <div class="container mx-auto py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- Ensure that 'recipe' is correctly passed as a prop -->
        <recipe-card v-for="(recipe, index) in recipes" :key="index" :recipe="recipe" class="w-full" />
      </div>
    </div>
  </template>
  
  <script>
  // Remove the import statement for RecipeCard.vue
  // import RecipeCard from './RecipeCard.vue';
  
  export default {
    components: {
      RecipeCard,
    },
    props: {
      recipes: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  