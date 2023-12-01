<!-- authorcard.vue -->
<template>
    <div class="author-card container mx-auto my-8 p-8 bg-white shadow-md rounded-md flex items-start">
      <img class="h-12 w-12 rounded-full border-2 border-gray-300 shadow-md mr-4" :src="author.photo" alt="Author Image">
      <div>
        <h1 class="text-4xl font-bold mb-4">{{ author.name }} <br>{{ author.studentId }}</h1>
        <p class="text-lg">
          Hello! I'm {{ author.name }}, {{ author.desc }}
        </p>
      </div>
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
  body {
  font-family: 'Poppins', sans-serif;
}
.dark body {
  color:#e2e2e2
}
.dark .author-card {
  background: #494848;
  color: #b3b1b1; /* Change button text color to dark */
}
  .author-card {
    transition: transform 0.3s ease-in-out;
    display: flex;
    align-items: flex-start; /* Align items to the start (left) */
  }
  
  .author-card:hover {
    transform: scale(1.05);
  }
  
  /* Ensure the photo is squared with rounded edges and add styling */
  .author-card img {
    height: 5rem; /* Adjust the size as needed */
    width: 5rem;  /* Adjust the size as needed */
    object-fit: cover; /* Maintain aspect ratio and cover the entire box */
  }
  
  /* Additional styling for the photo */
  .author-card img {
    border-radius: 50%; /* Rounded corners to make it circular */
    border: 2px solid #e2e2e2; /* Border color */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Box shadow for a subtle lift */
  }
  
  /* Additional styling for the text content */
  .author-card div {
    /* No need for additional styling here */
  }
  </style>
  