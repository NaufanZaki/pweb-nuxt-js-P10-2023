<template>
  <div :class="{ 'dark': darkMode }">
    <header :class="{ 'dark': darkMode }" class="bg-gray-800 text-white text-center py-4">
      <h1 class="text-4xl font-bold">Food Delights</h1>
      <p class="text-lg">Explore and try delicious recipes from around the world!</p>
    </header>

    <hero-section :title="'Recipe Website'" :backgroundImage="'hero-image.jpg'" />

    <div class="container mx-auto py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <recipe-card v-for="(recipe, index) in recipes" :key="index" :recipe="recipe" class="w-full" />
      </div>
    </div>
  </div>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue';
import RecipeCard from '~/components/RecipeCard.vue';

export default {
  components: {
    HeroSection,
    RecipeCard,
  },
  data() {
    return {
      darkMode: false,
      recipes: [
        {
          title: 'Spaghetti Bolognese',
          description: 'Classic Italian pasta dish with a rich and savory meat sauce.',
          link: '#',
        },
        {
          title: 'Chicken Alfredo',
          description: 'Creamy Alfredo sauce paired with grilled chicken and fettuccine pasta.',
          link: '#',
        },
        {
          title: 'Vegetarian Stir Fry',
          description: 'Colorful mix of fresh vegetables stir-fried to perfection.',
          link: '#',
        },
        {
          title: 'Mango Tango Smoothie',
          description: 'Refreshing smoothie made with ripe mango, yogurt, and a hint of mint.',
          link: '#',
        },
        {
          title: 'Caprese Salad',
          description: 'Simple and elegant salad featuring fresh tomatoes, mozzarella, and basil.',
          link: '#',
        },
        {
          title: 'Teriyaki Salmon',
          description: 'Grilled salmon glazed with a sweet and savory teriyaki sauce.',
          link: '#',
        },
        {
          title: 'Chocolate Lava Cake',
          description: 'Indulgent dessert with a gooey chocolate center, served warm.',
          link: '#',
        },
        {
          title: 'Avocado Toast',
          description: 'Healthy and delicious toast topped with mashed avocado and seasonings.',
          link: '#',
        },
        {
          title: 'Greek Salad',
          description: 'Crisp and refreshing salad with tomatoes, cucumbers, olives, and feta cheese.',
          link: '#',
        },
        // Add more recipe objects as needed
      ],
    };
  },
  watch: {
    darkMode() {
      // You can perform additional actions when dark mode is toggled
    },
  },
};
</script>

<style scoped>
/* Add any additional styling here */
</style>

<style scoped>

/* Dark Mode Styles for the Content */
.dark header {
  background-color: #1a1a1a;
  color: #ffffff;
}

.dark .container {
  background-color: #1a1a1a;
  color: #ffffff;
}

.dark .recipe-card {
  background-color: #333333;
  color: #ffffff;
  /* Add more dark mode styles for the recipe card as needed */
}
.dark body {
  background-color: #333333;
}
</style>
