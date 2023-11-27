<!-- authorcard.vue -->
<template>
    <div class="author-card container mx-auto my-8 p-8 bg-white shadow-md rounded-md">
      <h1 class="text-4xl font-bold mb-4">{{ author.name }} - {{ author.studentId }}</h1>
      <p class="text-lg">
        Hello! I'm {{ author.name }}, a web developer and the author of this website. I'm passionate about creating delicious recipes and sharing them with you. Feel free to explore the recipes and enjoy the culinary journey!
      </p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      author: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add scoped styles for AuthorCard component */
  .author-card {
    transition: transform 0.3s ease-in-out;
  }
  
  .author-card:hover {
    transform: scale(1.05);
  }
  
  /* Additional styling can be added based on your preferences */
  </style>
  