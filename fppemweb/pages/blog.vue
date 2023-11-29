<template>
  <div>
    <header class="relative bg-gray-800 text-white py-4" style="background-image: url('https://img.freepik.com/free-photo/healthy-homemade-meal-with-organic-vegetable-variation-garlic-seasoning-generated-by-ai_188544-55802.jpg?t=st=1701189311~exp=1701192911~hmac=af35c7d9cac4bd1dc64cb8dbbef2a1d0fea0ff5be385d30010c04d5a81a9b6e2&w=1800'); background-size: cover; background-position: center;">
      <div class="absolute inset-0 bg-black opacity-50"></div> <!-- Overlay -->
      <div class="container mx-auto flex justify-between items-center relative z-10">
        <div>
          <h1 class="text-4xl font-bold">Resep Nenek</h1>
          <p class="text-lg">Temukan dan coba resep makanan enak dari nenek!</p>
        </div>
        <div class="flex items-center">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search..."
            class="px-4 py-2 mr-4 border rounded focus:outline-none focus:border-gray-500 bg-gray-200 text-gray-800"
          />
          <button
            @click="resetSearch"
            class="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 focus:outline-none"
          >
            Reset
          </button>
        </div>
      </div>
    </header>

    <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <nuxt-link
        v-for="(post, index) in blogData"
        :key="index"
        :to="{ name: 'id', params: { id: post.id } }"

        class="card transition-transform duration-300 transform hover:scale-105"
      >
        <img :src="post.image" :alt="post.title" class="w-full h-auto rounded-t-lg border-b-1 border-gray-300" />
        <div class="p-4 bg-white rounded-b-lg shadow-md">
          <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
          <p class="text-gray-600"><strong>Ingredients:</strong> {{ post.ingredients }}</p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      blogData: [],
      searchQuery: "",
      originalData: [],
    };
  },
  mounted() {
    this.fetchBlogData();
  },
  methods: {
    fetchBlogData() {
      axios
        .get("http://localhost:6969/api/blog")
        .then((response) => {
          const fetchedPosts = response.data.docs;
          this.blogData = fetchedPosts.map((blog) => ({
            id: blog.id,
            title: blog.Title,
            ingredients: blog.Ingredients,
            image: blog.Image,
            tutorial: blog.Tutorial,
          }));
          this.originalData = [...this.blogData];
        })
        .catch((error) => {
          console.error("Error fetching blog data:", error);
        });
    },
    resetSearch() {
      this.blogData = [...this.originalData];
      this.searchQuery = "";
    },
  },
};
</script>

<style scoped>
/* Dark Mode Styles for the Header */
.dark header {
  background-color: #1a1a1a;
  color: #333333;
}

.dark header input,
.dark header button {
  border-color: #ffffff;
  color: #333333;
}

.dark header input::placeholder {
  color: #333333;
}

.dark header button:hover,
.dark header button:focus {
  background-color: #333333;
}

/* Header Styles */
header {
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background-size: cover;
  background-position: center;
}

header h1 {
  margin-bottom: 0.5rem;
}

header p {
  margin-bottom: 0;
}

header input {
  padding: 0.5rem;
}

/* Additional Styles for the Card */
.card {
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
}

.card img {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.card-content {
  padding: 15px;
  background-color: #ffffff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>


