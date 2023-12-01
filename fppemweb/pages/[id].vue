<template>
  <div class="single-blog container mx-auto p-4 mt-8">
    <nuxt-link
      class="button bg-gray-800 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded mb-8 transition-all duration-300"
      to="/blog"
    >
      Back
    </nuxt-link>
    <br>
    <br>

    <div v-if="blogDetails" class="blog-info flex flex-col lg:flex-row items-center lg:items-start gap-8">
      <div class="blog-img w-full lg:w-1/2">
        <img
          :src="blogDetails.image"
          :alt="blogDetails.title"
          class="max-h-96 w-full object-cover rounded-lg shadow-lg"
        />
      </div>

      <div class="blog-content w-full lg:w-1/2">
        <h1 class="text-3xl font-semibold mb-4">{{ blogDetails.title }}</h1>

        <div class="text-lg mb-4">
          <p class="mb-2">
            <span class="font-semibold">Ingredients:</span> {{ blogDetails.ingredients }}
          </p>
          <div>
            <span class="font-semibold">Tutorial:</span>
            <ul class="list-decimal pl-6">
              <li v-for="(step, index) in blogDetails.tutorial" :key="index">{{ step }}</li>
            </ul>
          </div>
        </div>

        <!-- Add any additional content or styling here -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      blogDetails: null, // To store the details of a specific blog
    };
  },
  async mounted() {
    // Fetch blog details based on the ID from the route params
    await this.fetchBlogDetails();
  },
  methods: {
    async fetchBlogDetails() {
      const blogId = this.$route.params.id; // Get the blog ID from route params

      try {
        const response = await axios.get(
          `http://localhost:6969/api/blog/${blogId}`
        );
        const blogData = response.data;

        // Split the tutorial into steps using the period as a delimiter
        const tutorialSteps = blogData.Tutorial.split('.').filter(step => step.trim() !== '');

        this.blogDetails = {
          title: blogData.Title,
          ingredients: blogData.Ingredients,
          tutorial: tutorialSteps.map(step => step.trim()), // Removed numbering
          image: blogData.Image,
        };
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    },
  },
};
</script>
<style scoped>
body {
  font-family: 'Poppins', sans-serif;
}

.button {
  transition: background-color 0.3s, transform 0.3s;
}

.button:hover {
  background-color: #4a90e2; /* Adjust color as needed */
  transform: scale(1.05); /* Add a slight scale effect on hover */
}

.blog-info {
  overflow: hidden;
}

.blog-content {
  max-height: 450px; /* Adjust as needed */
  overflow-y: auto;
}

.blog-content p {
  line-height: 1.6;
}

/* Additional Styling */
ul {
  margin-top: 0.5rem;
}

li {
  margin-bottom: 0.5rem;
}
</style>
