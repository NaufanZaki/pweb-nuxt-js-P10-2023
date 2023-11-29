<template>
  <div>
    <header class="relative bg-cover bg-center text-white py-32"> <!-- Increase py-20 to py-32 for a larger header -->
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="container mx-auto text-center relative z-10">
        <h1 class="text-6xl font-extrabold mb-8">Resep Nenek</h1> <!-- Increase text-4xl to text-6xl for larger text -->
        <p class="text-xl mb-12">Temukan dan coba resep makanan enak dari nenek!</p> <!-- Increase text-lg to text-xl for larger text -->
        <p class="text-lg">Dapatkan inspirasi resep makanan lezat dari nenek. Temukan berbagai macam resep tradisional yang lezat dan mudah untuk dicoba di rumah.</p>
      </div>
    </header>

    <section class="py-8">
      <div class="container mx-auto">
        <div v-if="blogData.length === 0">Loading...</div>

        <div v-else>
          <div v-for="(post, index) in blogData" :key="index" class="mb-8">
            <nuxt-link
              :to="{ name: 'blog', params: { id: post.id } }"
              class="block overflow-hidden shadow-md relative group"
            >
              <div class="relative group">
                <!-- Image with nice styling -->
                <div class="relative group">
                  <img :src="post.image" :alt="post.title" class="w-full h-64 object-cover rounded-t-lg rounded-b-lg mb-0" />
                  <!-- Overlay with gradient fade effect -->
                  <div class="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-40 group-hover:opacity-0 rounded-t-lg rounded-b-lg"></div>
                </div>

                <!-- Information overlay -->
                <div class="absolute inset-0 flex items-center justify-center text-white">
                  <div class="text-center transition-transform transform hover:scale-105">
                    <h2 class="text-3xl font-semibold mb-2">{{ post.title }}</h2>
                    <p class="text-lg">{{ post.recipe }}</p>
                    <p class="text-lg">{{ post.tutorial }}</p>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="bg-gray-200 py-8">
      <div class="container mx-auto text-center">
        <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
        <p class="text-lg mb-8">Feel free to reach out if you have any questions or inquiries.</p>
        <!-- Add your contact form or details here -->
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      blogData: [], // Array to store multiple blog posts
    };
  },
  mounted() {
    this.fetchBlogData(); // Fetch initial blog data
  },
  methods: {
    // Fetch blog data from API
    fetchBlogData() {
      axios
        .get("http://localhost:6969/api/blog")
        .then((response) => {
          const fetchedPosts = response.data.docs;
          this.blogData = fetchedPosts.map((blog) => ({
            id: blog.id,
            title: blog.Title,
            recipe: blog.Recipe,
            image: blog.Image,
            tutorial: blog.Tutorial,
          }));
        })
        .catch((error) => {
          console.error("Error fetching blog data:", error);
        });
    },
  },
};
</script>

<style scoped>
/* Add any additional styling here */
header {
  background-image: url('https://img.freepik.com/free-photo/healthy-homemade-meal-with-organic-vegetable-variation-garlic-seasoning-generated-by-ai_188544-55802.jpg?t=st=1701189311~exp=1701192911~hmac=af35c7d9cac4bd1dc64cb8dbbef2a1d0fea0ff5be385d30010c04d5a81a9b6e2&w=1800'); /* Replace with the actual URL of your background image */
  background-size: cover;
  background-position: center;
}

/* Adjust the text styles as needed */
header {
  background-size: cover;
  background-position: center;
  
}

header h1 {
  letter-spacing: 2px; /* Add letter-spacing for a modern look */
}

header p.text-xl {
  max-width: 800px; /* Limit the width of the text for better readability */
  margin: 0 auto; /* Center the text */
}


/* Add transition for hover effect */
.relative:hover .text-center {
  transform: scale(1.05);
}

/* Gradient overlay */
.group {
  overflow: hidden;
}

.bg-gradient-to-t {
  background: linear-gradient(to top, transparent, black);
  transition: opacity 0.5s;
}


</style>
