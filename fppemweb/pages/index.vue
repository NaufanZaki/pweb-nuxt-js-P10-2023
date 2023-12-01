<template>
  <div class="page-container" :class="{ 'dark-mode': isDarkMode }" data-aos="fade-up" data-aos-duration="1000">
    <!-- Header Section -->
    <div class="absolute inset-0 flex items-center justify-center text-white">
      <h2 :style="{ opacity: 1 - layerOpacity }" class="text-4xl font-bold"></h2>
    </div>
    <header
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
      class="relative bg-cover bg-center text-white py-32 bright"
    >
      <div :style="{ opacity: layerOpacity }" class="absolute inset-0 bg-black"></div>
      <div class="container mx-auto text-center relative z-10">
        <h1 class="text-6xl font-extrabold mb-8">Resep Nenek</h1>
        <p class="text-xl mb-4">Discover and try delicious recipes from grandma!</p>
        <p class="text-lg mb-8">
          Get inspired by delicious recipes from grandma. Explore various traditional recipes that are tasty and easy to try at home.
        </p>
        <!-- Add Nuxt Link to the Blog Page -->
        <nuxt-link
          to="/blog"
          class="text-lg bg-gray-800 text-white mx-8 my-4 px-6 py-3 rounded-full hover:bg-gray-300 hover:text-gray-800 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Explore Recipes
        </nuxt-link>
      </div>
      <div class="absolute inset-0 flex items-center justify-center text-white">
        <h2 :style="{ opacity: 1 - layerOpacity }" class="text-4xl font-bold"></h2>
      </div>
    </header>

    <!-- Discover Culinary Delights Section -->
    <div class="container-wrapper" data-aos="fade-up" data-aos-duration="1000">
      <section class="py-16" data-aos="fade-right" data-aos-duration="1000">
        <!-- Set the duration in milliseconds -->
        <div class="container mx-auto text-center hover-container">
          <div class="mb-4">
            <img
              src="https://img.freepik.com/free-photo/hand-slicing-fresh-vegetables-homemade-salad-generated-by-ai_188544-26037.jpg?t=st=1701287900~exp=1701291500~hmac=4903e6a19def8afc97cfe7d20b35121b5d24219888ef19a8d1bc10d40ee58409&w=1800"
              alt="Section Image"
              class="w-full h-64 object-cover mb-4"
            />
          </div>
          <h2 class="text-4xl font-semibold mb-4 hover-line">Discover Culinary Delights with Resep Nenek</h2>
          <p class="text-lg mb-8 leading-relaxed">
            Welcome to Resep Nenek, your culinary companion on a journey to exquisite flavors and delightful recipes. Our platform is dedicated to bringing you the best tips for crafting mouth-watering meals that will leave you and your loved ones craving for more.
          </p>
        </div>
      </section>
    </div>
  </div>
  <br>
  <br>
    <!-- Featured Recipe Section -->
<div class="container-wrapper" data-aos="fade-up" data-aos-duration="1000">
  <h2 class="text-4xl font-semibold mb-8 text-center hover-line">Featured Recipe</h2>

  <!-- Slides Section -->
  <div class="relative overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
    <!-- Slides -->
    <div class="flex transition-transform duration-500 ease-in-out" data-aos="fade-up" data-aos-duration="1000" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <!-- Featured Recipe Card -->
      <div v-for="(post, index) in blogData" :key="index" class="w-full flex-shrink-0">
        <nuxt-link :to="{ name: 'id', params: { id: post.id } }" class="block relative group">
          <div class="relative group">
            <img :src="post.image" :alt="post.title" class="w-full h-96 object-cover mb-0" />
            <div class="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-40 group-hover:opacity-0"></div>
          </div>
          <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <div class="text-center transition-transform transform group-hover:scale-105 text-white hover">
              <h2 class="text-4xl font-semibold mb-2">{{ post.title }}</h2>
              <p class="text-lg mb-4">{{ post.recipe }}</p>
              <p class="text-lg">{{ post.tutorial }}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <!-- Navigation Arrows -->
    <button @click="prevSlide" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full opacity-60 hover:opacity-80">
      <span>&lt;</span>
    </button>
    <button @click="nextSlide" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full opacity-60 hover:opacity-80">
      <span>&gt;</span>
    </button>
  </div>
</div>




  <!-- Cooking Tips Section -->
  <div class="container-wrapper" data-aos="fade-up" data-aos-duration="1000">
    <section class="py-16" data-aos="fade-left" data-aos-duration="1000">
      <!-- Set the duration in milliseconds -->
      <div class="container mx-auto text-center hover-container">
        <div class="mb-4">
          <img
            src="https://img.freepik.com/free-photo/mid-section-og-anonymous-cook-seasoning-dish-with-pepper_1098-20544.jpg?t=st=1701288245~exp=1701288845~hmac=89cfa9e28f15d442b552e46ed5716e1692da792b7211f591b966fbe26d4fd005"
            alt="Section Image"
            class="w-full h-64 object-cover mb-4"
          />
        </div>
        <h2 class="text-4xl font-semibold mb-4 hover-line">Cooking Tips for Perfection</h2>
        <p class="text-lg mb-8 leading-relaxed">
          Uncover the secrets of the kitchen with our expert tips and tricks. From mastering essential cooking techniques to choosing the finest ingredients, we empower you to elevate your culinary skills and create dishes that are both impressive and delectable.
        </p>
      </div>
    </section>
  </div>
  <!-- Upcoming Recipes Section -->
<div class="container-wrapper">
  <section class="py-16" data-aos="fade-up" data-aos-duration="1000">
    <div class="container mx-auto text-center hover-container">
      <h2 class="text-4xl font-semibold mb-4 hover-line">Upcoming Recipe</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        <!-- Featured Recipe Card 1 -->
        <div class="group relative overflow-hidden rounded-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          <img
            src="https://img.freepik.com/free-photo/top-view-delicious-salmon-table_23-2150857906.jpg?t=st=1701349674~exp=1701353274~hmac=2024009de6a1a63e9bf5045c4567e52ef06370c4ef281e94de4dfca7efaf711b&w=1800"
            alt="Featured Recipe"
            class="w-full h-64 object-cover mb-0 rounded-t-md"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-40 group-hover:opacity-0"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center transition-transform transform group-hover:scale-105 text-white hover">
              <h2 class="text-2xl font-semibold mb-2">Savory Grilled Salmon</h2>
              <p class="text-lg">A delightful salmon recipe seasoned to perfection.</p>
              <p class="text-lg">Ingredients: Salmon fillet, Lemon, Herbs, Olive Oil</p>
            </div>
          </div>
        </div>

        <!-- Featured Recipe Card 2 -->
        <div class="group relative overflow-hidden rounded-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          <img
            src="https://img.freepik.com/free-photo/layered-chocolate-tiramisu-cake-with-mascarpone-cream-generated-by-ai_188544-18033.jpg?t=st=1701349464~exp=1701353064~hmac=6c72138968e741b6a5c8d0f6fa61f7d190896833f01a90ead5f9ae59c7663d4a&w=1800"
            alt="Featured Recipe"
            class="w-full h-64 object-cover mb-0 rounded-t-md"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-40 group-hover:opacity-0"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center transition-transform transform group-hover:scale-105 text-white hover">
              <h2 class="text-2xl font-semibold mb-2">Mouthwatering Tiramisu</h2>
              <p class="text-lg">Indulge in the classic Italian dessert - Tiramisu.</p>
              <p class="text-lg">Ingredients: Ladyfingers, Coffee, Mascarpone, Cocoa</p>
            </div>
          </div>
        </div>

        <!-- Add more featured recipe cards as needed -->

      </div>
    </div>
  </section>
</div>

<!-- Testimonials Section -->
<div class="container-wrapper">
  <section class="py-16" data-aos="fade-up" data-aos-duration="1000">
    <div class="container mx-auto text-center hover-container">
      <h2 class="text-4xl font-semibold mb-4 hover-line">What Our Users Say</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Testimonial Card 1 -->
        <div class="p-6 bg-white rounded-md shadow-md">
          <p class="text-lg mb-4">"Resep Nenek has made cooking a joy for me. The variety of recipes is incredible, and the results are always delicious!"</p>
          <p class="text-sm font-semibold">- Jordy Ahmad</p>
        </div>

        <!-- Testimonial Card 2 -->
        <div class="p-6 bg-white rounded-md shadow-md">
          <p class="text-lg mb-4">"The cooking tips and tricks on Resep Nenek have taken my culinary skills to a new level. Every dish is a masterpiece!"</p>
          <p class="text-sm font-semibold">- Icikiwir </p>
        </div>
        
        <!-- Testimonial Card 2 -->
        <div class="p-6 bg-white rounded-md shadow-md">
          <p class="text-lg mb-4">"Because of the Resep Nenek recipe i can cook for my homies and my dawg"</p>
          <p class="text-sm font-semibold">- Supardi </p>
        </div>
        <!-- Add more testimonial cards as needed -->

      </div>
    </div>
  </section>
</div>


    <!-- Newsletter Subscription Section -->
  <section class="py-8">
    <div class="container mx-auto text-center">
      <h2 class="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>

      <!-- Form -->
      <form class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Left Section: First Name, Last Name, and Email -->
        <div>
          <div class="mb-4">
            <label for="firstName" class="block text-lg mb-2">First Name</label>
            <input type="text" id="firstName" name="firstName" class="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
          </div>

          <div class="mb-4">
            <label for="lastName" class="block text-lg mb-2">Last Name</label>
            <input type="text" id="lastName" name="lastName" class="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
          </div>

          <div class="mb-4">
            <label for="email" class="block text-lg mb-2">Email Address</label>
            <input type="email" id="email" name="email" class="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
          </div>
        </div>

        <!-- Right Section: Postal Code and Address -->
        <div>
          <div class="mb-4">
            <label for="postalCode" class="block text-lg mb-2">Postal Code</label>
            <input type="text" id="postalCode" name="postalCode" class="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500" />
          </div>

          <div class="mb-4">
            <label for="address" class="block text-lg mb-2">Address</label>
            <textarea id="address" name="address" rows="4" class="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"></textarea>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="col-span-2">
          <button
            type="submit"
            class="w-full bg-teal-800 text-white px-6 py-2 rounded hover:bg-teal-300 focus:outline-none focus:bg-teal-300 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  data() {
    return {
      blogData: [],
      currentIndex: 0,
      intervalId: null,
      layerOpacity: 0,
    };
  },

  mounted() {
    this.fetchBlogData();
    this.startAutoSlide();
    AOS.init({
      duration: 1000, // Set the duration in milliseconds (e.g., 1000 for 1 second)
    });
  },

  beforeDestroy() {
    this.stopAutoSlide();
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
            recipe: blog.Recipe,
            image: blog.Image,
            tutorial: blog.Tutorial,
          }));
        })
        .catch((error) => {
          console.error("Error fetching blog data:", error);
        });
    },

    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.blogData.length) % this.blogData.length;
    },

    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.blogData.length;
    },

    startAutoSlide() {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 5000);
    },

    stopAutoSlide() {
      clearInterval(this.intervalId);
    },

    handleMouseMove(event) {
      const rect = event.target.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const distanceToCenter = Math.sqrt(Math.pow(x - rect.width / 2, 2) + Math.pow(y - rect.height / 2, 2));
      const maxDistance = Math.sqrt(Math.pow(rect.width / 2, 2) + Math.pow(rect.height / 2, 2));

      this.layerOpacity = Math.min((distanceToCenter / maxDistance) * 0.5, 0.5);
    },

    handleMouseLeave() {
      this.layerOpacity = 0;
    },
  },
};
</script>

<style scoped>
body {
  font-family: 'Poppins', sans-serif;
  color: #eeeeee; /* Updated font color */
}

body h2 {
  font-family: 'Playfair Display', serif;

}

/* Your existing styles */
header {
  font-family: 'Poppins', sans-serif;
  position: relative;
  background-image: url('https://img.freepik.com/free-photo/healthy-homemade-meal-with-organic-vegetable-variation-garlic-seasoning-generated-by-ai_188544-55802.jpg?t=st=1701189311~exp=1701192911~hmac=af35c7d9cac4bd1dc64cb8dbbef2a1d0fea0ff5be385d30010c04d5a81a9b6e2&w=1800');
  background-size: cover;
  background-position: center;
}

header h1 {
  letter-spacing: 2px;
}

header p.text-xl {
  max-width: 800px;
  margin: 0 auto;
  color: #efdada; /* Updated font color */
}

.group {
  overflow: hidden;
}

/* Position the navigation arrows */
.absolute.left-0 {
  left: 2rem; /* Adjust the distance from the left edge as needed */
}

.page-container {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.page-container:hover {
  transform: translateY(-4px);
}

.container-wrapper {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.container-wrapper:hover {
  transform: translateY(-4px);
}

/* Dark Mode Styles */
.dark-mode {
  background-color: #1a202c;
  color: #d8dee9;
}

.dark-mode header {
  background-image: url('your-dark-mode-image-url'); /* Replace with dark mode image */
}

.dark-mode h2,
.dark-mode h1,
.dark-mode p {
  color: #d8dee9;
}

.dark-mode .text-white {
  color: #fff !important;
}

[data-aos="fade-right"] {
  opacity: 0;
  transition-property: opacity;
  will-change: opacity;
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

/* Newsletter Subscription Section */
.newsletter-section {
  padding: 4rem 0;
}

.newsletter-section h2 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
}

.newsletter-section form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.newsletter-section form .mb-4 {
  margin-bottom: 1.5rem;
}

.newsletter-section label {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  display: block;
  margin-bottom: 0.5rem;
}

.newsletter-section input,
.newsletter-section textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
}

.newsletter-section button {
  background-color: #007bff;
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.newsletter-section button:hover {
  background-color: #0056b3;
}

/* Featured Recipes Section Styles */
.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

/* Testimonials Section Styles */
@media (min-width: 768px) {
  .md\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .lg\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

</style>