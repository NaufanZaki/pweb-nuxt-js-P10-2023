<!-- HeroSection.vue -->

<template>
    <div class="hero-section bg-cover bg-center" :style="{ backgroundImage: `url('${backgroundImage}')` }">
      <div class="flex h-full flex-col items-center justify-center text-white">
        <h1 class="text-5xl font-bold mb-4">{{ title }}</h1>
        <a href="#" class="bg-white text-gray-800 font-bold py-2 px-4 rounded-md">Browse Recipes</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      backgroundImage: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any specific styling for HeroSection */
  .hero-section {
    min-height: 400px; /* Adjust the minimum height based on your design */
  }
  </style>
  