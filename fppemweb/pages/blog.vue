<template>
  <div>
    <header class="relative bg-gray-800 text-white py-8" style="background-image: url('https://img.freepik.com/free-photo/healthy-homemade-meal-with-organic-vegetable-variation-garlic-seasoning-generated-by-ai_188544-55802.jpg?t=st=1701189311~exp=1701192911~hmac=af35c7d9cac4bd1dc64cb8dbbef2a1d0fea0ff5be385d30010c04d5a81a9b6e2&w=1800'); background-size: cover; background-position: center;" data-aos="fade-up" data-aos-duration="1000">
      <div class="absolute inset-0 bg-black opacity-50"></div> <!-- Overlay -->
      <div class="container mx-auto flex justify-between items-center relative z-10">
        <div>
          <h1 class="text-5xl font-bold" data-aos="fade-up" data-aos-duration="1000">Resep Nenek</h1>
          <p class="text-lg" data-aos="fade-up" data-aos-duration="1000">Find and try our delicacy desire food recipes made by the experts at Resep Nenek. (this page implement csr)</p>
        </div>
        <div class="flex items-center" data-aos="fade-up" data-aos-duration="1000">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search by Name or Ingredients..."
            class="px-6 py-3 mr-4 border rounded focus:outline-none focus:border-gray-500 bg-gray-200 text-gray-800"
            data-aos="fade-up" data-aos-duration="1000"
          />
          <button
            @click="resetSearch"
            class="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 focus:outline-none"
            data-aos="fade-up" data-aos-duration="1000"
          >
            Reset
          </button>
        </div>
      </div>
    </header>

    <!-- Loading indicator -->
    <div v-if="isLoading" class="text-center mt-4">
      Fetching data on client...
    </div>

    <div v-else>
      <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" data-aos="fade-up" data-aos-duration="1000">
        <nuxt-link
          v-for="(post, index) in filteredBlogData"
          :key="index"
          :to="{ name: 'id', params: { id: post.id } }"
          class="card transition-transform duration-300 transform hover:scale-105"
        >
          <div class="aspect-w-3 aspect-h-4">
            <img :src="post.image" :alt="post.title" class="w-full h-full object-cover rounded-t-lg border-b-1 border-gray-300" />
          </div>
          <div class="card-content flex flex-col justify-between p-4 bg-white rounded-b-lg shadow-md h-40"> <!-- Set a fixed height for the card content -->
            <div>
              <h2 class="text-xl font-semibold mb-2 overflow-hidden line-clamp-3">{{ post.title }}</h2>
              <p class="text-gray-600"><strong>Ingredients:</strong> {{ formatIngredients(post.ingredients) }}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  data() {
    return {
      blogData: [],
      searchQuery: "",
      originalData: [],
      isLoading: false, // Add loading indicator state
    };
  },
  computed: {
    filteredBlogData() {
      return this.blogData.filter(post =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        post.ingredients.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  mounted() {
    AOS.init();
    this.fetchBlogDataClientSide(); // Fetch data on the client side
  },
  methods: {
    fetchBlogDataClientSide() {
      this.isLoading = true;
      axios
        .get("http://localhost:6969/api/blog") // Assuming API is available at the same URL, adjust as needed
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
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    resetSearch() {
      this.blogData = [...this.originalData];
      this.searchQuery = "";
    },
    formatIngredients(ingredients) {
      const maxWords = 8;
      const words = ingredients.split(' ');
      if (words.length > maxWords) {
        return words.slice(0, maxWords).join(' ') + ' ...';
      }
      return ingredients;
    },
  },
};

</script>

<style scoped>
body {
  font-family: 'Poppins', sans-serif;
}

/* Dark Mode Styles for the Header */
.dark header {
  background-color: #1a1a1a;
  color: #ffffff; /* Change text color to white */
}

.dark header input,
.dark header button {
  border-color: #ffffff;
  color: #b3b1b1; /* Change button text color to dark */
}

.dark header input::placeholder {
  color: #888888; /* Adjust placeholder text color */
}

.dark header button:hover,
.dark header button:focus {
  background-color: #333333;
  color: #ffffff; /* Change button text color on hover/focus to white */
}

/* Dark Mode Styles for the Body */


.dark a {
  color: #64b5f6; /* Change link color in dark mode */
}

.dark a:hover {
  color: #bbdefb; /* Change link color on hover in dark mode */
}
.dark .card-content {
  padding: 15px;
  background-color: #2d2929;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(179, 177, 177, 0.06);
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

.card-content h2 {
  color: #333333; /* Set the title color to dark grey */
}
.dark .card-content h2 {
  color: #a19c9c; /* Set the title color to dark grey */
}

.dark .card-content p {
  color: rgb(169, 152, 134); /* Set the title color to dark grey */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
[data-aos="fade-right"].aos-animate {
  opacity: 1;
}

[data-aos="fade-left"] {
  opacity: 0;
  transition-property: opacity;
  will-change: opacity;
}

[data-aos="fade-left"].aos-animate {
  opacity: 1;
}


</style>
