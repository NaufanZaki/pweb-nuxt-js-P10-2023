<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img :src="require(`@/assets/${image}`)" alt="Member" class="w-full h-64 object-cover">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ name }}</div>
        <p class="text-gray-700 text-base">{{ role }}</p>
      </div>
      <div class="px-6 py-4">
        <p class="text-gray-700 text-base">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: String,
      role: String,
      description: String,
      image: String,
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  